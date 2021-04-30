import React from 'react'
import style from "./loginsignup.module.css"
import Loginimage from "./loginform/loginimage.js"
import Loginform from "./loginform/loginform.js"
function LoginSignup() {
    return (
        <div>
           <Loginimage/>
           <Loginform/>
        </div>
    )
}

export default LoginSignup;
