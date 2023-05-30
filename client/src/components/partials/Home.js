import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div id="hero" className="bg-black grid place-items-center w-full h-[90vh]">
      <section className="mb-8 px-10 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row">
        <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12">
          <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">Captivate Your Thoughts, Ignite Your Imagination!</p>
          <h1 className="text-black-800 mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">Unleash Your Mind. with MindScribe.</h1>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
            <Link to={"/"} className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Start Writing</Link>
          </div>
        </div>
        <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-96 xl:w-5/12">
          <img src="https://images.unsplash.com/photo-1587135991058-8816b028691f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format" alt='By ' loading="lazy" className="h-full w-full object-cover object-center" />
        </div>
      </section>
    </div>
  )
}
