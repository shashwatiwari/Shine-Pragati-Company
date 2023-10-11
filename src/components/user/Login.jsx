import React, { useState } from 'react';

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black to-slate-800 flex items-center justify-center p-8">
            <div className="w-full max-w-md bg-white p-4 lg:p-8 rounded shadow-lg">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4 lg:mb-8">
                    {isSignUp ? 'Sign Up' : 'Log In'}
                </h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-3 border rounded"
                            placeholder="Your email"
                        />
                    </div>
                    <div className="mb-3 lg:mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-3 border rounded"
                            placeholder="Your password"
                        />
                    </div>
                    {isSignUp && (
                        <div className="mb-3 lg:mb-6">
                            <label htmlFor="confirm-password" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm-password"
                                className="w-full p-3 border rounded"
                                placeholder="Confirm password"
                            />
                        </div>
                    )}
                    <button
                        className="w-full bg-indigo-500 text-white p-2 lg:p-4 rounded hover:bg-indigo-600"
                        type="submit"
                    >
                        {isSignUp ? 'Sign Up' : 'Log In'}
                    </button>
                </form>
                <p className="text-gray-600 mt-2 lg:mt-4">
                    {isSignUp
                        ? 'Already have an account?'
                        : "Don't have an account?"
                    }
                    <span
                        className="text-indigo-600 cursor-pointer"
                        onClick={toggleForm}
                    >
                        {isSignUp ? ' Log in' : ' Sign up'}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
