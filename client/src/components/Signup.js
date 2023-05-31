import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// ? Helper Functions
import { signup } from '../utils/authFunctions';

export default function Signup(props) {
    let navigate = useNavigate();
    const [userData, setUserData] = useState({ name: '', email: '', password: '', confirmPassword: '' })
    
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (userData.password === userData.confirmPassword) {
            // ? API Call
            const signupData = await signup(userData);
            
            if (signupData.status === "success") {
                localStorage.setItem(`MindScribeAuthToken`, signupData.authToken);
                navigate('/dashboard');
                props.showAlert('success', "Account Created Succesfully.")
            }
            else {
                props.showAlert('error', "Invalid Credentials.. Try Again!")
            }
        } else {
            props.showAlert('error', "Password Did Not Match.. Try Again!")
        }
    }
    // ? Handling Onchange in Inputs
    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    return (
        <div className="container mx-auto py-10 text-text">
            <h1 className="text-2xl font-bold mb-6 text-center">Registration Form</h1>
            <form onSubmit={handleOnSubmit} className="w-full max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input autoComplete='name' onChange={handleInputChange} required={'required'} minLength={2} maxLength={30} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" type="text" id="name" name="name" placeholder="John Doe" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input autoComplete='email' onChange={handleInputChange} required={'required'} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" type="email" id="email" name="email" placeholder="john@example.com" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                    <input autoComplete='new-password' onChange={handleInputChange} required={'required'} minLength={5} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" type="password" id="password" name="password" placeholder="********" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password</label>
                    <input autoComplete='new-password' onChange={handleInputChange} required={'required'} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" type="password" id="confirm-password" name="confirmPassword" placeholder="********" />
                </div>
                <button
                    className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                    type="submit">Register</button>
                <hr className="mt-6 border-t " />
                <div className="text-center mt-5">
                    <Link className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" to="/login" >Already have an Account? Login!</Link>
                </div>
            </form>
        </div>
    )
}
