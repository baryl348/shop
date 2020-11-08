import React, { useState } from 'react'

const Other:React.FC = () =>{
    const[inHover,setHover]=useState<boolean>(false)

const visible = () =>{
  setHover(true)
}
const offVisible = ()=>{
  setHover(false)
}
return <div>
<i className="fas fa-ellipsis-v" onMouseEnter={visible} onMouseLeave={offVisible}></i>{inHover && 'test 5'}
</div>
}
export default Other