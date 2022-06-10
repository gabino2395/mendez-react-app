//traigo la libreria REACT
import React from 'react';
//traigo la libreria de reactDOM
import ReactDOM from 'react-dom/client'
// importo css

import "./estilos.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
// agarrar una app que ya existia en REACT
import App from './App';
// const App = ()=> "hola mundo con jsx y arrow function"
//mostrar la app en el dom
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

