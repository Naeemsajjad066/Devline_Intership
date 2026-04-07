import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { lazy,Suspense } from 'react'
import Loader from './components/Loader'
import App from './App'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App/>
//  </StrictMode>,
)
