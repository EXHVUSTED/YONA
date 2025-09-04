// import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 flex gap-10">
        <Link to="/">Главная</Link>
        <Link to="/about">About Us</Link>
        <Link to="/profile">Profile</Link>
      </header>
      <main className="flex-1 p-6">
        <Outlet />
      </main>

      <footer className="bg-gray-200 text-center p-4">
        © 2025 My App
      </footer>
    </div>
  )
}

export default MainLayout