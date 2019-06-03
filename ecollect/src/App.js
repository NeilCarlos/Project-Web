import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Recolector from './components/recolector/Recolector';
// import Mensaje from './components/mensaje/Mensaje';
// import Registrar from './components/registrar/Registrar'
import Dashboard from './components/dashboard/Dashboard';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // <Recolector></Recolector>
    // <Mensaje></Mensaje>
    <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Dashboard}/>                    
                    {/* <Route exact path="/portafolio" component={Portafolio}/>    */}
                    {/* <Route exact path="/productos" component={Productos}/>    */}
                </Switch>
            </BrowserRouter>

    // <Dashboard></Dashboard>
  );
}

export default App;
