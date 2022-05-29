//traigo la libreria REACT
import React from 'react';
//traigo la libreria de reactDOM
import ReactDOM from 'react-dom/client';
// agarrar una app que ya existia en REACT

import "./estilos.css";
import App from './App';
// const App = ()=> "hola mundo con jsx y arrow function"
//mostrar la app en el dom
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);