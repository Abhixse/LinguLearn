import React from 'react'

const Footer = () => {
    return (
        <div className="w-full bg-white border-t border-gray-200 py-4 px-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
            <div className='flex ml-5'>
                <span>&copy; 2023 LinguaLearn. All rights reserved.</span>
            </div>
            <div className="mt-2 sm:mt-0">
                <a href="#" className="hover:underline mr-4">Privacy Policy</a>
                <a href="#" className="hover:underline">Terms of Service</a>
            </div>
        </div>

    )
}

export default Footer