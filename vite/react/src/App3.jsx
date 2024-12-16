import React from 'react'
import Child11 from "./components/Child11";


function App3() {
    const studentData = {
        name:"Tannu",
        roll:"2200320230058",
    };
  return (
    <div>
        <h1>App3 Component</h1>
        <Child11 studentData={studentData}/>
        </div>
  )
}

export default App3