import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Register from '../pages/register'
import Login from '../pages/login'
import Dashboard from '../pages/dashboard'

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" replace />} />
      
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default AppRoutes