import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleClick = e => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        const newUser = {name,email,photo,password}

        console.log(newUser)

        if(password.length<6){
            toast.error('password should be 6 characters long')
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

        if(!passwordRegex.test(password)){
            toast.error('Password should contain one uppercase and lowercase letter')
            return;
        }


        createUser(email,password)
        .then(result => {
            console.log(result.user)
            toast.success('Register Successful')
        })
        .catch(error => {
            console.log("EROOR",error.message)
        })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <form onSubmit={handleClick}>

          <label className="fieldset-label">Name</label>
          <input type="text" name='name' className="input" placeholder="Name" />

          <label className="fieldset-label">Photo</label>
          <input type="text" name='photo' className="input" placeholder="photoURL" />

          <label className="fieldset-label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />

          <label className="fieldset-label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
      
      </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;