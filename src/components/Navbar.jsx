import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';

const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/allEquip'>All Sports Equipment</NavLink></li>
    <li><NavLink to='/addEquip'>Add Equipment</NavLink></li>
    <li><NavLink to='/myEquip'>My Equipment List</NavLink></li>

</>

const Navbar = () => {

    const { users, logOut } = useContext(AuthContext)
    return (
        <div>
            <div className="navbar bg-gray-900 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">GearSphere</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">

                    

                    {
                        users && users?.email ? <div>
                            <img className='cursor-pointer w-10 rounded-full mr-6' title={users?.displayName} src={users?.photoURL} alt="" />

                        </div> : ''
                    }


                    {
                        users && users?.email ? <div>
                            <button onClick={logOut} className="btn btn-warning">log-out</button>
                        </div> : <div>
                            <NavLink to='/auth/login'><button className="btn">Login</button>
                            </NavLink>
                            <span>Or</span>
                            <NavLink to='/auth/register'>
                                <button className="btn">Register</button>
                            </NavLink>
                        </div>
                    }


                </div>
            </div>
        </div>
    );
};

<div className="navbar bg-base-100 shadow-sm">
    <div className="navbar-start">
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {links}
            </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {links}
        </ul>
    </div>
    <div className="navbar-end">



        <NavLink to='/auth/login'>    <button className="btn">Login</button>
        </NavLink>
        <span>Or</span>
        <NavLink to='/auth/register'>
            <button className="btn">Register</button>
        </NavLink>
    </div>
</div>
export default Navbar; 