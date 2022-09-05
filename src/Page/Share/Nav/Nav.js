import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase';
import { signOut } from 'firebase/auth';
const Nav = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div>
            <div className="nav-bar">
                <div className='nav-item'>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/work'>Works</Link></li>
                        <li><Link to='/About'>About</Link></li>
                        {
                            user ? <>

                                <li class="nav-item">
                                    <Link to="/dashboard">
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={() => logout()} class="nav-link" to="/">Log out</Link>
                                </li>
                            </>
                                : <></>
                        }
                    </ul>
                </div>
                <div class="smaill-nav">
                    <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><Link class="dropdown-item" to='/'>Home</Link></li>
                        <li><Link class="dropdown-item" to='/work'>Works</Link></li>
                        <li><Link class="dropdown-item" to='/About'>About</Link></li>
                        {
                            user ? <>

                                <li>
                                    <Link class="dropdown-item" to="/dashboard">
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" onClick={() => logout()} to="/">Log out</Link>
                                </li>
                            </>
                                : <></>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;