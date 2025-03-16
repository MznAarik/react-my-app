import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Profile from './components/Profile'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Profile /> */}

  </StrictMode>,
)
