import React ,{useEffect} from 'react';
import { useNavigate,useLocation } from "react-router-dom";
import './Dashboard.css';
export default function Dashboard(props) {

  const navigate = useNavigate();
  const {state} = useLocation();


  useEffect(()=>{

    if(state === null) 
    {
      navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
   },[]
  )


  if (state !== null)
  {
    //const { email } = state; 
    return(
      <>
        <h1>Dashboard</h1>
        <div className="row">
          <div className="column" >
            <h2>Column 1</h2>
            <p>Some text..</p>
          </div>
          <div className="column" >
            <h2>Column 2</h2>
            <p>Some text..</p>
          </div>
          <div className="column">
            <h2>Column 3</h2>
            <p>Some text..</p>
          </div>
      </div>
      </>
  );
  }

    


}