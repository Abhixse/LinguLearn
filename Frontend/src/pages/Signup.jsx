import React from 'react'
import { FaGoogle, FaFacebookF } from 'react-icons/fa';

const Signup = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 text-black px-4 py-8">
            <div className="w-full max-w-md lg:max-w-xl xl:max-w-2xl p-6 md:p-10 flex flex-col items-center justify-center bg-white rounded-2xl shadow-2xl">

                {/* Brand + Welcome Message */}
                <div className="w-full flex flex-col items-center text-center">
                    <h2 className="font-bold text-blue-600 text-3xl md:text-4xl">LinguaLearn</h2>
                    <div className="mt-4">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Welcome Back</h3>
                        <p className="mt-1 text-sm md:text-base text-gray-500 font-[Poppins]">
                            Sign in to continue your language learning journey
                        </p>
                    </div>
                </div>

                {/* Form Card */}
                <div className="w-full mt-6 text-gray-800">
                    <form method="post" className="w-full space-y-5">

                        {/* Name Fields */}
                        <div className='flex flex-col md:flex-row gap-4'>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="firstname" className="text-sm font-medium">First name</label>
                                <input
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    required
                                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="lastname" className="text-sm font-medium">Last name</label>
                                <input
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    required
                                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="mail" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                type="email"
                                id="mail"
                                name="mail"
                                placeholder="Enter your email"
                                required
                                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Create a strong password"
                                required
                                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mt-4">Confirm password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                required
                                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Terms Checkbox */}
                        <div className="flex flex-row justify-start text-xs">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" name="agreeTerms" required className="rounded border-gray-300" />
                                I agree to the <a href="/" className="underline text-blue-600">Terms of Services</a> and <a href="/" className="underline text-blue-600">Privacy Policy</a>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md shadow-md transition duration-200"
                        >
                            Sign In
                        </button>

                        {/* OR Divider */}
                        <div className="text-center mt-6 space-y-4">
                            <div className="flex items-center justify-center gap-2">
                                <div className="flex-grow h-px bg-gray-300"></div>
                                <span className="text-sm text-gray-500">Or continue with</span>
                                <div className="flex-grow h-px bg-gray-300"></div>
                            </div>

                            {/* Social Buttons */}
                            <div className="flex justify-center gap-4 flex-wrap">
                                <button
                                    type="button"
                                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md shadow hover:bg-gray-100 transition text-sm"
                                >
                                    <FaGoogle className="text-red-500" />
                                    Google
                                </button>
                                <button
                                    type="button"
                                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md shadow hover:bg-gray-100 transition text-sm"
                                >
                                    <FaFacebookF className="text-blue-600" />
                                    Facebook
                                </button>
                            </div>

                            {/* Sign Up Link */}
                            <p className="text-sm text-gray-600">
                                Don’t have an account?{' '}
                                <a href="#" className="text-blue-600 hover:underline">
                                    Sign up for free
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
