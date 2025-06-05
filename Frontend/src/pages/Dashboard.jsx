import React, { useState } from 'react';
import {
  FaFire,
  FaStar,
  FaArrowRight,
  FaClock,
  FaBolt,
  FaBullhorn
} from 'react-icons/fa';

// Dashboard component rendering a full user learning overview
const Dashboard = () => {
  const [userName] = useState('Abhishek');
  const [streak] = useState(3);
  const [xpEarn] = useState(150);
  const [language] = useState('English');

  const overallProgress = 60;
  const vocabularyProgress = 30;
  const grammarProgress = 60;
  const listeningProgress = 60;
  const dailyGoalProgress = 80;
  const minutesCompleted = 12;
  
  return (
    <div className='w-screen min-h-screen gap-10 flex flex-col justify-center items-center bg-blue-50 p-4 md:p-6'>

      {/* User progress header card */}
      <div className='w-full max-w-5xl px-4 py-5 bg-blue-600 rounded-2xl flex flex-col md:flex-row gap-4'>

        {/* Left: User Info */}
        <div className='flex flex-col md:w-1/2'>
          <div className='pl-2'>
            <h1 className='text-white text-xl md:text-2xl font-semibold'>{userName}</h1>
            <p className='text-white font-light text-sm mt-1'>You're making great progress with {language}. Keep it up!</p>
          </div>

          {/* XP and streak stats */}
          <div className='flex mt-4 md:mt-6 gap-6 md:gap-8 pl-2'>
            <div className='flex flex-col'>
              <span className='text-white font-light text-sm'>Current streak</span>
              <div className='flex items-center gap-2 mt-1'>
                <FaFire className='text-orange-400' />
                <span className='text-white font-semibold text-sm'>{streak} days</span>
              </div>
            </div>

            <div className='flex flex-col'>
              <span className='text-white font-light text-sm'>XP earned</span>
              <div className='flex items-center gap-2 mt-1'>
                <FaStar className='text-yellow-400' />
                <span className='text-white font-semibold text-sm'>{xpEarn}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Continue button */}
        <div className='flex md:w-1/2 items-center justify-end'>
          <button className='flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-100 transition'>
            Continue Learning <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Progress tracking card */}
      <div className='w-full max-w-5xl flex flex-col gap-3'>
        <h2 className='font-semibold text-gray-700 text-lg'>Your Progress</h2>
        <div className='bg-white rounded-lg shadow-md w-full p-4 md:p-5 flex flex-col gap-5'>
          <div>
            <p className='text-gray-700 font-medium mb-1'>Overall Progress</p>
            <div className='w-full bg-gray-200 h-3 rounded-full'>
              <div className='bg-blue-500 h-full rounded-full' style={{ width: `${overallProgress}%` }} />
            </div>
          </div>
          
          {/* Vocabulary, Grammar, Listening Progress */}
          <div className='flex flex-col sm:flex-row flex-wrap gap-4'>
            <ProgressSection title="Vocabulary" percent={vocabularyProgress} color="bg-green-500" />
            <ProgressSection title="Grammar" percent={grammarProgress} color="bg-blue-500" />
            <ProgressSection title="Listening" percent={listeningProgress} color="bg-violet-500" />
          </div>
        </div>
      </div>

      {/* Daily Goal Progress */}
      <div className='w-full max-w-5xl flex flex-col gap-3'>
        <h2 className='font-semibold text-gray-700 text-lg'>Daily Goals</h2>
        <div className='bg-white rounded-lg shadow-md w-full p-4 flex flex-col sm:flex-row justify-between items-center gap-4'>
          <div className='flex flex-col w-full sm:w-1/2'>
            <p className='text-gray-700 mb-1 text-sm'>Today's goal: 15 minutes of learning</p>
            <div className='w-full bg-gray-200 h-3 rounded-full'>
              <div className='bg-green-500 h-full rounded-full' style={{ width: `${dailyGoalProgress}%` }} />
            </div>
            <p className='text-gray-600 text-sm mt-2'>You've completed {minutesCompleted} minutes today</p>
          </div>
          <div className='flex gap-3'>
            <IconCircle icon={<FaClock />} bgColor="bg-green-200" iconColor="text-green-600" />
            <IconCircle icon={<FaBolt />} bgColor="bg-blue-200" iconColor="text-blue-600" />
            <IconCircle icon={<FaBullhorn />} bgColor="bg-violet-200" iconColor="text-violet-600" />
          </div>
        </div>
      </div>

      {/* Recommended Lesson Cards */}
      <div className='w-full max-w-5xl flex flex-col gap-3'>
        <h2 className='font-semibold text-gray-700 text-lg'>Recommended Lessons</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Each card shows title, level, duration, and optional progress bar */}
          <LessonCard title='👋 Greetings & Introductions' duration='15 min' />
          <LessonCard title='💬 Common Phrases' duration='20 min' progress={25} />
          <LessonCard title='🔢 Numbers & Counting' duration='10 min' />
        </div>
      </div>

      {/* Recent Achievements Section */}
      <div className='w-full max-w-5xl flex flex-col gap-3 mt-6'>
        <h2 className='font-semibold text-gray-700 text-lg'>Recent Achievements</h2>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
          <Achievement icon='🎯' title='First Lesson' time='2 days ago' />
          <Achievement icon='🔥' title='3-Day Streak' time='Today' />
          <Achievement icon='📘' title='50 Words Learned' time='Yesterday' />
          <Achievement icon='🏆' title='Perfect Score' time='3 days ago' />
        </div>
      </div>

    </div>
  );
};


// Progress bar section reusable component
const ProgressSection = ({ title, percent, color }) => (
  <div className='flex flex-col flex-1 min-w-[40%] sm:min-w-[30%]'>
    <p className='text-gray-700 font-medium mb-1 text-sm'>{title}</p>
    <div className='w-full bg-gray-200 h-3 rounded-full'>
      <div className={`${color} h-full rounded-full`} style={{ width: `${percent}%` }} />
    </div>
  </div>
);


// Circle icon reusable component
const IconCircle = ({ icon, bgColor, iconColor }) => (
  <div className={`inline-flex items-center justify-center ${bgColor} rounded-full p-3`}>
    <div className={`${iconColor} text-xl`}>{icon}</div>
  </div>
);


// Achievement card reusable component
const Achievement = ({ icon, title, time }) => (
  <div className='bg-white rounded-xl shadow flex flex-col items-center p-4'>
    <span className='text-2xl'>{icon}</span>
    <h4 className='text-sm font-semibold text-gray-800 mt-2'>{title}</h4>
    <p className='text-xs text-gray-500'>{time}</p>
  </div>
);


// Recommended lesson card reusable component
const LessonCard = ({ title, duration, progress }) => (
  <div className='bg-white rounded-xl shadow p-4 flex flex-col justify-between'>
    <div className='flex items-center gap-2 mb-2'>
      <span className='text-xs bg-blue-100 text-blue-600 font-semibold px-2 py-0.5 rounded'>Beginner</span>
      <span className='text-gray-500 text-sm ml-auto'>{duration}</span>
    </div>
    <h3 className='text-base md:text-lg font-semibold text-gray-800'>{title}</h3>
    {progress !== undefined && (
      <div className='w-full bg-gray-200 h-2 rounded-full mt-2'>
        <div className='bg-green-500 h-full rounded-full' style={{ width: `${progress}%` }}></div>
      </div>
    )}
    <a href='#' className='text-blue-600 font-medium text-sm mt-4 hover:underline'>Start lesson →</a>
  </div>
);


export default Dashboard;