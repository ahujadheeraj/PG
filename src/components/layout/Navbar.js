import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ()=>{
    return(
      <nav className ="nav-wrapper blue light-3">
          <div className = "container">
              <NavLink to ='/' className = "brand-logo">MyPg</NavLink>
                <ul className = "right">
                    <li><NavLink to = "/new" >Post new PG</NavLink></li>
                </ul>
          </div>
      </nav>
    )
}

export default Navbar