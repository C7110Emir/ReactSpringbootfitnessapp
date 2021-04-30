import React from 'react'
import style from "./loginform.module.css"


function Loginform() {
    const submitButton = (ev) =>{
        ev.preventDefault()
        
    }

    return (
        <div className={style.outerDiv}>
            <div className={style.logindiv}>
                <form action="" className={style.formtag} onSubmit={submitButton}>
                    <h1 className={style.logintitle}>Log In</h1>
                    <hr/>
                    <label for="username" className={style.loginusername}>Username:</label><br/>
                    <input type="text" id="username" className={style.loginusernameinput} placeholder="Username"/><br/><br/>
                    <label for="loginpassword"  className={style.loginpassword}>Password:</label><br/>
                    <input type="password" id="loginpassword" className={style.loginpassword} maxLength="6" placeholder="Password"/><br/><br/>
                    <button type="submit" disabled>Log In</button> 
                </form>          
            </div> 
            <div className={style.SignUpdiv}>
                <form action="" className={style.signupform}>
                    <h1 className={style.signuptitle}>Signup</h1>
                    <label for="signupusername" className={style.signupusername}>Username:</label><br/><br/>
                    <input type="text" id="signupusername" className={style.signupusernameinput} placeholder="Username"/><br/><br/>
                    <label for="signuppassword" className={style.signuppassword}>Password:</label><br/><br/>
                    <input type="password" id="signuppassword" className={style.signuppasswordinput} placeholder="Password"/><br/><br/>
                    <label for="reenterpass" className={style.reenterpassword}>Re-enter Password:</label><br/><br/>
                    <input id="reenterpass" type="password" className={style.reenterpasswordinput} placeholder="Re-enter Password"/><br/><br/>
                    <label for="signupemail" className={style.signupemail}>Email:</label><br/><br/>
                    <input type="email" id="signupemail" className={style.signupemailinput} placeholder="example@example.com"/><br/><br/>
                    <label for="signupcountry" className={style.signupcountry}>Country:</label>
                </form>
            </div>


        </div>
    )
}

export default Loginform;