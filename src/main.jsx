import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Inicio } from './Paginas/Inicio.jsx';
import { Nosotros } from './Paginas/Nosotros.jsx';
import { Servicio } from './Paginas/Servicios.jsx';
import { Contacto } from './Paginas/Contacto.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App>
        <Route exact path="/" component={Inicio} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/servicio" component={Servicio} />
        <Route path="/contactanos" component={Contacto} />
      </App>
    </Router>
  </React.StrictMode>
);
