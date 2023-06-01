import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="text-placeholder bg-primary py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-md px-4 md:px-8">
        <h1 className="mb-4 text-center text-2xl font-bold text-accent sm:text-3xl md:mb-6">Our competitive advantage</h1>
        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
          This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text. The important factor when using filler text is that the text looks realistic otherwise it will not look very good.<br /><br />

          This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is <Link to="/" className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700 no-underline">random</Link> or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.
        </p>
        <h2 className="mb-2 text-xl font-semibold text-accent sm:text-2xl md:mb-4">About us</h2>
        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p>

        <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
          <li>This is a section of some simple filler text</li>
          <li>Also known as placeholder text</li>
          <li>It shares some characteristics of a real written text</li>
        </ul>

        <blockquote className="mb-6 border-l-4 pl-4 italic text-accent sm:text-lg md:mb-8 md:pl-6">“This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.”</blockquote>

        <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8 z-0">
          <img src="https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80 " loading="lazy" alt="by Glenn Carstens-Peters" className="h-full w-full object-cover object-center" />
        </div>

        <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Features</h2>

        <p className="text-gray-500 sm:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p>
      </div>
    </div>
  )
}