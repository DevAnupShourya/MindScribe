import React from 'react';

export default function Contact() {
  return (
    <div className="text-text py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold md:mb-8 lg:text-3xl">Contact Us  </h2>
        <form className="mx-auto max-w-2xl  rounded-lg border border-placeholder bg-primary text-text">
          <div className="flex flex-col gap-4 p-4 md:p-8">
            <div>
              <label for="name" className="mb-2 inline-block text-sm  sm:text-base">Name</label>
              <input name="name" className="w-full rounded border bg-secondary px-3 py-2 text-placeholder outline-none ring-indigo-300 transition duration-100 focus:ring" />
            </div>
            <div>
              <label for="email" className="mb-2 inline-block text-sm  sm:text-base">Email</label>
              <input name="email" className="w-full rounded border bg-secondary px-3 py-2 text-placeholder outline-none ring-indigo-300 transition duration-100 focus:ring" />
            </div>
            <div>
              <label for="msg" className="mb-2 inline-block text-sm sm:text-base">Message</label>
              <textarea name="msg" className="w-full rounded border bg-secondary px-3 py-2 text-placeholder outline-none ring-indigo-300 transition duration-100 focus:ring"> </textarea>
            </div>
            <button className="block rounded-lg bg-indigo-400 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-indigo-500 focus-visible:ring active:bg-gray-600 md:text-base">Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}
