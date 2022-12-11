import React ,{useEffect,useState} from 'react';
import { useNavigate,useLocation } from "react-router-dom";
export default function Dashboard({ route, navigation }) {

  const navigate = useNavigate();
  const {state} = useLocation();



  useEffect(()=>{
    if(state === null) 
    {
      navigate('/')
    }
   },[]
  )


  if (state !== null)
  {
    const { Authenciated } = state; 
  }
  return(
      <h2>Dashboard</h2>
    );
    


}