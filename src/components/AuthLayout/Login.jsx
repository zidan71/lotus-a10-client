import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const { loginUser, setUsers } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const provider = new GoogleAuthProvider()

    const handleGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                setUsers(result.user)
                toast.success('Login succees')
                navigate(location?.state ? location.state : '/')
            })
            .catch(eror => {
                toast.error('Eroor happend')
            })
    }

    const handleClick = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        
        loginUser(email, password)
            .then(result => {
                toast.success("Login success")
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                toast.error('check the credentials please')
            })

    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-orange-500 to-blue-900">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl transform transition-all hover:scale-105">
          <h2 className="text-3xl font-bold text-center text-blue-900">Login</h2>
          <form onSubmit={handleClick} className="mt-6 space-y-4">
            <div>
              <label className="block font-medium text-black">Email</label>
              <input type="email" name="email" className="input-field w-full text-black" placeholder="Enter your email" required />
            </div>
            <div>
              <label className="block font-medium text-black">Password</label>
              <input type="password" name="password"  className="input-field w-full text-black" placeholder="Enter your password" required />
            </div>
            <button type="submit" className="w-full py-3 mt-4 text-white bg-orange-600 rounded-lg shadow-md hover:bg-orange-700 transition-all">Login</button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-600">Or</p>
            <button onClick={handleGoogle} className="mt-3 flex items-center justify-center w-full py-2 text-blue-900 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all">
              <FaGoogle className="mr-2" /> Sign in with Google
            </button>
          </div>
        </div>
      </div>
    );
};

export default Login;