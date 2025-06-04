import React from 'react';
import { FaArrowRight, FaClock } from 'react-icons/fa';
import { PiCardsLight, PiQuestion, PiTextAa, PiHeadphones } from 'react-icons/pi';

/**
 * PracticeScreen Component
 * A production-ready Spanish practice screen featuring flashcards, MCQs, fill-in-the-blanks, listening, and challenges.
 */
const PracticeScreen = () => {
  const categories = [
    {
      label: 'Vocabulary',
      desc: 'Practice and expand your Spanish vocabulary',
      color: 'bg-blue-100',
      link: 'javascript:void(0)',
    },
    {
      label: 'Grammar',
      desc: 'Master Spanish grammar rules and structures',
      color: 'bg-green-100',
      link: 'javascript:void(0)',
    },
    {
      label: 'Conversation',
      desc: 'Improve your speaking and listening skills',
      color: 'bg-purple-100',
      link: 'javascript:void(0)',
    },
  ];

  const exercises = [
    {
      icon: <PiCardsLight aria-hidden="true" />,
      label: 'Flashcards',
      desc: 'Study terms using flashcards',
    },
    {
      icon: <PiQuestion aria-hidden="true" />,
      label: 'Multiple Choice',
      desc: 'Test your memory with quiz questions',
    },
    {
      icon: <PiTextAa aria-hidden="true" />,
      label: 'Fill in the Blanks',
      desc: 'Complete sentences with the correct words',
    },
    {
      icon: <PiHeadphones aria-hidden="true" />,
      label: 'Listening',
      desc: 'Practice your listening comprehension skills',
    },
  ];

  const sets = [
    { title: 'Basic Spanish Vocabulary', difficulty: 'Beginner', count: 20 },
    { title: 'Present Tense Verbs', difficulty: 'Beginner', count: 15 },
    { title: 'Common Phrases', difficulty: 'Beginner', count: 18 },
    { title: 'Numbers & Counting', difficulty: 'Beginner', count: 12 },
  ];

  return (
    <main className="bg-gray-50 p-6 md:p-10">
      {/* Top Categories */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {categories.map((cat, i) => (
          <div
            key={i}
            className={`p-4 rounded-lg shadow transition hover:shadow-md ${cat.color}`}
          >
            <h3 className="font-semibold text-gray-800 mb-1">{cat.label}</h3>
            <p className="text-sm text-gray-600">{cat.desc}</p>
            <a
              href={cat.link}
              className="text-sm text-blue-700 font-medium mt-2 inline-block hover:underline"
            >
              Start practicing <FaArrowRight className="inline ml-1" />
            </a>
          </div>
        ))}
      </section>

      {/* Challenge Card */}
      <section className="mb-8">
        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-md flex flex-col sm:flex-row justify-between items-center">
          <div>
            <p className="uppercase text-xs tracking-wider font-semibold">
              Today's Challenge
            </p>
            <h4 className="text-lg font-bold">Vocabulary Flashcards</h4>
            <div className="flex items-center gap-2 text-sm mt-1">
              <FaClock aria-hidden="true" />
              <span>5 minutes</span>
            </div>
          </div>
          <button className="mt-4 sm:mt-0 bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition">
            Start Challenge
          </button>
        </div>
      </section>

      {/* Exercise Types */}
      <section className="mb-8">
        <h3 className="font-semibold text-gray-800 mb-4">Exercise Types</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {exercises.map((ex, i) => (
            <div
              key={i}
              className="bg-white shadow p-4 rounded-lg flex flex-col items-center text-center hover:shadow-md transition"
            >
              <div className="text-2xl text-blue-500 mb-2">{ex.icon}</div>
              <p className="font-semibold text-sm text-gray-800">{ex.label}</p>
              <p className="text-xs text-gray-500 mt-1">{ex.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Practice Sets */}
      <section className='flex flex-col '>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-800">Practice Sets</h3>
          <div className="flex gap-2 text-sm text-gray-500">
            <span className="cursor-pointer hover:text-gray-800">
              All Levels
            </span>
            <span className="cursor-pointer hover:text-gray-800">
              All Categories
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4">
          {sets.map((set, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-xl p-4 flex flex-col justify-between hover:shadow-md transition"
            >
              <div>
                <p className="font-medium text-gray-800 mb-1">{set.title}</p>
                <p className="text-xs text-gray-500">
                  {set.difficulty} • {set.count} cards
                </p>
              </div>
              <button className="bg-blue-600 text-white mt-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                Start Practice
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PracticeScreen;
