import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { lazy, Suspense } from 'react'
import Loader from './components/Loader'
import App from './App'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  // </StrictMode>
)
