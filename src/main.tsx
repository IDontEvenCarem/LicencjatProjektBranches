import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { createHashRouter } from 'react-router-dom'
import App from './App'
import FloatingElements from './FloatingElements'
import './index.css'
import Shell from './Shell'

const Article = React.lazy(() => import("./Article"))


const router = createHashRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/article/:articleId',
    element: <React.Suspense fallback={<Shell><div>Wczytywanie...</div></Shell>}>
      <Article></Article>
    </React.Suspense>,
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FloatingElements></FloatingElements>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
