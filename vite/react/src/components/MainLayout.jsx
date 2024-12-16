import React from 'react'
import {Link,Outlet} from "react-router-dom"
import "../components/MainLayout.css"
function MainLayout() {
  return (
    <div><h2> Welcome to the Main page</h2>
    <nav>
        <ul className="aa">
            <li><Link to="/login">LOGIN</Link></li>
            <li><Link to="/registration">REGISTRATION</Link></li>
            <li><Link to="/aboutus">ABOUTUS</Link></li>
            
        </ul>
    </nav>
    <Outlet/>

    </div>
  )
}

export default MainLayout