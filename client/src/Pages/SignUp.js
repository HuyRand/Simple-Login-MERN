import React, { useState } from "react"
import './Login.css';
import { Link,useNavigate } from "react-router-dom";

export default function SignUp(props) {

    const navigate = useNavigate();

    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')
    const [Name,setName]=useState('')



    const handleSubmit = async(e)=>
    {
        e.preventDefault();
        
        (async () => {
            let incomingdata = await fetch("/users",
            {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(
                    {
                        Email: Email,
                        Password:Password,
                        Name:Name
                    }
                )
            }
            )
            .then(res => res.json())
            .catch(e => e)

            if (incomingdata === 'Succeed')
            {
            alert("Account created, redirecting back to login page")
            navigate('/')
    
            }
            else if(incomingdata === 'Email is already used')
            {
            alert("Email is already used")
            }
          })();


        
    }
    
    return(
        <div className="form-center">
            <form onSubmit={handleSubmit}>
                <h2 >Sign Up</h2>

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

                <div className="Input">
                    <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter name"
                    onChange={event => setName(event.target.value)}
                    required
                />
                </div>

                <button className="btn btn-primary">Sign Up</button>
                <div className="route-signup">
                    Already have an account? 
                    <Link to="/"> Sign In</Link>
                </div>
            </form>
        </div>

        
    )
}

