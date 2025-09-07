// import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import LanguageSwitcher from '../components/LanguageSwitcher'
// import tailwindcss from '@tailwindcss/vite'
import './Layout.css'
function MainLayout() {
  return (
    <div className="layout">
      <header className="header">
        <Link to="/">Main</Link>
        <Link to="/about">About Us</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/lessons">Lessons</Link>
        <div><LanguageSwitcher /></div>
      </header>
      <main className="">
        <Outlet />
      </main>

      <footer className="">
        © 2025 My App
      </footer>
    </div>
  )
}

export default MainLayout