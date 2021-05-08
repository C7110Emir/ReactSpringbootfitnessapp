
import Loginimage from "./loginform/loginimage.js"

import Loginform from "./loginform/loginform.js"
import SignUpForm from "./loginform/signup.js"
import React, { useEffect, useState } from "react";
import style from "./loginform/loginform.module.css"
import Button from '@material-ui/core/Button';
function LoginSignup() {
    const [have_account, setAccount] = useState(false);
  
    const changeState = (value) =>{
        setAccount(value)
 
    }
    return (
      
            <div className={style.outerDiv}>
                
            <div className={style.logindiv}>
           
            <div className={style.SignUpdiv}>
               
            <Loginimage/>
      
        
            <Button className={style.button_login} onClick={() => changeState(true)}>Login</Button>{' '}
            <Button className={style.button_sign_up} onClick={() => changeState(false)}>Sign up</Button>{' '}
         
            <hr></hr><br/>
                {have_account?
                <Loginform/>:
                <SignUpForm/>
                    }
                </div>
           </div>
        </div>
    )
}

export default LoginSignup;
