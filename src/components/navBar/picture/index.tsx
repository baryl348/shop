import React, { useState } from 'react'


const Picture:React.FC = () =>{
    const[inHover,setHover]=useState<boolean>(false)

    const visible = () =>{
      setHover(true)
    }
    const offVisible = ()=>{
      setHover(false)
    }
    return <div>
    <i className="fas fa-palette" onMouseEnter={visible} onMouseLeave={offVisible}></i>{inHover && 'test 2'}
    </div>
    }
export default Picture