import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPlane, FaBriefcase, FaUsers, FaGraduationCap, FaBrain, FaGlobe } from 'react-icons/fa';

const GoalsSet = () => {
    const location = useLocation();
    const languageSelected = location.state?.language || 'this language';

    const [selectedFocus, setSelectedFocus] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const focuses = [
        { key: 'Travel', icon: <FaPlane />, title: 'Travel', desc: 'Learn essential phrases for your trips' },
        { key: 'Work', icon: <FaBriefcase />, title: 'Work', desc: 'Improve your career opportunities' },
        { key: 'Friends & Family', icon: <FaUsers />, title: 'Friends & Family', desc: 'Connect with loved ones in their language' },
        { key: 'Education', icon: <FaGraduationCap />, title: 'Education', desc: 'Support your academic studies' },
        { key: 'Brain Training', icon: <FaBrain />, title: 'Brain Training', desc: 'Keep your mind sharp and active' },
        { key: 'Culture', icon: <FaGlobe />, title: 'Culture', desc: 'Explore literature, films, and music' },
    ];

    const durations = [
        { time: '5 minutes', label: 'Casual' },
        { time: '15 minutes', label: 'Regular' },
        { time: '30+ minutes', label: 'Serious' }
    ];

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
            <div className="bg-white rounded-xl shadow-md w-full max-w-4xl p-8">
                {/* Progress bar */}
                <div className="relative mb-6">
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-blue-600 rounded-full w-2/3"></div>
                    </div>
                </div>

                {/* Header */}
                <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-1">
                        <div className="w-6 h-6 flex items-center justify-center text-white text-lg bg-blue-600 rounded-full">2</div>
                        <h2 className="text-lg font-semibold">Set your goals</h2>
                    </div>
                    <p className="text-sm text-gray-500">What do you want to achieve with {languageSelected}?</p>
                </div>

                {/* Focus Options */}
                <div className="bg-white p-6 rounded-xl shadow space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {focuses.map((focus) => (
                            <div
                                key={focus.key}
                                onClick={() => setSelectedFocus(focus.key)}
                                className={`relative border rounded-lg p-4 flex gap-3 items-start cursor-pointer transition 
                                    ${selectedFocus === focus.key ? "border-green-500 shadow-md" : "hover:shadow"}`}
                            >
                                <div className="text-xl text-blue-600">{focus.icon}</div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 text-sm">{focus.title}</h4>
                                    <p className="text-xs text-gray-500">{focus.desc}</p>
                                </div>

                                {selectedFocus === focus.key && (
                                    <span className="absolute top-1 right-1 text-green-500 text-xs">✅</span>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Time Dedication */}
                    <div>
                        <p className="font-medium text-gray-800 mb-3 text-sm">How much time can you dedicate to learning each day?</p>
                        <div className="flex flex-wrap gap-3">
                            {durations.map((d) => (
                                <div
                                    key={d.time}
                                    onClick={() => setSelectedTime(d.time)}
                                    className={`relative border px-4 py-2 rounded-lg text-sm cursor-pointer transition 
                                        ${selectedTime === d.time ? "border-green-500 shadow-md" : "hover:shadow"}`}
                                >
                                    <div className="font-medium text-gray-800">{d.time}</div>
                                    <div className="text-xs text-gray-500">{d.label}</div>

                                    {selectedTime === d.time && (
                                        <span className="absolute top-1 right-1 text-green-500 text-xs">✅</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-6">
                    <Link to='/language-chosen' className="text-sm text-gray-600 hover:text-black flex items-center gap-1">← Back</Link>
                    {selectedFocus && selectedTime ? (
                        <Link
                            to='/proficiency'
                            state={{ focus: selectedFocus, time: selectedTime, language: languageSelected }}
                            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md text-sm flex items-center gap-1"
                        >
                            Continue →
                        </Link>
                    ) : (
                        <button
                            disabled
                            className="bg-gray-400 text-white px-5 py-2 rounded-md text-sm flex items-center gap-1 cursor-not-allowed"
                        >
                            Continue →
                        </button>
                    )}

                </div>
            </div>
        </div>
    );
};

export default GoalsSet;
