import React, { useState, useEffect } from 'react'
import { Form, Alert } from 'react-bootstrap';
import Login from '../Login/Login';


function Registration() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    
    // on form submit...
    function handleFormSubmit(e) {
        e.preventDefault();
        if (!name || !email || !password || !phone ) {
            setFlag(true);

        } else {
            setFlag(false);
            
            const myObj = {
                id:new Date().getTime().toString(),
                userName:name,
                userPhone:phone,
                userEmail:email,
                userPassword:password

            }


            const prevStorageData = JSON.parse(localStorage.getItem("myData") || "[]")
            const newData = [... prevStorageData, myObj]
        
            localStorage.setItem("myData", JSON.stringify(newData));
 
          
            setLogin(!login)

        }
        
 
    }

    // Directly to the login page
    function handleClick() {
        setLogin(!login)
    }

   



    return (
        <>
            
             <div> {login ? <form onSubmit={handleFormSubmit}>
                <div className="head-bar text-center">
                <h3>Register</h3>
                <p>Please register your account</p>
                </div> 
                <div className="form-group">
                    <input type="text" className="user-control" placeholder="" name="name" autoComplete="off" onChange={(event) => setName(event.target.value)} />
                    <label className="form-label">Name</label>
                    <span className="enter"></span>
                </div>

                <div className="form-group">
                    <input type="email" className="user-control" placeholder="" autoComplete="off" onChange={(event) => setEmail(event.target.value)} />
                    <label className="form-label">Email</label>
                    <span className="enter"></span>
                </div>

                <div className="form-group">
                    <input type="password" className="user-control" placeholder="" autoComplete="off" onChange={(event) => setPassword(event.target.value)} />
                    <label className="form-label">Password</label>
                    <span className="enter"></span>
                </div>


                <div className="form-group">
                    <input type="Phone" className="user-control" placeholder="" autoComplete="off" onChange={(event) => setPhone(event.target.value)} />
                    <label className="form-label">Phone No.</label>
                    <span className="enter"></span>
                </div>

               


                <button type="submit" className="btn btn-cyan btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#" onClick={handleClick} >log in?</a>
                </p>
                {flag &&
                    <Alert color='primary' variant="danger" >
                        I got it you are in hurry! But every Field is important!
                </Alert>
                }

            </form> : <Login />}
            </div> 
        </>
    )
}

export default Registration
