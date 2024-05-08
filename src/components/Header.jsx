import { IoMdAddCircleOutline } from "react-icons/io";
import clipboard from '../img/Clipboard.png'
import { FaRegTrashCan } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

        
function Header() {
        const data = useSelector((state)=>state.note)
        const dispatch = useDispatch()
        console.log(data);
        const [value,setValue] = useState('')
        const [complated,setComplated] = useState(0)
        let total = data.length;
        let currentDate = new Date();
        
        function sendData() {
                dispatch({type:"addNote",payload:{text:value,id:currentDate.getTime(),textLine: false}});
                setValue('')
        }
        useEffect(()=>{
                setComplated(prevComplated => {
                        let newComplated = 0;
                        data.map(item => {
                          if (item?.textLine) {
                            newComplated++;
                          }
                        });
                        return newComplated;
                      });
                      
             
        },[data])
 
        return (
        <div className="header">
        <div className="container">
                <div className="header__content">
                        <div className="header__search">
                                <input type="text" 
                                placeholder="Add a new task.."
                                value={value}
                                onChange={(e)=>setValue(e.target.value)}/>
                                <button onClick={sendData}>Add Note <span><IoMdAddCircleOutline /></span></button>
                        </div>
                        <div className="header__tasks">
                                <p className="header__tasks-title">Tasks created <span>{total}</span></p>
                                <p className="header__tasks-complate">Completed<span>{`${total} of ${complated}`}</span></p>
                        </div>
                        <div className="header__note">
                                <div className={`header__clipboard  ${ 0 >= total  ? "" : "active"}`} >
                                        <img src={clipboard} alt="" className="header__clipboard-img"/>
                                        <p className="header__clipboard-text">You don`t have tasks registered yet
                                        Create tasks and organize your to-do items</p>
                                </div>
                                
                                <div className="header__card">
                                        
                                      {
                                        data.map(item =>(
                                                <div className="header__box" key={item?.id}>
                                                <button className={`header__box-check ${item?.textLine ? "active" : ""}`}   onClick={()=>dispatch({type:"active",payload:item?.id})}> <IoMdCheckmark /></button>
                                                        <p className={` ${item?.textLine ? "active" : ""}`}>{item?.text}</p>
                                                <button className="header__box-basket" onClick={()=>  dispatch({type:"delete",payload:item?.id})}><FaRegTrashCan /></button>
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