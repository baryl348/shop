import React, { useState } from 'react'

const Decoration:React.FC = () =>{
    const[inHover,setHover]=useState<boolean>(false)

const visible = () =>{
  setHover(true)
}
const offVisible = ()=>{
  setHover(false)
}
return <div>
<i className="fas fa-gem" onMouseEnter={visible} onMouseLeave={offVisible}></i>{inHover && 'test 4'}
</div>
}
export default Decoration