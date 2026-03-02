import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Playground from './pages/Playground'
import Navbar from './components/Navbar'
import LoginHandler from './components/LoginHandler';
import Signup from './pages/Signup';
import Home from './pages/Home'
import LandingPage from './pages/LandingPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/playground" element={<Playground/>} />
        <Route path='/loginHandler' element={<LoginHandler/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
