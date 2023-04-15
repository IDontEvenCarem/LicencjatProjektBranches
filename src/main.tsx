import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { createHashRouter } from 'react-router-dom'
import App from './App'
import Article from './Article'
import FloatingElements from './FloatingElements'
import './index.css'
import './styles.pure.css'

const router = createHashRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/article/:articleId',
    element: <Article></Article>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FloatingElements></FloatingElements>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
