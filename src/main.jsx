import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/tailwind.css'

// Hydrate theme from localStorage
const root = createRoot(document.getElementById('root'))
root.render(<App />)
