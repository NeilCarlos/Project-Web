import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login'
import Index from './components/index/index'
import Registrar from './components/registrar/Registrar'



function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registrar" component={Registrar} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
