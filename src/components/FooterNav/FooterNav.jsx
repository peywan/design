import './style.css';
import { AiFillHeart, AiFillPlusCircle } from 'react-icons/ai';
import { BsPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import React from 'react';

function FooterNav() {
    return (
        <nav className='footer-nav-container'>
            <div className="icon-container heart"><Link to={'/Liked'}><AiFillHeart className='heart-icon icon' /></Link></div>
            <div className="icon-container add"><Link to={'/createAd'}><AiFillPlusCircle className='add-icon icon' /></Link></div>
            <div className="icon-container profile"><Link to={'/ProfilePage'}><BsPersonFill className='profile-icon icon' /></Link></div>
        </nav>
    )
};

export default FooterNav