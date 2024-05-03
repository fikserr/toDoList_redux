        import { IoMdAddCircleOutline } from "react-icons/io";
        import clipboard from '../img/Clipboard.png'
        import { FaRegTrashCan } from "react-icons/fa6";
        import { IoMdCheckmark } from "react-icons/io";
        import { useEffect, useState } from "react";
 
        const allData = []

                

        function Header() {
                const [data,setData] = useState()
                const [value,setValue] = useState('')  
                const [dataMap,setDataMap] = useState()
                const [active,setActive] = useState(false)
                const [Del,setDel] = useState()
                let currentDate = new Date();
                let id = null
                function sendData() {
                        setData({text:value,id:currentDate.getTime()})
                        allData.push(data)
                        let array = JSON.stringify(allData)
                        localStorage.setItem('myArray', array);
                        setValue('')
                }
                
                function Cancel(el) {
                        setDel(JSON.parse(localStorage.getItem('myArray')))
                        Del.map(item => item?.id != el) 
                }
                function btnActive(el) {
                        id = el
                        setActive(!active)               
                }
                
                useEffect(()=>{
                        setDataMap(JSON.parse(localStorage.getItem('myArray')))
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
                                        <p className="header__tasks-title">Tasks created <span>0</span></p>
                                        <p className="header__tasks-complate">Completed <span>0</span></p>
                                </div>



                                <div className="header__note">
                                        <div className={`header__clipboard  ${ allData ? "active" : ""}`} >
                                                <img src={clipboard} alt="" className="header__clipboard-img"/>
                                                <p className="header__clipboard-text">You don`t have tasks registered yet
                                                Create tasks and organize your to-do items</p>
                                        </div>

                                        
                                        <div className="header__card">
                                                
                                              {
                                                dataMap?.map(item =>(
                                                        <div className="header__box" key={item?.id}>
                                                        <button className={`header__box-check ${active && id  == item?.id ? "active" : ""}`}   onClick={()=>btnActive(item?.id)}> <IoMdCheckmark /></button>
                                                                <p className={` ${active && id == item?.id ? "active" : ""}`}>{item?.text}</p>
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