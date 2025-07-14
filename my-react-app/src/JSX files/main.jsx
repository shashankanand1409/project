import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../CSS files/index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
