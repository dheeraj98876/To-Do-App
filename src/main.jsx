import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

 <StrictMode>
  <header className='header'><h1> To Do App</h1> </header>
    <App />
  <footer className='footer'> Copyright © 2025 Dheeraj Singh Bisht To Do App  </footer>
  </StrictMode>,
)
