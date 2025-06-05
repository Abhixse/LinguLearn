import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const ProficiencyLevel = () => {
    const location = useLocation();
    const focus = location.state?.focus || 'your focus';
    const time = location.state?.time || 'your time';
    const language = location.state?.language || 'this language';

    const [selectedLevel, setSelectedLevel] = useState(null);

    const levels = [
        {
            key: 'Beginner',
            icon: '🌱',
            title: 'Beginner',
            desc: "I'm just starting out with Spanish",
            points: ['Basic greetings', 'Simple phrases', 'Numbers 1–10']
        },
        {
            key: 'Intermediate',
            icon: '🌿',
            title: 'Intermediate',
            desc: 'I know some Spanish but need practice',
            points: ['Can hold basic conversations', 'Understand simple texts', 'Know common vocabulary']
        },
        {
            key: 'Advanced',
            icon: '🌳',
            title: 'Advanced',
            desc: 'I’m quite proficient but want to improve',
            points: ['Can discuss complex topics', 'Read advanced texts', 'Understand native speakers']
        }
    ];

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
            <div className="bg-white rounded-xl shadow-md w-full max-w-4xl p-8">

                {/* Progress Bar */}
                <div className="relative mb-6">
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-blue-600 rounded-full w-4/4"></div>
                    </div>
                </div>

                {/* Header */}
                <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-1">
                        <div className="w-6 h-6 flex items-center justify-center text-white text-lg bg-blue-600 rounded-full">3</div>
                        <h2 className="text-lg font-semibold">What's your level?</h2>
                    </div>
                    <p className="text-sm text-gray-500">Select your current Spanish proficiency</p>
                </div>

                {/* Level Options */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {levels.map((level) => (
                        <div
                            key={level.key}
                            onClick={() => setSelectedLevel(level.key)}
                            className={`relative border rounded-lg p-4 bg-gray-50 cursor-pointer transition 
                ${selectedLevel === level.key ? 'border-green-500 shadow-md' : 'hover:shadow'}`}
                        >
                            <div className="text-4xl mb-2">{level.icon}</div>
                            <h3 className="text-3xl font-semibold text-gray-800">{level.title}</h3>
                            <p className="text-base text-gray-500 mb-2">{level.desc}</p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                {level.points.map((point, i) => (
                                    <li key={i} className="flex items-center gap-1">
                                        <CheckCircle className="text-green-500 w-4 h-4" /> {point}
                                    </li>
                                ))}
                            </ul>

                            {selectedLevel === level.key && (
                                <span className="absolute top-1 right-1 text-green-500 text-lg">✅</span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Info Note */}
                <div className="bg-blue-50 border-l-4 border-blue-500 text-sm text-blue-700 p-3 rounded mb-6">
                    Don’t worry if you’re not sure about your level. We’ll adjust your learning path based on your performance.
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-6">
                    <Link
                        to="/goal"
                        state={{ language }}
                        className="text-sm text-gray-600 hover:text-black flex items-center gap-1"
                    >
                        ← Back
                    </Link>
                    {selectedLevel ? (
                        <Link
                            to='/signup'
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

export default ProficiencyLevel;
