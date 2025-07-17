// Project: tip-kai-react

// Import React and components
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import our components
import App from './components/App.jsx'

// Import stylesheets
import 'bootstrap-icons/font/bootstrap-icons.css'
import './scss/index.scss'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
