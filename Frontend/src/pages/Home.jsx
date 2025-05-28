import React, { useState } from 'react';

const Home = () => {
    const languages = ['Spanish', 'French', 'German', 'Japanese'];
    const [selectedLang, setSelectedLang] = useState(null);

    return (
        <div className="w-full  overflow-auto flex items-center justify-center">
            <div className="w-full h-auto md:h-2/3 flex flex-col md:flex-row bg-blue-100 border">
                {/* Left side */}
                <div className='w-full md:w-2/4 px-4 py-4'>
                    <div className='mx-5 my-10 md:my-20 cursor-default'>
                        <span className='text-gray-800 font-[Roboto] font-bold text-3xl md:text-5xl'>
                            <b>Learn a New Language, Fast and Fun!</b>
                        </span>
                        <div className='cursor-default font-[Poppins] text-gray-700 mt-6 text-[15px]'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odio, ducimus quia aspernatur iusto delectus.
                            </p>
                        </div>
                        <div className='flex flex-col sm:flex-row mt-5 gap-2'>
                            <button className='bg-blue-700 border-none rounded-md text-white px-4 py-4 text-lg'>
                                Start Learning
                            </button>
                            <button className='bg-white border border-blue-700 rounded-md text-blue-700 px-4 py-4 text-lg font-semibold'>
                                Explore Course
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className='w-full md:w-2/4 flex justify-center items-center p-4 md:p-0'>
                    <div className='w-full h-full rounded flex justify-center items-center'>
                        <div className='bg-white rounded-s w-full md:w-3/4 h-auto md:h-3/4 flex items-center justify-center flex-col p-6'>
                            <div className='flex w-10 text-blue-800 bg-blue-200 rounded-full py-2 items-center justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                                </svg>
                            </div>

                            <div className='flex flex-col w-full'>
                                <h4 className='font-semibold text-xl text-gray-800 text-center'>Choose Your Language</h4>

                                <div className="flex items-center mt-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                                        {languages.map((lang) => (
                                            <button
                                                key={lang}
                                                onClick={() => setSelectedLang(lang)}
                                                className={`relative flex items-center justify-between px-6 py-4 rounded-md shadow transition font-medium w-full
                                                    ${selectedLang === lang
                                                        ? 'bg-green-100 text-green-800 border border-green-500'
                                                        : 'bg-white text-gray-800 hover:shadow-md'}
                                                `}
                                            >
                                                {lang}
                                                {selectedLang === lang && (
                                                    <svg
                                                        className="w-5 h-5 text-green-500 absolute right-3"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
