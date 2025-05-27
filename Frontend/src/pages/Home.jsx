import React from 'react';

const Home = () => {
    return (
        <div className="w-full h-screen overflow-auto items-center justify-center">
            <div className="w-full h-2/3 flex bg-blue-100 border">
                <div className='w-2/4 px-4  py-4'>
                    <div className='mx-5 my-20 cursor-default'>
                        <span className='text-gray-800 font-[Roboto] font-bold text-5xl'>
                            <b>
                                Learn a New Language, Fast and Fun!
                            </b>
                        </span>
                        <div className='cursor-default font-[Poppins] text-gray-700 mt-6 text-[15px]'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odio, ducimus quia aspernatur iusto delectus.
                            </p>
                        </div>
                        <div className='flex mt-5 '>
                            <button className='bg-blue-700 border-none rounded-md text-white px-4 py-4 text-lg mr-2'>Start Learning</button>
                            <button className='bg-white border border-blue-700  rounded-md text-blue-700 px-4 py-4  text-lg font-semibold'>Explore Course</button>
                        </div>
                    </div>
                </div>
                <div className='w-2/4 '>
                    .
                </div>
            </div>
        </div>
    );
};

export default Home;
