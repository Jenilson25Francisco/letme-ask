import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import "./service/Firebase.ts"
import "./styles/Global.scss"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
