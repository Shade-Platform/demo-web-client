import React from 'react'

function Form() {
    return (
        <form className="max-w-lg mx-auto p-16 bg-gray-900 rounded-3xl text-yellow-500">
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-left">Container Image:</label>
                <input type="file" id="file" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block max-w-96 p-2.5"required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-left">Network</label>
                <input type="text" id="network" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-left">SLA(0-7):</label>
                <input type="text" id="sla" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-left">Secrets:</label>
                <input type="text" id="secrets" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Upload</button>
        </form>
    )
}

export default Form
