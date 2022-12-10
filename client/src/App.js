import React,{useEffect,useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';


function App() {

  //const[BackEndData, setBackEndData] = useState([{}])

  // useEffect(()=>{
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackEndData(data)
  //     }
  //   )
  // },[])

  return (
    <div className='Template'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="SignUp" element={<SignUp />} />
          <Route exact path="Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App