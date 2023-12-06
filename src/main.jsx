import React from 'react'
import ReactDOM from 'react-dom/client'
import "./config/i18next.config.js"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
