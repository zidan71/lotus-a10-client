import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Register = () => {

  const { createUser, setUsers, updateUser } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleClick = e => {
    e.preventDefault()

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    const newUser = { name, email, photo, password }


    if (password.length < 6) {
      toast.error('password should be 6 characters long')
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

    if (!passwordRegex.test(password)) {
      toast.error('Password should contain one uppercase and lowercase letter')
      return;
    }



    createUser(email, password)
      .then(result => {
        setUsers(result.user)
        toast.success('Register Successful')
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            navigate('/');
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch(error => {
      })
  }

  return (
    <div className="flex items-center text-black justify-center min-h-screen bg-gradient-to-b from-orange-500 to-blue-900">
      <Helmet>
        <title>Register</title>
      </Helmet>
    <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl transform transition-all hover:scale-105">
      <h2 className="text-3xl font-bold text-center text-blue-900">Register</h2>
      <form onSubmit={handleClick} className="mt-6 space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input  type="text" name="name" className="input-field w-full" placeholder="Enter your name" required />
        </div>
        <div>
          <label className="block font-medium">Photo URL</label>
          <input type="text" name="photo" className="input-field w-full " placeholder="Enter your photo URL" required />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input type="email" name="email" className="input-field  w-full" placeholder="Enter your email" required />
        </div>
        <div>
          <label className="block font-medium">Password</label>
          <input type="password" name="password" className="input-field  w-full" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="w-full py-3 mt-4 text-white bg-orange-600 rounded-lg shadow-md hover:bg-orange-700 transition-all">Register</button>
      </form>
    </div>
  </div>
  );
};

export default Register;