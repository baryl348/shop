import React, { useState } from 'react'

const BoardGames:React.FC = () =>{
    const[inHover,setHover]=useState<boolean>(false)

const visible = () =>{
  setHover(true)
}
const offVisible = ()=>{
  setHover(false)
}
return <div>
<i className="fas fa-dice" onMouseEnter={visible} onMouseLeave={offVisible}></i>{inHover && 'test 3'}
</div>
}
export default BoardGames