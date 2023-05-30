import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-secondary">
            <div className="flex flex-col items-center text-white" >
                <h1 className="text-4xl font-bold">404</h1>
                <p className="mt-2">Page Not Found</p>
                <img
                    src="https://i.ibb.co/ck1SGFJ/Group.png"
                    alt="404 Error"
                    className="mt-8 w-full h-auto"
                />
                <Link to="/" className="mt-8 text-indigo-600 hover:underline">
                    Go back to Home
                </Link>
            </div>
        </div>
    );
}
