import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  {OrderContextProvider} from './context/Order.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
<OrderContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
</OrderContextProvider>

)
