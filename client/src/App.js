import React,{useEffect,useState} from 'react'



function App() {

  const[BackEndData, setBackEndData] = useState([{}])

  useEffect(()=>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackEndData(data)
      }
    )
  },[])

  return (
    <div>
      
    </div>
  )
}

export default App