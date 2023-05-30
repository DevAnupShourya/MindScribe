import React from 'react'

export default function Modal(props) {

    props.ref === true &&
        <>
            <label htmlFor="my-modal-3" className="btn">open modal</label>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal bg-opacity-50 backdrop-filter backdrop-blur-sm">
                <div className="modal-box relative text-black">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                    Title
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='updatedTitle' id="updatedTitle" type="text" />
                                {/* <p className="text-gray-600 text-xs italic">Remove if not needed</p> */}
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                    Tags
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='updatedTags' id="updatedTags" type="text" />
                                {/* <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p> */}
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                    Description
                                </label>
                                <textarea name='updatedDescription' className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="updatedDescription"></textarea>
                                {/* <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p> */}
                            </div>
                        </div>
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3">
                                <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                    Save
                                </button>
                            </div>
                            <div className="md:w-2/3"></div>
                        </div>
                    </form>
                </div>
            </div>
        </>
}
