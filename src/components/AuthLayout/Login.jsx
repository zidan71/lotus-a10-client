import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase.init';

const Login = () => {

    const { loginUser } = useContext(AuthContext)

    const provider = new GoogleAuthProvider()

    const handleGoogle = () => {
        signInWithPopup(auth,provider)
        .then(result => {
            console.log(result.user)
            toast.success('Login succees')
        })
        .catch(eror=> {
            console.log("EROR",eror.message)
            toast.error('Eroor happend')
        })
    }

    const handleClick = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email,password)
        loginUser(email,password)
        .then(result => {
            console.log(result.user)
            toast.success("Login success")
        })
        .catch(error => {
            console.log("EROR", error.message)
            toast.error('check the credentials please')
        })

    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleClick}>
                                

                                    <label className="fieldset-label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" />

                                    <label className="fieldset-label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" />

                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                
                            </form>

                    <div>
                        <p className='text-center'>Or</p><br />
                        <button onClick={handleGoogle} className="btn"><FaGoogle></FaGoogle> Sign in with Google</button>
                    </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;