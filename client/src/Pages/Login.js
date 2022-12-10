import React, { useState } from "react"
import './Login.css';
import { Link,useNavigate } from "react-router-dom";

export default function Login(props) {
    


    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')

    function Check()
    {
        if (Email === 'admin@1')
            if(Password ==='123')
                return true
        return false
    }


    const handleSubmit = async(e)=>
    {
        e.preventDefault();
        let Authenciated = Check()
        
        if (Authenciated)
        {
            navigate('/Dashboard')
        }
        else
        {
            alert("Email or password is incorrect")
        }
    }

    const navigate = useNavigate();
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

