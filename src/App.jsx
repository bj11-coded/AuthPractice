import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './auth/login/Login'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Login />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoutes />} >
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
