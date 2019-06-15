import React, { Component } from 'react'

import './Login.css';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

export default class Login extends Component {    

    constructor(props) {
        super(props);
        this.email = React.createRef();
        this.pass = React.createRef();
        this.mensaje = React.createRef();
        this.state={
            usuario:{
                nombre:'',
                email:'',
                token:'',
                sesion:''
            }
        }

        if (this.ValidarUsuario()) {
            // this.props.history.push("/dashboard")
        }
    }

    ValidarUsuario = () => {
        let userDetails = this.ObtenerDetalleToken();
        console.log(JSON.parse(userDetails));
        
        if (userDetails) {
            let ahora = Date.now() / 1000;
            if (JSON.parse(userDetails).exp > ahora) {
                return true;
            } else {
                localStorage.removeItem("usuario-ecollect");
            }
        }
        return false;
    }
    ObtenerToken = () => {
        let token = localStorage.getItem('usuario-ecollect')
        if (token) {
            return token
        } else {
            return null
        }
    }
    ObtenerDetalleToken() {
        let token = this.ObtenerToken();
        if (token) {
            let centro = token.split(".")[1];
            return window.atob(centro);
        }
        return null;
    }
    login = () => {

        if (this.email.current.value.trim() && this.pass.current.value.trim()) {
            this.mensaje.current.innerHTML = ''
            let headers = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    usu_email: this.email.current.value.trim(),
                    usu_pass: this.pass.current.value.trim()
                })
            };
            fetch('https://backend-ecollect.herokuapp.com/api/usuario/login', headers).then((respuesta) => {
                return respuesta.json();
            }).then((data) => {
                if (data.token) {
                    // console.log(data);
                    
                    // Guardando en el Storage
                    this.mensaje.current.innerHTML = '';

                    localStorage.setItem('usuario-ecollect', data.token);
                    if (this.ValidarUsuario()) {
                        // this.props.history.push("/dashboard")
                    }
                }
                else {
                    this.mensaje.current.innerHTML = 'Email o Contraseña incorrectos.';
                }
            })
        } else {
            this.mensaje.current.innerHTML = 'Falta email o contraseña.';
        }
    }

    LoginGoogle = (usuario) => {
        console.log(usuario);
        // console.log(error);
    }
    LoginFacebook=(usuario)=>{
        console.log(usuario);
    }

    submitForm = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                {/* <h5 className="card-title text-center">Iniciar Sesión</h5> */}
                                <div className="content-logo">
                                    <img className="logo-login" id="loginlogo" alt="" src={require('./img/imagen.jpg')} />
                                </div>
                                <form className="form-signin" onSubmit={this.submitForm}>
                                    <hr className="my-1" />
                                    <div className="form-group">

                                        <input ref={this.email} type="text" name="email" id="email" className="form-control" placeholder="Correo Electronico" required autoFocus />
                                    </div>

                                    <div className="form-group">
                                        <input ref={this.pass} type="password" name="password" id="password" className="form-control" placeholder="Contraseña" required />
                                    </div>
                                    <div>
                                        <small ref={this.mensaje} style={{ color: 'red' }}></small>
                                    </div>

                                    <div className="custom-control custom-checkbox mb-3 fila-flex">
                                        <div>
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label">Recordar Contraseña</label>
                                        </div>

                                        <button className="text-info btn-link">Registrar Aqui</button>

                                    </div>

                                    <button onClick={this.login} className="btn btn-lg btn-primary btn-block text-uppercase" >Iniciar</button>
                                    <hr className="my-1" />
                                    <GoogleLogin className="btn-block"
                                        clientId="499637178396-0rd7ne99bkhkqvvi3bj1h8eif8oi5a3n.apps.googleusercontent.com"
                                        
                                        onSuccess={this.LoginGoogle}
                                        onFailure={this.LoginGoogle}
                                    >
                                        <span> Login with Google</span>
                                    </GoogleLogin>

                                    {/* <button className="btn btn-lg btn-google btn-block text-uppercase" ><i className="fab fa-google mr-2"></i> Login con Google</button> */}
                                    <FacebookLogin 
                                        appId="468853403866304"
                                        fields="name,email,picture"
                                        callback={this.LoginFacebook}
                                        cssClass="btn btn-lg btn-facebook btn-block text-uppercase"
                                    />
                                    {/* <button className="btn btn-lg btn-facebook btn-block text-uppercase" ><i className="fab fa-facebook-f mr-2"></i> Login con Facebook</button> */}
                                    <hr className="my-1" />

                                    <div className="custom-control mb-2 fila-flex">
                                        <button className="text-info btn-link">Olvidaste tu Contraseña?</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
