import React, { useState } from "react"
import './Login.css';
import { Link } from "react-router-dom";

export default function SignUp(props) {


    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')
    const [Name,setName]=useState('')


    const handleSubmit = async(e)=>
    {
        e.preventDefault();
        console.log(Email,Password,Name)
    }
    
    return(
        <div className="form-center">
            <form onSubmit={handleSubmit}>
                <h2 >Sign Up</h2>
                <div className="Input">
                    <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter name"
                    onChange={event => setName(event.target.value)}
                    required
                />
                </div>

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

                <button className="btn btn-primary">Sign Up</button>
                <div className="route-signup">
                    Already have an account? 
                    <Link to="/"> Sign In</Link>
                </div>
            </form>
        </div>

        
    )
}

