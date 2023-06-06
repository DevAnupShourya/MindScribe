import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Unleash Your Mind. with MindScribe</h1>
          <p className="mb-5">Captivate Your Thoughts, Ignite Your Imagination!</p>
          <Link to={'/signup'} className="btn btn-primary">Start Writing</Link>
        </div>
      </div>
    </div>
  )
}
