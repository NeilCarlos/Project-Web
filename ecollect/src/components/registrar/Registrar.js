import React, { Component } from 'react'
import './Registrar.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Mapa from '../mapa/Mapa';

export default class Registrar extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
        this.nombre = React.createRef();
        this.email = React.createRef();
        this.telefono = React.createRef();
        this.pass = React.createRef();
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    obtenerUbicacion = () => {

    }

    registrar = () => {
        let objRegistro = {
            usu_nombre: this.nombre.current.value,
            usu_email: this.email.current.value,
            usu_telefono: this.telefono.current.value,
            usu_pass: this.pass.current.value,
            usu_estado: "a",
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
                };
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
                                    <label htmlFor="Foto">Haga click para insertar su foto</label>
                                    <input type="file" id="Foto" name="Foto" required="required" />
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
                                            <div
                                                style={{
                                                    height: 300,
                                                    width: '100%',
                                                    padding: 0,
                                                    marginLeft: 0,
                                                    position: "relative",
                                                }}
                                            >
                                                <Mapa />
                                            </div>
                                            <div className="form-group">
                                                <fieldset>
                                                    <label className="control-label" for="readOnlyInput">Latitud</label>
                                                    <input className="form-control" id="readOnlyInput" type="text" placeholder="Ejm: -70.123412" readOnly />
                                                    <label className="control-label" for="readOnlyInput">Longitud</label>
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
                                            <label className="form-check-label" for="invalidCheck2">
                                                <small>Haciendo click aceptas nuestro terminos y condiciones de uso de la App.</small>
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="form-row">
                                <button type="button" className="btn btn-danger" onClick={this.registrar}>Registrar</button>
                            </div>

                            <button className="loginBtn loginBtn--facebook">
                                Registrar con Facebook
                            </button>

                            <button className="loginBtn loginBtn--google">
                                Registrar con Google
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
