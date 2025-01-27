import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import SearchPage from './components/SearchPage.jsx'
import ResultPage from './components/ResultPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements((
    <Route path='/' element={<App />}>
      <Route path='' element={<SearchPage />} />
      <Route path='/search' element={<ResultPage />}  />
    </Route>
  ))
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
