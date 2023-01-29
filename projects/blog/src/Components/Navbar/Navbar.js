import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <NavLink
            to="/"
            // style={({isActive}) => {
            //     return isActive ? {color: "maroon"} : {color: "black"}
            // }}
            className={({isActive}) => isActive ? "activeLink" : ""}
            >Accueil</NavLink>

            <NavLink to="/services"
            className={({isActive}) => isActive ? "activeLink" : ""}
            >Services</NavLink>

            <NavLink to="/contact"
            className={({isActive}) => isActive ? "activeLink" : ""}
            >Contact</NavLink>
        </nav>
    )
}
// La props to mène à la page 
