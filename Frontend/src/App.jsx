import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/Home'
import Footer from './components/footer/Footer'
import LanguageChosen from './pages/LanguageChosen'
import Dashboard from './pages/Dashboard'
import LessonMainContent from './pages/LessonMainContent'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import PracticeScreen from './pages/PracticeScreen'
import GoalsSet from './pages/GoalsSet'
import ProficiencyLevel from './pages/ProficiencyLevel'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} />
      <main className="pt-6 px-4 md:px-8 max-w-7xl mx-auto">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/language-chosen" element={<LanguageChosen />} />
          <Route path="/goal" element={<GoalsSet />} />
          <Route path="/proficiency" element={<ProficiencyLevel />} />
          
          {/* Protected Routes */}
          {isLoggedIn ? (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/lessons" element={<LessonMainContent />} />
              <Route path='/practice' element={<PracticeScreen />} />
            </>
          ) : (
            <>
              <Route path="/dashboard" element={<Navigate to="/login" replace />} />
              <Route path="/lessons" element={<Navigate to="/login" replace />} />
            </>
          )}

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
