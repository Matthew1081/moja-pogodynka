import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import App from './App'
import './App.css' // Import stylów CSS [cite: 30]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Umożliwia globalną zmianę jednostek [cite: 39] */}
      <BrowserRouter> {/* Umożliwia nawigację między stronami [cite: 38] */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)