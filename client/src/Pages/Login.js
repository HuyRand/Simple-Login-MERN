import React, { useState } from "react"
import './Login.css';
import { Link,useNavigate } from "react-router-dom";

export default function Login(props) {
    
    const navigate = useNavigate();

    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')


    const handleSubmit = async(e)=>
    {
        e.preventDefault();
        (async () => {
            let incomingdata = await fetch("/verifyAccount",
            {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(
                    {
                        Email: Email,
                        Password:Password,
                    }
                )
            }
            )
            .then(res => res.json())
            .catch(e => e)

            if (incomingdata === 'verified')
            {
                navigate('/Dashboard',{ state: { Authenciated:true} })
    
            }
            else if(incomingdata === 'Email or password is incorrect')
            {
                alert("Email or password is incorrect")
            }
          })();
    }

    
    return(
        <div className="form-center" >
            <form onSubmit={handleSubmit}>
                <h2 >Login</h2>
                <div className="Input">
                    <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter email"
                    onChange={event => setEmail(event.target.value)}
                    required
                />
                </div>

                <div className="Input">
                    <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                    onChange={event => setPassword(event.target.value)}
                    required
                />
                </div>


                <button type="submit" className="btn btn-primary" >Login</button>
                <div className="route-signup">
                    Don't have an account? 
                    <Link to="/SignUp"> Sign Up</Link>
                </div>
            </form>
        </div>
    )

}

