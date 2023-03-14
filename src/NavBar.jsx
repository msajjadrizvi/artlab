import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';

function NavBar() {
    
    return (
        <div>
            <nav className="NavigationBar">
                <ul>
                    <li className="NavigationBar-menuItem">
                        <Link to="/" className="NavigationBar-link">Home</Link>
                    </li>
                    <li className="NavigationBar-menuItem">
                        <Link to="/assessment" className="NavigationBar-link">Personality Test</Link>
                    </li>
                    <li className="NavigationBar-menuItem">
                        <Link to="/Soon" className="NavigationBar-link">Emotional Test</Link>
                    </li>
                    <li className="NavigationBar-menuItem">
                        <Link to="/Soon" className="NavigationBar-link">Intelligence Test</Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default NavBar