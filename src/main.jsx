import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { ListaContextProvider } from './context/ListaContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ListaContextProvider>
      <App />
    </ListaContextProvider>    
  </React.StrictMode>,
);