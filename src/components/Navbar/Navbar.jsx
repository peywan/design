import './style.css';
import { Link } from 'react-router-dom';
import React from 'react';
import WeRecycleLogo from '../../assets/images/logo.png';


function Navbar() {
    return (
        <nav className='navbar-container'>
            <div className="container">
                <div className='link-container'><div className="logo"><Link to="/"><img src={WeRecycleLogo} alt="WeRecycle logo" /></Link></div></div>
            </div>
        </nav>
    )
};

export default Navbar