import React from 'react'
import image from './new-health-logo-design.jpg'
import style from './navbar.module.css'
function Navbar() {
    return (
        <div className={style.NavbarMain}>
            <div className={style.NavbarSec}>
                <img src={image} className="Logo"/>
                <input type="text" placeholder="Search" className={style.SearchBar}/>
                <button className={style.SignIn}>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar;