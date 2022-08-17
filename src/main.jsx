import React from 'react' //pacote responsaveis pelo core do react
import ReactDOM from 'react-dom/client' //integração do core do react com a DOM (Document Object model -> Representação do html atraves do javascript)
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
