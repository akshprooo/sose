import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import SchoolContext from './context/SchoolContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SchoolContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SchoolContext>
  </StrictMode>,
)
