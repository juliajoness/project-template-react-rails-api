import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {

return (
    <nav>
            <h1>Steps With Friends</h1>
            <ul className="ulNav">
                <li>
                    <NavLink to="/"> Home </NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/feed">Feed</NavLink>
                </li>
                <li>
                    <NavLink to="/category">Add Tags</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;