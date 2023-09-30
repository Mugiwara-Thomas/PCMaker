import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ResetCss from './styles/ResetCss.jsx'
import "./styles/GlobalStyleCSS.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResetCss />
    <App />
  </React.StrictMode>,
)
