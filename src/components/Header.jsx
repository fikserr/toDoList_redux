import { IoMdAddCircleOutline } from "react-icons/io";
import clipboard from '../img/Clipboard.png'
import { useDispatch, useSelector } from 'react-redux'
import { setInputValue } from "../redux/action";
import { useEffect, useState } from "react";

function Header() {
                function getStorage(){
                        let data = localStorage.getItem("notes")
                        if(data){
                        return JSON.parse(localStorage.getItem("notes"))
                        }else{
                        return []
                        }
                }

        const {inputValue,id} = useSelector((state)=>state.note)
        const dispatch = useDispatch()
        const [data,setData] = useState(getStorage)
        const editData = {inputValue,id}
        function onChange(e) {
                dispatch(setInputValue(e.target.value))
                console.log(e);
              }
        
     
              useEffect(()=>{
                localStorage.setItem("notes",JSON.stringify(data))
              },[data])

              function addData() {
                setData([editData,...data])
              }

        return (
    <div className="header">
            <div className="container">
                    <div className="header__content">

                            <div className="header__search">
                                    <input type="text" 
                                    placeholder="Add a new task.."  
                                    value={inputValue}
                                    onChange={onChange}/>
                                    <button  onClick={addData}>Add Note <span><IoMdAddCircleOutline /></span></button>
                            </div>


                            <div className="header__tasks">
                                <p className="header__tasks-title">Tasks created <span>0</span></p>
                                <p className="header__tasks-complate">Completed <span>0</span></p>
                            </div>

                            <div className="header__note">
                                    <div className="header__clipboard">
                                        <img src={clipboard} alt="" className="header__clipboard-img"/>
                                        <p className="header__clipboard-text">You don`t have tasks registered yet
                                        Create tasks and organize your to-do items</p>
                                    </div>


                                    <div className="header__box">
                                                <p>0</p>
                                    </div>
                            </div>
                    </div>
            </div>
    </div>
  )
}

export default Header