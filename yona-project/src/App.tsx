// import { useState } from 'react'
import './App.css'
import MainLayout from './layouts/MainLayout'
import DashboardLayout from './layouts/DashboardLayout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import About from './pages/About'
import Profile from './pages/profile/Profile'
import Settings from './pages/Settings/Settings'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path="/" element={<Home />} /> {/* "/" */}
          <Route path="/about" element={<About />} /> {/* "/about" */}
          <Route path="/profile" element={<Profile />} /> {/* "/profile" */}
        </Route>
        <Route>
          <Route path="/dashboard" element={<DashboardLayout/>}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile/>} />
            <Route path="settings" element={<Settings/>} />
            <Route path="about" element={<About/>} />
          </Route>  
        </Route>  
      </Routes>
    </Router>
  )
}

export default App
