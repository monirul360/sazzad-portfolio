import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../image/logo.png';
const Nav = () => {
    return (
        <div>
            <div className="nav-bar">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className='nav-item'>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>Works</Link></li>
                        <li><Link to='/'>About</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;