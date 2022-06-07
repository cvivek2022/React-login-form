import React, { useState } from 'react'
import { Alert,Form } from 'react-bootstrap';
import Home from '../home/Home';

function Login() {

    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);


    function handleLogin(e) {
        e.preventDefault();
        let data = localStorage.getItem('myData');
            data = JSON.parse(data);
       
        const user = data.find((user)=> user.userEmail === emaillog);

        if (!emaillog || !passwordlog) {
            setFlag(true);
            console.log("EMPTY");
        } else if (!user) {
            setFlag(true);
        } else {
            setHome(!home);
            setFlag(false);
            
        }
    }
    


    return (
        <div>
            {home ? <form onSubmit={handleLogin}>
                 <div className="head-bar text-center">
                    <h3>Welcome back!</h3>
                    <p>Please login to your account</p>
                </div> 
                <div className="form-group">
                    <input type="email" className="user-control" placeholder="" autoComplete="off" onChange={(event) => setEmaillog(event.target.value)} />
                    <label className="form-label">username</label>
                    <span className="enter"></span>

                </div>

                <div className="form-group">
                    <input type="password" className="user-control" placeholder="" autoComplete="off" onChange={(event) => setPasswordlog(event.target.value)} />
                    <label className="form-label">Password</label>
                    <span className="enter"></span>

                </div>
                <div class="flex-grid-login">
                    <div className="reminder">
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                    </div>
                    <div className="forgot">
                        <a href="#">Forgot password</a>
                    </div>
                </div>

                <button type="submit" className="btn btn-cyan btn-lg btn-block">Login</button>

                {flag && <Alert color='primary' variant="warning" >
                    Fill correct Info else keep trying.
                        </Alert>}
            </form>
                : <Home />
            }

        </div>
    )
}

export default Login
