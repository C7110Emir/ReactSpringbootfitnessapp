import React from 'react'
import style from "./loginimage.module.css"
import image from "../navbar/new-health-logo-design.jpg"
function Loginimage() {
    return (
        <div className={style.img}>
            <img src={image} alt="logo"/>
        </div>
    )
}

export default Loginimage
