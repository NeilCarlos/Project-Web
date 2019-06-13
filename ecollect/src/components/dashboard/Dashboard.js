import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import $ from 'jquery';

import Home from '../home/Home'
import MiPerfil from '../miPerfil/MiPerfil'
import MisPublicaciones from '../usuario/misAnuncios/MisAnuncios'
import Oferta from '../oferta/Oferta'
import Mensaje from '../mensaje/Mensaje'
import Reciclar from '../reciclar/Reciclar'
import Publicaciones from '../recolector/Recolector'

import './dashboard.css';


export default class Dashboard extends Component {

    constructor(props){
        super(props)
        this.Salir = this.Salir.bind(this)
    }

    componentDidMount() {
        this.ClickToggleSidebar();
    }

    ClickToggleSidebar = () => {
        // console.log("Se hizo clic");
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        //$('a[aria-expanded=true]').attr('aria-expanded', 'false');
    }

    Salir = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <BrowserRouter>

                <div className="wrapper">


                    <nav id="sidebar">
                        <div className="sidebar-header">
                            <h2>ECOLLECT</h2>
                        </div>

                        <ul className="list-unstyled components">
                            <Link className="nav-link" component={Link} to='/Home'>Recicla con Ecollect</Link>
                            <li className="active">
                                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Usuario</a>
                                <ul className="collapse list-unstyled" id="homeSubmenu">
                                    <li>
                                        <Link className="nav-link" component={Link} to='/miPerfil'>Mi Perfil</Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" component={Link} to='/misPublicaciones'>Mis Publicaciones</Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" component={Link} to='/misOfertas'>Mis Ofertas</Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" component={Link} to='/misMensajes'>Mis Mensajes</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link className="nav-link" component={Link} to='/reciclar'>Reciclar</Link>
                            </li>
                            <li>
                                <Link className="nav-link" component={Link} to='/publicaciones'>Publicaciones</Link>
                            </li>
                            <li>
                                <Link className="nav-link" component={Link} to='/' onClick={this.Salir}>Salir</Link>
                            </li>
                        </ul>
                    </nav>


                    <div id="content">

                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">

                                <button type="button" id="sidebarCollapse" onClick={this.ClickToggleSidebar} className="btn btn-info">
                                    <i className="fas fa-align-left"></i>
                                    <span>Menu</span>
                                </button>

                                <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <i className="fas fa-align-justify"></i>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="nav navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#">Salir</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    
                        <Switch>
                            <Route exact path="/" />
                            <Route exact path="/Home" component={Home} />
                            <Route exact path="/miPerfil" component={MiPerfil} />
                            <Route exact path="/misPublicaciones" component={MisPublicaciones} />
                            <Route exact path="/misOfertas" component={Oferta} />
                            <Route exact path="/misMensajes" component={Mensaje} />
                            <Route exact path="/reciclar" component={Reciclar} />
                            <Route exact path="/publicaciones" component={Publicaciones} />
                        </Switch>
                    </div>
                </div>
                
            </BrowserRouter>
        )
    }
}
