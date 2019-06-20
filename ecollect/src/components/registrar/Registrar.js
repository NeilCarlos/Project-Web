import React, { Component } from 'react'
import './Registrar.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

var imagen;
var objFacebook;
const responseGoogle = (response) => {
    let objRegistro = {
        usu_email: response.profileObj.email,
        usu_nombre: response.profileObj.name,
        usu_estado: "a",
        usu_tiposesion: "google"
    }
    console.log(objRegistro);
    let headers = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objRegistro)
    };
    fetch('https://backend-ecollect.herokuapp.com/api/usuario/social', headers)
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.message === "ok") {
                console.log("usuario creado");
                // <Link to={`/Login`} />
            }
            else {
                console.log("error");
            }
        });
};

const responseFacebook = (response) => {
    objFacebook = {
        usu_email: response.email,
        usu_nombre: response.name,
        usu_estado: "a",
        usu_tiposesion: "facebook"
    }
}

export class Registrar extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            puntoInicial: {
                lat: -16.4296694,
                lng: -71.5162855
            },
            zoom: 17
        };
        this.nombre = React.createRef();
        this.email = React.createRef();
        this.telefono = React.createRef();
        this.pass = React.createRef();
    };

    handleClose() {
        this.setState({ show: false });
    };

    handleShow() {
        this.setState({ show: true });
    };

    obtenerUbicacion = () => {

    };

    handleInputChange(event) {
        var sImagen;
        var image = event.target.files[0];
        var pattern = /image-*/;
        //var reader = new FileReader();
        if (!image.type.match(pattern)) {
            console.error('File is not an image');
            return;
        }
        //this.objUsuario.picture = image;
        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('imgUsuario').setAttribute('src', e.target.result);
            sImagen = e.target.result;
            imagen = sImagen;
        }
        reader.readAsDataURL(image);
        //readURL(event);
    }


    registrar = () => {
        let objRegistro = {
            usu_nombre: this.nombre.current.value,
            usu_email: this.email.current.value,
            usu_telefono: this.telefono.current.value,
            usu_pass: this.pass.current.value,
            usu_urlimagen: imagen,
            usu_estado: "a",
            usu_tiposesion: "aplicacion"
        }
        console.log(objRegistro);
        let headers = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objRegistro)
        };
        fetch('https://backend-ecollect.herokuapp.com/api/usuario', headers)
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data.message === "created") {
                    console.log("usuario creado");
                    // <Link to={`/Login`} />
                }
                else {
                    console.log("mal ingresado");
                }
            });
    };

    registrarFacebook = () => {
        let headers = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objFacebook)
        };
        console.log(objFacebook);
        fetch('https://backend-ecollect.herokuapp.com/api/usuario/social', headers)
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data.message === "ok") {
                    console.log("usuario creado");
                    // <Link to={`/Login`} />
                }
                else {
                    console.log("error");
                }
            });
    }

    render() {
        return (
            <div className="container" >
                <div className="row ">
                    <div className="col-md-4 py-5 bg-primary text-white text-center ">
                        <div className=" ">
                            <div className="card-body">
                                <img src="http://www.ansonika.com/mavia/img/registration_bg.svg" />
                                <h2 className="py-3">Registro</h2>
                                <p>Registrate para que puedas ayudar al planeta y obtener beneficios en el camino</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 py-5 border">
                        <h4 className="pb-4">Llena los siguientes datos</h4>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <input id="Nombre" name="Nombre" placeholder="Nombre Completo" className="form-control" type="text" required="required" ref={this.nombre} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Correo electronico" required="required" ref={this.email} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <input id="Telefono" name="Telefono" placeholder="Telefono" className="form-control" required="required" type="text" ref={this.telefono} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <input id="Contrasenia" name="Contrasenia" placeholder="Contraseña" className="form-control" required="required" type="password" ref={this.pass} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <img hidden className="profile-avatar" alt="" id="imgUsuario" />
                                    <br />
                                    <label htmlFor="Nueva">Haga click para insertar su foto</label>
                                    <input id="Nueva" type="file" accept="image/*" name="image" onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group col-md-6">
                                    <Button variant="primary" onClick={this.handleShow}>
                                        Haga click para enviar su ubicacion
                                    </Button>

                                    <Modal show={this.state.show} onHide={this.handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>INGRESAR UBICACION</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            PRESIONE EL MAPA PARA OBTENER UBICACION
                                            <div style={{ height: '300px', width: '100%', position: 'relative' }}>
                                                <Map google={this.props.google}
                                                    initialCenter={this.state.puntoInicial}
                                                    zoom={this.state.zoom}>
                                                </Map>
                                            </div>
                                            <div className="form-group">
                                                <fieldset>
                                                    <label className="control-label" htmlFor="readOnlyInput">Latitud</label>
                                                    <input className="form-control" id="readOnlyInput" type="text" placeholder="Ejm: -70.123412" readOnly />
                                                    <label className="control-label" htmlFor="readOnlyInput">Longitud</label>
                                                    <input className="form-control" id="readOnlyInput" type="text" placeholder="Ejm: -16.123412" readOnly />
                                                </fieldset>
                                            </div>
                                            <Button variant="primary" onClick={this.obtenerUbicacion}>
                                                CLICK PARA OBTENER UBICACION
                                            </Button>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={this.handleClose}>
                                                Close
                                        </Button>
                                            <Button variant="primary" onClick={this.handleClose}>
                                                Save Changes
                                        </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>
                            <br />
                            <div className="form-row">
                                <div className="form-group">
                                    <div className="form-group">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required="required" />
                                            <label className="form-check-label" htmlFor="invalidCheck2">
                                                <small>Haciendo click aceptas nuestro terminos y condiciones de uso de la App.</small>
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="form-row">
                                <button type="button" className="btn btn-danger" onClick={this.registrar}>Registrar</button>
                            </div>
                            <br />
                            O registrese usando:
                            <br />
                            <GoogleLogin
                                clientId="170262057332-nlcv43db8ok0d1d2g6vpicbv35vcnkss.apps.googleusercontent.com"
                                render={renderProps => (
                                    <button className="loginBtn loginBtn--google" onClick={renderProps.onClick} disabled={renderProps.disabled}>Registrar con Google</button>
                                )}
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                buttonText="Login"
                                cookiePolicy={'single_host_origin'}
                            />
                            <FacebookLogin
                                appId="2091403797648472"
                                autoLoad={true}
                                fields="name,email,picture"
                                callback={responseFacebook}
                                cssClass="loginBtn loginBtn--facebook"
                                textButton="Registrar con Facebook"
                                onClick={this.registrarFacebook}
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBcjhtE0FIFEO92Z_7xKQWODx3I_QXq33E')
})(Registrar)