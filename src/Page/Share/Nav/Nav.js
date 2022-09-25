import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase';
import { signOut } from 'firebase/auth';
const Nav = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div>
            <section className='nav-section p-5'>
                <div className="nav">
                    <div className="d-flex justify-content-center  align-items-center">
                        <div>
                            <h1>SAZZAD HOSEN</h1>
                        </div>
                        <div className='nav-brand'>
                            <p>Brand</p>
                            <p>Designer</p>
                        </div>
                    </div>
                    <div className="nav-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Nav;