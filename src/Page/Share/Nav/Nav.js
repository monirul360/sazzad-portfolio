import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { useState } from 'react';
const Nav = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div>
            <section className='nav-section container'>
                <div className="nav">
                    <Link style={{ color: '#fff' }} to='/'>
                        <div className="d-flex justify-content-center  align-items-center">

                            <div>
                                <h1>SAZZAD HOSEN</h1>
                            </div>
                            <div className='nav-brand'>
                                <p>Brand</p>
                                <p>Designer</p>
                            </div>
                        </div>
                    </Link>
                    <div onClick={showSidebar} className='menu-bars'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </section >

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <h1>X</h1>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item?.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>

                        );
                    })}
                    {
                        user ?
                            <>
                                <li className='admin-nav' ><Link to='/dashboard'>Admin</Link></li>
                                <button onClick={logout} className='log-out'>LOG OUT</button>
                            </>
                            :
                            <></>
                    }
                </ul>
            </nav>
        </div >
    );
};

export default Nav;