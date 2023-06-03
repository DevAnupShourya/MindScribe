import React from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('MindScribeAuthToken');
    navigate('/login');
  }
  return (
    <div className="navbar text-text px-10 sticky top-0 left-0 bg-secondary bg-opacity-40 backdrop-filter backdrop-blur-sm z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost hover:bg-gray-200 hover:text-black btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <li><Link to={'/signup'}>Signup</Link></li>
            <li><Link to={'/login'}>Login</Link></li>
            <li><Link to={'/dashboard'}>Dashboard</Link></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to={'/'} className="btn btn-ghost normal-case text-xl">MindScribe</Link>
      </div>
      <div className="navbar-end">
        {localStorage.getItem('MindScribeAuthToken') ?
          <button onClick={handleLogout} className='bg-gradient-to-r from-purple-800 to-green-500 px-5 py-2 rounded-md hover:bg-gradient-to-l hover:from-pink-500 hover:to-green-500 transition-all  duration-1000 ease-in-out font-bold'>Logout</button>
          :
          <Link to={'/signup'} className='btn'>Sign Up</Link>
        }
      </div>
    </div>
  )
}