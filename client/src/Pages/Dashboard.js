import React ,{useEffect, useState} from 'react';
import { useNavigate,useLocation } from "react-router-dom";
import './Dashboard.css';
import './Login.css';
export default function Dashboard(props) {

  const navigate = useNavigate();

  const {state} = useLocation();

  const [Email,setEmail]=useState('')
  const [Password,setPassword]=useState({})
  const [Name,setName]=useState({})
  const [Address,setAddress]=useState({})
  const [DoB,setDoB]=useState({})

  useEffect(()=>{

    if(state === null) 
    {
      navigate('/')
    }
    else
    { 
      (async () => {
        const { email } = state; 
        let incomingdata = await fetch(`/user/${email}`,
        {
            method: 'GET',
            headers: {'Content-Type':'application/json'},
        }
        )
        .then(res => res.json())
        .catch(e => e)


        setEmail(incomingdata[0]['Email'])
        setPassword(incomingdata[0]['Password'])
        setName(incomingdata[0]['Name'])
        setAddress(incomingdata[0]['Address'])
        setDoB(incomingdata[0]['DoB'])

        //console.log(incomingdata[0])
        //console.log(incomingdata[0]['Name'])
      })();
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
   },[]
  )





  const handleSubmit = async(e)=>
  {
      e.preventDefault();
      
      (async () => {
          let incomingdata = await fetch("/UpdateUser",
          {
              method: 'PUT',
              headers: {'Content-Type':'application/json'},
              body: JSON.stringify(
                  {
                      Email: Email,
                      Password:Password,
                      Name:Name,
                      Address:Address,
                      DoB:DoB,
                  }
              )
          }
          )
          .then(res => res.json())
          .catch(e => e)
          if (incomingdata === 'updated')
          {
            alert('Updated successfully')
            window.location.reload();
          }
          else{
            alert('Server Error')
          }


        })();
  }



  if (state !== null)
  {
    //console.log(Email)
    return(
      <>
        <h1 >Welcome</h1>
        <div className="form-center">
          <form onSubmit={handleSubmit}>
              <div className="Input">
                <label>Email</label>
                <input
                type="email"
                className="form-control mt-1"
                placeholder={Email}
                //onChange={event => setEmail(event.target.value)}
                disabled="disabled"
                />
              </div>

              <div className="Input">
                <label>Password</label>
                <input
                type="password"
                className="form-control mt-1"
                placeholder={Password}
                onChange={event => setPassword(event.target.value)}
                />
              </div>

              <div className="Input">
                <label>Name</label>
                <input
                type="text"
                className="form-control mt-1"
                placeholder={Name}
                onChange={event => setName(event.target.value)}
                />
              </div>

              <div className="Input">
                <label>Address</label>
                <input
                type="text"
                className="form-control mt-1"
                placeholder={Address}
                onChange={event => setAddress(event.target.value)}
                  
                />
              </div>

              <div className="Input">
                <label>Date of Birth</label>
                <input
                type="date"
                className="form-control mt-1"
                //placeholder="Enter name"
                onChange={event => setDoB(event.target.value)}
                  
                />
              </div>

              <button className="btn btn-primary">Update </button>
          </form>
      </div>
      </>

  );
  }

    


}