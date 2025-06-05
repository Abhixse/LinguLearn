import React from 'react';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 text-black px-4">
            <div className="w-full max-w-4xl p-6 md:p-10 flex flex-col items-center justify-center bg-white rounded-2xl shadow-2xl">

                {/* Brand + Welcome Message */}
                <div className="w-full flex flex-col items-center text-center">
                    <h2 className="font-bold text-blue-600 text-4xl">LinguaLearn</h2>
                    <div className="mt-4">
                        <h3 className="text-2xl font-semibold text-gray-800">Welcome Back</h3>
                        <span className="mt-1 block text-sm text-gray-500 font-[Poppins]">
                            Sign in to continue your language learning journey
                        </span>
                    </div>
                </div>

                {/* Form Card */}
                <div className="w-full mt-6 text-gray-800 flex flex-col items-center justify-center">
                    <form method="post" className="w-full max-w-sm space-y-5">

                        {/* Email Field */}
                        <div>
                            <label htmlFor="mail" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="mail"
                                name="mail"
                                placeholder="Enter your email"
                                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="passwd" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="passwd"
                                name="passwd"
                                placeholder="Enter your password"
                                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Remember / Forgot */}
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center">
                                <input type="checkbox" name="remember" className="mr-2 rounded border-gray-300" />
                                Remember me
                            </label>
                            <a href="/forgot-password" className="text-blue-600 hover:underline">
                                Forgot your password?
                            </a>
                        </div>

                        {/* Sign In Button */}
                        <input
                            type="submit"
                            value="Sign In"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md shadow-md transition duration-200"
                        />

                        {/* OR Divider */}
                        <div className="text-center mt-6 space-y-4">
                            <div className="flex items-center justify-center gap-2">
                                <div className="flex-grow h-px bg-gray-300"></div>
                                <span className="text-sm text-gray-500">Or continue with</span>
                                <div className="flex-grow h-px bg-gray-300"></div>
                            </div>

                            {/* Social Buttons */}
                            <div className="flex justify-center gap-4">
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
                                <Link to='/signup' className="text-blue-600 hover:underline">
                                    Sign up for free
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
