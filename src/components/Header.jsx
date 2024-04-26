        import { IoMdAddCircleOutline } from "react-icons/io";
        import clipboard from '../img/Clipboard.png'
        import { useDispatch, useSelector } from 'react-redux'
        import { setInputValue } from "../redux/action";
        import { useEffect, useState } from "react";
        import { FaRegTrashCan } from "react-icons/fa6";
        import { IoMdCheckmark } from "react-icons/io";
import { allData } from "../redux/notes";


                

        function Header() {


                const {inputValue} = useSelector((state)=>state.note)
                const {checkList} = useSelector((state)=>state.listCheck)
                const dispatch = useDispatch()
                const [data,setData] = useState([])
                function onChange(e) {
                        dispatch(setInputValue(e.target.value))
                        console.log(e);
                }
                
                useEffect(()=>{
                let ahar = JSON.parse(localStorage.getItem('myArray'))
                setData(ahar)

                },[])

                console.log(checkList);
                return (
                <div className="header">
                <div className="container">
                        <div className="header__content">

                                <div className="header__search">
                                        <input type="text" 
                                        placeholder="Add a new task.."  
                                        value={inputValue}
                                        onChange={onChange}/>
                                        <button  onClick={()=> dispatch({type: "btn"})}>Add Note <span><IoMdAddCircleOutline /></span></button>
                                </div>


                                <div className="header__tasks">
                                        <p className="header__tasks-title">Tasks created <span>0</span></p>
                                        <p className="header__tasks-complate">Completed <span>0</span></p>
                                </div>

                                <div className="header__note">
                                        <div className={`header__clipboard  ${data == [] ? "active" : ""}`}>
                                                <img src={clipboard} alt="" className="header__clipboard-img"/>
                                                <p className="header__clipboard-text">You don`t have tasks registered yet
                                                Create tasks and organize your to-do items</p>
                                        </div>

                                        
                                        <div className="header__card">
                                                {
                                                data?.map(item => (
                                                        
                                                        <div className="header__box" key={item.id}>
                                                        <button className={`header__box-check ${checkList === true && item.id  ? "active" : ""}`} onClick={()=> dispatch({type: 'check'})}> <IoMdCheckmark /></button>
                                                                <p className={` ${checkList === true && item.id  ? "active" : ""}`}>{item.inputValue}</p>
                                                        <button className="header__box-basket" onClick={()=> dispatch({type: `delete`, payload: `${item.id}`})}><FaRegTrashCan /></button>
                                                        </div>
                                                ))  
                                                }
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
        )
        }

        export default Header