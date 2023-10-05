import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Sample} from './components/Sc'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Sample />
  </React.StrictMode>,
)
