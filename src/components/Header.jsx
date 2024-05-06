        import { IoMdAddCircleOutline } from "react-icons/io";
        import clipboard from '../img/Clipboard.png'
        import { FaRegTrashCan } from "react-icons/fa6";
        import { IoMdCheckmark } from "react-icons/io";
        import { useEffect, useState } from "react";
 

                

        function Header() {

                function getLocalStorage() {
                        let data = []
                        if (localStorage.getItem('myArray')) {
                                data = JSON.parse(localStorage.getItem('myArray'))

                        }else {
                                data = []
                        } return data
                }
                const [data,setData] = useState(getLocalStorage)
                const [value,setValue] = useState('')  
                let currentDate = new Date();
                function sendData() {
                        setData([...data,{text:value,id:currentDate.getTime(),textLine: false}])
                        setValue('')
                }
                
                function Cancel(el) {
                        setData(data.filter(item => item?.id != el) )
                }
                function btnActive(el) {
                        
                        setData(  data.map(item => 
                                item?.id === el ? {...item, textLine: !item?.textLine} : {...item}
                              ))



                }
                
                useEffect(()=>{
                        localStorage.setItem('myArray', JSON.stringify(data));
                },[data])
                
                console.log(data);
         
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
                                        <p className="header__tasks-title">Tasks created <span>0</span></p>
                                        <p className="header__tasks-complate">Completed <span>0</span></p>
                                </div>



                                <div className="header__note">
                                        <div className={`header__clipboard  ${ data == [{}]  ? "active" : ""}`} >
                                                <img src={clipboard} alt="" className="header__clipboard-img"/>
                                                <p className="header__clipboard-text">You don`t have tasks registered yet
                                                Create tasks and organize your to-do items</p>
                                        </div>

                                        
                                        <div className="header__card">
                                                
                                              {
                                                data?.map(item =>(
                                                        <div className="header__box" key={item?.id}>
                                                        <button className={`header__box-check ${item?.textLine ? "active" : ""}`}   onClick={()=>btnActive(item?.id)}> <IoMdCheckmark /></button>
                                                                <p className={` ${item?.textLine ? "active" : ""}`}>{item?.text}</p>
                                                        <button className="header__box-basket" onClick={()=>  Cancel(item?.id)}><FaRegTrashCan /></button>
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