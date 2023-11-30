import React from 'react'
import UserContainer from './UserContainer'

const NavLinks = () => {
    return (
        <div className='nav-container'>
            <ul className="nav-links">
                <li>
                    <a href="#" className="href"> Home</a>
                </li>
                <li>
                    <a href="#" className="href"> About</a>
                </li>
            </ul>
            <UserContainer  />
        </div>
    )
}

export default NavLinks