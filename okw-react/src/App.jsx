import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'
import useCSRF from './components/auth/hooks/useCSRF'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

function App() {
  useEffect(() => {
  useCSRF()
  }, [])
  console.log(cookies.get('csrftoken'))
  return <RouterProvider router={router} />
}

export default App
