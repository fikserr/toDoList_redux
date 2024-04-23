import { IoMdAddCircleOutline } from "react-icons/io";
import clipboard from '../img/Clipboard.png'
import { useDispatch, useSelector } from 'react-redux'
import { setInputValue } from "../redux/action";
import CardBox from "./CardBox";

        

function Header() {


        const {inputValue} = useSelector((state)=>state.note)
        const dispatch = useDispatch()
        let all = [localStorage.getItem("myArray")];

        console.log(JSON.parse(all));
        function onChange(e) {
                dispatch(setInputValue(e.target.value))
                console.log(e);
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
                                    <button  onClick={()=> dispatch({type: "btn"})}>Add Note <span><IoMdAddCircleOutline /></span></button>
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

                                
                                <div className="header__card">
                                        {all.map(item => (
                                                <CardBox key={item.id} data={item} />
                                        ))}
                                </div>
                            </div>
                    </div>
            </div>
    </div>
  )
}

export default Header