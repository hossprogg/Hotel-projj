import React,{useState} from 'react'
import logo from '../images/logo.svg'//put it directly into source
import {FaAlignRight } from "react-icons/fa";// import icons and use em like any compo
import { Link } from 'react-router-dom'

export const Navbar = () => {

   
    const [nav,setnav] = useState({
        isOpen : false
    })

    const handleToggle = ()=>{
        setnav({
            isOpen : !nav.isOpen
        })
    }
    return (//if u have way more links it s wiser to make em all into an array then rendering em
        <nav className="navbar">   
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt ="beach resort"/>
                    </Link>
                    <button type="button" className="nav-btn" onClick={handleToggle}>
                        <FaAlignRight className="nav-icon"/>
                    </button>
                </div>
                <ul className={nav.isOpen ? "nav-links show-nav" : "nav-links "}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/rooms">Rooms</Link>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
}
 