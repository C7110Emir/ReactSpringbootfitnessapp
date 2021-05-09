import "./style.css"
import style from "./loginform.module.css"
import {Form} from 'react-bootstrap';
import React, { useEffect, useState , useRef} from "react";
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormData from 'form-data'
import FormControl from '@material-ui/core/FormControl';
function SignUpForm() {
 
    const [user_name, setUserName] = useState("");
    const [user_password, setUserPassword] = useState("");
    const [user_email, setUserEmail] = useState("");
    const [user_country, setUserCountry] = useState("");
    const nameRef = useRef(null)
    const passref = useRef(null)
    const emailref = useRef(null)
    const countryref = useRef(null)
    const [data, setData] = useState([])

    useEffect(() =>{
        getdatabasedata()
    })

    const getdatabasedata = () =>{
        axios.get("http://localhost:8080/api/users/").then((res) =>{
            setData(res.data)
        })
    }
    
      const handleUserInput = async event => {

        
           
        event.preventDefault ();


        const user_info = {
          user: user_name,
          password: user_password,
          email: user_email,
          country: user_country
        };

        if(user_name == "" || user_password == "" || user_country.value == "" || user_email == ""){
            alert("Please enter your information")
            setUserName("")
            setUserCountry("")
            setUserEmail("")
            setUserPassword("")
            return;
        }
    
         if(user_info.email.includes('@') == false || user_info.email.includes('.com') == false){
            alert("Please enter valid email")
            setUserName("")
            setUserCountry("")
            setUserEmail("")
            setUserPassword("")
            return;
        }
        
        if(data.map((element)=>{
            if(element.user === user_info.user){
                alert("Username exists, Please enter new Username")
                return true;
            }if(element.email === user_info.email){
                alert("Email exists, Please enter new Email")
                return true;
            }
        })){
            setUserName("")
            setUserCountry("")
            setUserEmail("")
            setUserPassword("")
            return
        }
        console.log("Passed")
       
        try {
            
            const token = await axios.post('http://localhost:8080/api/users/', user_info);
            //axios.delete('http://localhost:8080/api/users/',user_info);
          } catch(error){
            console.log(error.response.data.error)
            }

            
          
      };
        
        
           // axios.post('http://localhost:8080/api/users/', user_info);
        
    
 
        
    return (

        <div >
            
            <Form >
                <h1 className={style.signuptitle}>Register</h1><br/>
                <hr></hr><br/>
                
               <TextField className = {style.text_input} ref={nameRef} value={user_name} id="outlined-basic" onChange={e => setUserName(e.target.value)} label="User Name" variant="outlined" /><br/><br/>
                <TextField className = {style.text_input} ref={passref}  value={user_password} id="outlined-basic" onChange={e => setUserPassword(e.target.value)} label="Password" variant="outlined" /> <br/><br/>
                <TextField className = {style.text_input} ref={emailref} value={user_email} id="outlined-basic" onChange={e => setUserEmail(e.target.value)} label="Email" variant="outlined" /><br/><br/>
                <TextField className = {style.text_input} ref={countryref} value={user_country} id="outlined-basic" onChange={e => setUserCountry(e.target.value)} label="Country" variant="outlined" /><br/><br/>
                
                <Button onClick={handleUserInput} >Register</Button>
                
            </Form>
    
        
            

             {/*
                     <div className={style.SignUpdiv}>
            <form action="" className={style.signupform} onSubmit={handleUserInput}>
                <h1 className={style.signuptitle}>Sign Up</h1><br/>
                <hr></hr><br/>
                <label for="signupusername" className={style.signupusername} className={style.text}>Username:</label><br/><br/>
                <input type="username" id="signupusername" onChange={e => setUserName(e.target.value)} className={style.signupusernameinput} className={style.input} placeholder="Username"/><br/><br/>
                <label for="signuppassword" className={style.signuppassword} className={style.text}>Password:</label><br/><br/>
                <input type="password" id="signuppassword" onChange={e => setUserPassword(e.target.value)} className={style.signuppasswordinput} className={style.input} placeholder="Password" maxLength="6"/><br/><br/>
                <label for="reenterpass" className={style.reenterpassword} className={style.text}>Re-enter Password:</label><br/><br/>
                <input id="reenterpass" type="password" onChange={e => setUserEmail(e.target.value)} className={style.reenterpasswordinput} className={style.input} placeholder="Re-enter Password"/><br/><br/>
                <label for="signupemail" className={style.signupemail} className={style.text}>Email:</label><br/><br/>
                <input type="email" id="signupemail"  onChange={e => setUserEmail(e.target.value)}className={style.signupemailinput} className={style.input} placeholder="example@example.com"/><br/><br/>
                <label for="signupcountry" className={style.signupcountry} className={style.text}>Country:</label><br/><br/>
                <input type="country" id="signupcountry"  onChange={e => setUserCountry(e.target.value)} className={style.signupcountryinput} className={style.input} placeholder="Country"/><br/><br/>
                <button type="submit" className={style.Signupbutton} >Sign Up</button>
            </form>
        </div>
            
   
       <Form lassName={style.signupform} onSubmit={handleUserInput}>
        <h1 className={style.signuptitle}>Sign Up</h1><br/>
        <hr></hr><br/>
        <TextField className = {style.text_input} id="outlined-basic" onChange={handleChange}  name="user_name" label="User Name" variant="outlined" /><br/><br/>
        <Form.Label className={style.signupusername} className={style.text}>Username:</Form.Label><br/><br/>
        <Form.Control
            className={style.signupusernameinput} className={style.input} 
            type="text"
            name="user_name"
            placeholder="Username"
            onChange={handleChange}
        />  
        <br/><br/>
        <Form.Label className= {style.signuppassword} className={style.text}>Password:</Form.Label><br/><br/>
        <Form.Control
            className= {style.signuppasswordinput} className={style.input} 
            maxLength="6"
            type="password" 
            name="user_password"
            placeholder="Password"
            onChange={handleChange}
        />
        <br/><br/>
        <Form.Label className={style.reenterpassword} className={style.text}>Re-enter Password:</Form.Label><br/><br/>
        <Form.Control
            className= {style.reenterpasswordinput} className={style.input}
            maxLength="6"
            type="password" 
            name="user_password"
            placeholder="Re-enter Password"
            onChange={handleChange}
        />
        <br/><br/>
        <Form.Label className={style.signupemail} className={style.text}>Email:</Form.Label><br/><br/>
        <Form.Control
            className= {style.signupemailinput} className={style.input} 
            maxLength="6"
            type="email" 
            name="user_email"
            placeholder="example@example.com"
            onChange={handleChange}
        />
        <br/><br/>
        <Form.Label className={style.signupcountry} className={style.text}>Country:</Form.Label><br/><br/>
        <Form.Control
            className= {style.signupcountryinput} className={style.input}
            maxLength="6"
            type="country" 
            name="user_country"
            placeholder="Country"
            onChange={handleChange}
        />
        <br/><br/>
        <div>
              <Button className="button" variant="primary" type="submit">
                Sign Up
              </Button>
            </div>
        </Form>

   */}

        {/*
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
        
*/}
       </div>
    )
}
 export default SignUpForm;