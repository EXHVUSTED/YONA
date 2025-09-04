// import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex">
        <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col gap-4">
            <h2 className="text-xl font-bold">Admin Panel</h2>
            <Link to="/dashboard">Main</Link>
            <Link to="/dashboard/profile">Profile</Link>
            <Link to="/dashboard/settings">Settings</Link>
            <Link to="/dashboard/about">About</Link>
            <Link to="/">Home</Link>

        </aside>

        <main>
            <Outlet />
        </main>
    </div>
  )
}
