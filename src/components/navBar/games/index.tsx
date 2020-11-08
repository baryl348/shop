import React, { useState } from 'react'
import ListGame from './list/list'


const Games:React.FC = () =>{
    const[inHover,setHover]=useState<boolean>(false)

const visible = () =>{
  setHover(true)
}
const offVisible = ()=>{
  setHover(false)
}
return <div>
    <div >{inHover && <ListGame/>}</div>
    <div><i className="fas fa-democrat" onMouseEnter={visible} onMouseLeave={offVisible}></i></div>

</div>

}
export default Games