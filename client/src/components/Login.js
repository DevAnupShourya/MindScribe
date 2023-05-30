import React, { useState} from 'react';
import { Link, useNavigate  } from 'react-router-dom';

export default function Login(props) {
    // ? Variables 
    const url = "http://127.0.0.1:5000";
    let navigate  = useNavigate();

    const [credentials, setCredentials] = useState({ email: '', password: '' })

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        // ? API Call
        const request = await fetch(`${url}/api/auth/login`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        })
        const response = await request.json();
        if(response.msg === "user Found"){
            localStorage.setItem('MindScribeAuthToken' , response.authToken);
            props.showAlert('success' , "Logged In Succesfully!")
            navigate('/admin');
        }
        else{
            props.showAlert('error' , "Invalid Credentials!!");
        }
    }

    const handleInpueChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }
    return (
        <div className="w-full h-[80vh] grid place-items-center ">
            <form onSubmit={handleOnSubmit} className="bg-white lg:w-1/2 sm:w-3/4 rounded-xl shadow-xl overflow-hidden p-6 space-y-10">
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
