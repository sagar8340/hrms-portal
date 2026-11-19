import React from 'react'
import Dashboard from './pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import LeaveApply from './pages/LeaveApply'
import AdminPage from './pages/AdminPage'

const App = () => {

  return (
    <div >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/leaveapply" element={<LeaveApply />} />
        <Route path="/adminpage" element={<AdminPage />}/>
      </Routes>
      </div>
  )
}

export default App;