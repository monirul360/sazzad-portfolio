import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase';

const DashtopBar = () => {
    const [user] = useAuthState(auth);
    console.log(user.photoURL);
    return (
        <div>
            <section id="top-bar">
                <div class="top-bar">
                    <div class="logo-mobile-menu">
                        <div class="logo">
                            <Link to="/dashboard"><span>M</span>onirul360</Link>
                        </div>
                        <div class="mobile-menu"><i class="fa fa-bars"></i></div>
                    </div>
                    <div class="list-item">
                        <div class="item">
                            <ul>
                                <li><Link to="/dashboard"><i class="fa fa-envelope"></i></Link></li>
                                <li><Link to="/dashboard"><i class="fa fa-bell"></i></Link></li>
                                <li><Link to="/dashboard"><i class="fa fa-cog"></i></Link></li>
                            </ul>
                        </div>

                        <div class="admin-photo">
                            <img src={user.photoURL} alt="" />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default DashtopBar;