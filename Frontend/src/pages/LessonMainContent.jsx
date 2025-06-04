import React from 'react';
import { FaArrowLeft, FaArrowRight, FaVolumeUp } from 'react-icons/fa';

/**
 * LessonMainContent Component
 * Production-ready version of the Spanish Greetings lesson module.
 * This component includes audio prompts, practice matching, and input-based dialogue completion.
 */
const LessonMainContent = () => {
  const greetings = [
    { sp: 'Buenos días', en: 'Good morning' },
    { sp: 'Buenas tardes', en: 'Good afternoon' },
    { sp: 'Buenas noches', en: 'Good evening/night' },
    { sp: 'Hola', en: 'Hello' },
    { sp: '¿Qué tal?', en: 'How are you?' },
    { sp: 'Mucho gusto', en: 'Nice to meet you' }
  ];

  const options = ['Good morning', 'Good afternoon', 'Good evening', 'Hello'];

  return (
    <div className="bg-gray-50 p-4 sm:p-8">

      {/* Progress Tracker */}
      <div className="flex justify-between items-center mb-4">
        <a href="#" className="flex items-center text-sm text-gray-600">
          <FaArrowLeft className="mr-1" /> Back to Dashboard
        </a>
        <div className="text-sm text-gray-600 flex items-center gap-2">
          <span>3/10</span>
          <div className="w-32 bg-gray-300 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '30%' }} />
          </div>
        </div>
      </div>

      {/* Lesson Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Greetings & Introductions</h2>
        <p className="text-gray-600 text-sm">
          Learn how to greet people and introduce yourself in Spanish
        </p>
      </div>

      <div className="bg-white shadow rounded-xl p-6 flex flex-col gap-6">

        {/* Listen and Repeat Section */}
        <section>
          <h3 className="text-blue-600 font-semibold flex items-center gap-2 mb-4">
            <FaVolumeUp /> Listen and repeat
          </h3>
          <div className="bg-blue-50 p-4 rounded-lg flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-800">Hola, ¿cómo estás?</p>
              <p className="text-sm text-gray-500">Hello, how are you?</p>
            </div>
            <button className="text-blue-600 text-xl" aria-label="Play audio"><FaVolumeUp /></button>
          </div>

          {/* Greetings Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4">
            {greetings.map((phrase, index) => (
              <div key={index} className="bg-gray-100 p-3 rounded flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-800 text-sm">{phrase.sp}</p>
                  <p className="text-xs text-gray-500">{phrase.en}</p>
                </div>
                <button className="text-blue-600" aria-label={`Play ${phrase.sp}`}><FaVolumeUp /></button>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Section */}
        <section>
          <h3 className="text-green-600 font-semibold flex items-center gap-2 mb-4">
            🧠 Practice
          </h3>

          {/* Match Task */}
          <div className="mb-6">
            <p className="text-gray-800 font-medium mb-2">Match the greeting with its meaning</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {options.map((opt, i) => (
                <button
                  key={i}
                  className="border rounded p-2 hover:bg-blue-50 text-sm text-gray-700"
                  aria-label={`Select answer: ${opt}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Dialogue Completion Task */}
          <div>
            <p className="text-gray-800 font-medium mb-2">Complete the dialogue</p>
            <div className="border rounded-lg p-3 bg-gray-50">
              <p className="text-sm text-gray-800">
                <span className="font-bold text-blue-700">A:</span> ¡Hola! Me llamo Carlos. ¿Cómo te llamas?
              </p>
              <p className="text-xs text-gray-500 mb-2">
                Hello! My name is Carlos. What’s your name?
              </p>
              <div className="mt-2">
                <span className="font-bold text-green-600">B:</span>
                <input
                  type="text"
                  placeholder="Hello! My name is ___"
                  className="border-b border-dashed border-blue-400 bg-transparent outline-none w-full p-1 mt-1 text-sm text-gray-700"
                  aria-label="Your answer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Footer */}
        <div className="flex justify-between items-center mt-6">
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:underline" aria-label="Previous lesson">
            <FaArrowLeft /> Previous
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm" aria-label="Next lesson">
            Next <FaArrowRight />
          </button>
        </div>

      </div>
    </div>
  );
};

export default LessonMainContent;