import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>
                <div className='logo-container'>
                    <img src={logo} alt="" />
                    <h2>Skill-Share</h2>
                </div>
            </Link>
            <div className='menu'>
                <Link to='/'>Home</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>
    );
};

export default Header;