import style from "./loginform.module.css"
import "./style.css"
import {Form} from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
function Loginform() {

    const [data, setData] = useState([]);
    const [user_name, setUserName] = useState("");
    const [user_password, setUserPassword] = useState("");
    
      
     useEffect(() => {
       getData()
     },[user_password]);

      const getData = () =>{
        axios.get("http://localhost:8080/api/users/").then((res) => {
            setData(res.data);
        });
        
      }

    const handleUserInput = async event => {

      event.preventDefault ();
        
      console.log(data)
      const mapresponse = []
      data.map((element)=>{
        if(element.userName == user_name && element.password == user_password){
          mapresponse.push(true)
        }
        else if(element.userName != user_name || element.password != user_password){
          mapresponse.push(false)
        }
      })
      console.log(mapresponse);
      if(!(mapresponse.includes(true))){
        alert("Your username or password doesn't exist, Please try again") 
        setUserPassword("")
      }
      else if(mapresponse.includes(true)){
        alert("Logged in successfully")
        setUserName("")
        setUserPassword("")
      }

    }
    return (
        <div className={style.outerDiv}>
            <div className={style.logindiv}>
           
            <Form >
                 <h1 className={style.logintitle}>Log In</h1><br/>
                   
                    <hr/><br/><br/>
                    
                    <TextField className = {style.text_input} id="outlined-basic" value={user_name} onChange={e => setUserName(e.target.value)} label="User Name" variant="outlined" /><br/><br/>
                    <TextField className = {style.text_input} id="outlined-password-input" label="Password" type="password" value={user_password} onChange={e => setUserPassword(e.target.value)} autoComplete="current-password" variant="outlined"/> <br/><br/>
                    <Button onClick={handleUserInput} >Log In</Button>
                   {/*
                    <label for="loginpassword"  className={style.loginpassword} className={style.text}>Password:</label><br/><br/>
                    <input type="password" id="loginpassword" className={style.loginpassword} className={style.logininput}  maxLength="6" placeholder="Password"/><br/><br/><br/>
                    <p className={style.loginnoaccount} id={style.youdonthaveanaccount}>You don't have an account?</p><br/><br/>
                    
                   */}
                    
                    </Form> 
                         
                
                
            </div> 
        </div>
    )
}

export default Loginform;