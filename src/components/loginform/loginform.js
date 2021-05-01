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
                    <h1 className={style.logintitle}>Log In</h1><br/>
                    <hr/><br/><br/>
                    <label for="username" className={style.loginusername} className={style.text}>Username:</label><br/><br/>
                    <input type="text" id="username" className={style.loginusernameinput} className={style.logininput} placeholder="Username"/><br/><br/><br/><br/>
                    <label for="loginpassword"  className={style.loginpassword} className={style.text}>Password:</label><br/><br/>
                    <input type="password" id="loginpassword" className={style.loginpassword} className={style.logininput}  maxLength="6" placeholder="Password"/><br/><br/><br/>
                    <p className={style.loginnoaccount} id={style.youdonthaveanaccount}>You don't have an account?</p><br/><br/>
                    


                    <button type="submit" className={style.loginbutton} >Log In</button> 
                </form>          
            </div> 
            <div className={style.SignUpdiv}>
                <form action="" className={style.signupform} onSubmit={submitButton}>
                    <h1 className={style.signuptitle}>Sign Up</h1><br/>
                    <hr></hr><br/>
                    <label for="signupusername" className={style.signupusername} className={style.text}>Username:</label><br/><br/>
                    <input type="username" id="signupusername" className={style.signupusernameinput} className={style.input} placeholder="Username"/><br/><br/>
                    <label for="signuppassword" className={style.signuppassword} className={style.text}>Password:</label><br/><br/>
                    <input type="password" id="signuppassword" className={style.signuppasswordinput} className={style.input} placeholder="Password" maxLength="6"/><br/><br/>
                    <label for="reenterpass" className={style.reenterpassword} className={style.text}>Re-enter Password:</label><br/><br/>
                    <input id="reenterpass" type="password" className={style.reenterpasswordinput} className={style.input} placeholder="Re-enter Password"/><br/><br/>
                    <label for="signupemail" className={style.signupemail} className={style.text}>Email:</label><br/><br/>
                    <input type="email" id="signupemail" className={style.signupemailinput} className={style.input} placeholder="example@example.com"/><br/><br/>
                    <label for="signupcountry" className={style.signupcountry} className={style.text}>Country:</label><br/><br/>
                    <input type="country" id="signupcountry" className={style.signupcountryinput} className={style.input} placeholder="Country"/><br/><br/>
                    <button type="submit" className={style.Signupbutton} >Sign Up</button>
                </form>
            </div>


        </div>
    )
}

export default Loginform;