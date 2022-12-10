import React from 'react';
import './input.css';
function Input({typeofinput,setEmail}) {



  if (typeofinput === "email")
  {
    return (
      <div className="Input">
        <input
          type="email"
          className="form-control mt-1"
          placeholder="Enter email"
          onChange={event => setEmail(event.target.value)}
      />
    </div>
    )
  }
  else if(typeofinput === "password")
  {
    return (
      <div className="Input">
        <input
          type="password"
          className="form-control mt-1"
          placeholder="Enter password"
          onChange={event => setEmail(event.target.value)}
      />
    </div>
    )
  }
  else if(typeofinput === "Name")
  {
    return (
      <div className="Input">
        <input
          type="text"
          className="form-control mt-1"
          placeholder="Enter name"
          onChange={event => setEmail(event.target.value)}
      />
    </div>
    )
  }
}

export default Input