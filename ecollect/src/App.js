import React from 'react';
import './App.css';
// import Registrar from './components/registrar/Registrar';
// import Reciclar from './components/reciclar/Reciclar';
// import MiPerfil from './components/miPerfil/MiPerfil';
import {BrowserRouter,Switch,Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login'



function App() {
  return (
      // <Registrar></Registrar>
      // <Reciclar/>
      // <MiPerfil></MiPerfil>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
            <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
      
  );
}

export default App;
