import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Register from '../pages/register'
import Login from '../pages/login'
import Dashboard from '../pages/dashboard'
import LeaveApplication from '../pages/LeaveApplication'
import ApplyLeave from '../pages/ApplyLeave'
import ApplySickLeave from '../pages/ApplySickLeave';
import LeaveRecal from '../pages/leaveRecall';
import UpdateProfile from '../pages/editProfile';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" replace />} />
      
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/leave" element={<LeaveApplication />} />
      <Route path="/leave/apply/annual" element={<ApplyLeave />} />
      <Route path="/leave/apply/sick" element={<ApplySickLeave/>} />
      <Route path='/recall' element={<LeaveRecal/>}/>
      <Route path='/edit-profile' element={<UpdateProfile/>}/>
    </Routes>
  )
}

export default AppRoutes