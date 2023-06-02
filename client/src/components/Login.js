import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// ? Helper Functions
import { login } from '../utils/authFunctions';

export default function Login(props) {
    // ? Navigation 
    let navigate = useNavigate();

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const loginData = await login(credentials.email, credentials.password);
        console.log(loginData);
        if (loginData.status === "success") {
            props.showAlert('success', "Logged In Succesfully!")
            navigate('/dashboard');
        }
        else {
            props.showAlert('error', "Invalid Credentials!!");
        }
    }

    // ? State for all Inputs
    const [credentials, setCredentials] = useState({ email: null, password: null })
    const handleInpueChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }
    return (
        <div className="w-full h-[80vh] grid place-items-center ">
            <form onSubmit={handleOnSubmit} className="lg:w-1/2 sm:w-3/4 rounded-xl shadow-xl overflow-hidden p-6 space-y-10">
                <h2 className="text-4xl font-bold text-center text-indigo-600">Login</h2>
                <div className="f-outline px-2 relative border rounded-lg focus-within:border-indigo-500">
                    <label htmlFor="email">
                        <input type="email" value={credentials.email || ''} onChange={handleInpueChange} required="required" autoComplete='current-email' name="email" placeholder="Enter Email" className="text-black block p-2 w-full text-lg appearance-none focus:outline-none" />
                    </label>
                </div>
                <div className="f-outline px-2 relative border rounded-lg focus-within:border-indigo-500">
                    <label htmlFor="password">
                        <input type="password" value={credentials.password || ''} onChange={handleInpueChange} required="required" autoComplete='current-password' name="password" placeholder="Enter Password" className="text-black block p-2 w-full text-lg appearance-none focus:outline-none" />
                    </label>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <Link className="text-sm text-indigo-500 hover:text-gray-900" to="/signup">Don't have Accout? Signup! </Link>
                    <button
                        className="px-6 py-2 ml-4 font-semibold cursor-pointer text-center focus:outline-none transition hover:shadow-lg shadow hover:bg-indigo-700 rounded-full text-white bg-indigo-600 ">
                        Log in
                    </button>
                </div>
            </form>
        </div>
    )
}
