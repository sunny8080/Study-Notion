import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute'
import NotFound from './Pages/NotFound'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className=" w-screen  font-inter min-h-screen flex flex-col bg-richblack-900">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<LogIn setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signup' element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />


        <Route path='/dashboard' element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard />
          </PrivateRoute>
        } />

        <Route path='*' element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
