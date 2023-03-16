import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <ul className="navbar-nav mr-auto flex gap-4" >
            <li><Link to={'/'} className="nav-link"> Home </Link></li>

   </ul>
  )
}

export default Navbar