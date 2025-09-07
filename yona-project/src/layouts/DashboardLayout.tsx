// import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './Layout.css'

export default function DashboardLayout() {
  return (
    <div className="layout">
        <aside className="">
            <h2 className="">Admin Panel</h2>
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
