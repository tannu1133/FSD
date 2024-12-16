import React, { useEffect } from 'react'
import {useState} from 'react'

const State3 = () => {
    const[total,setTotal]=useState(0);
    const[color,setColor]=useState("red");
    const [double, setDouble] = useState(0);
    useEffect(() => {
      setDouble(total*2)
    },[total])
    
  return (
    <div>
    <h2>{total}</h2>
    <h2>{double}</h2>
    <button onClick={()=> {setTotal(total+1);}}>Badhta hua</button>
    <button onClick={()=> {setTotal(total-1);}}>Ghatta hua</button>
    <h1 >My favourite color is <span style={{color: color}}> {color}</span>!</h1>
    <button onClick={()=> {setColor("red");}}>Red</button>
    <button onClick={()=> {setColor("blue");}}>Blue</button>
    <button onClick={()=> {setColor("pink");}}>Pink</button>
    <button onClick={()=> {setColor("green");}}>Green</button>
    
    
    
    </div>
  );
};

export default State3;