import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import './navbar.css'


function Navbar() {

    const [theme , setTheme] = useState("light-mode")
    useEffect(()=>{
      document.body.className = theme;

    })
  
  const toggleTheme = () => {
    if(theme==="dark-theme"){
      setTheme("light-theme")
    }else{
      setTheme("dark-theme")
    }
  }
  
  return (
    <>
        <div className='navbar'>
            <h1>Where in the world</h1>
            <button className='dark' onClick={toggleTheme}
              ><i className="fa-regular fa-moon" style={{marginRight:"5px"}}></i>Dark Mode</button>

        </div>
    </>
  )
}


export default Navbar
