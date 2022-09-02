import React from 'react';
import img from './../../image/google.png';
import { useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../../firebase';
const Login = () => {

    const navigate = useNavigate();

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        navigate('/dashboard');
    }

    return (
        <div>
            <div className="login-from">
                <div className='login-google'>
                    <div>
                        <button onClick={() => signInWithGoogle()}>
                            <div>
                                <img src={img} alt="" />
                            </div>
                            <div>
                                <p>Sign in with Google</p>
                            </div>
                        </button>
                    </div>
                    <div>
                        <p className='text-danger py-4 fw-bold'>{error?.message}</p>
                        {loading && <div class="lds-hourglass"></div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;