import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ()=>{
    return(
        
            <nav className ="nav-wrapper grey darken-3">
                <div className = "container">
                
                    <NavLink to ='/' className = "brand-logo">My PG</NavLink>
                        <ul className = "right">
                            <li><NavLink to = "/new" >Post new PG</NavLink></li>
                            <li><NavLink to = "/filter" >Filter Result</NavLink></li>

                        </ul>

                </div>
            </nav>
        
      
    )
}

export default Navbar