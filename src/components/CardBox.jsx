import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux'

function CardBox(data) {
  const {checkList} = useSelector((state)=>state.listCheck)
  const dispatch = useDispatch()
  console.log(data);
  return (
    <div>                                        
    
        <div className="header__box" >
        <button className={`header__box-check ${checkList == true ? "active" : ""}`} onClick={()=> dispatch({type: 'check'})}></button>
                <p>{data.inputValue}</p>
        <button className="header__box-basket"><FaRegTrashCan /></button>
    </div>

</div>
  )
}

export default CardBox