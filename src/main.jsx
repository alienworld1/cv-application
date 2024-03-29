import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import Logo from './assets/resume-portfolio-svgrepo-com.svg'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <header>
        <img src={Logo} alt="CV" />
        <h1>CV Application</h1>
      </header>
    <App />
  </React.StrictMode>,
)
