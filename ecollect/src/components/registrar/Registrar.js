import React, { Component } from 'react'
import './Registrar.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class Registrar extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }
    render() {
        return (
            <div className="container">
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
                                    <input id="Nombre" name="Nombre" placeholder="Nombre Completo" className="form-control" type="text" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Correo electronico" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <input id="Telefono" name="Telefono" placeholder="Telefono" className="form-control" required="required" type="text" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <input id="Contrasenia" name="Contrasenia" placeholder="Contraseña" className="form-control" required="required" type="text" />
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
                                            <img className="mapa" src="https://fotos.e-consulta.com/maps2.jpg"></img>
                                            <div class="form-group">
                                                <fieldset>
                                                    <label class="control-label" for="readOnlyInput">Latitud</label>
                                                    <input class="form-control" id="readOnlyInput" type="text" placeholder="-70.123412" readonly="" />
                                                    <label class="control-label" for="readOnlyInput">Longitud</label>
                                                    <input class="form-control" id="readOnlyInput" type="text" placeholder="-16.123412" readonly="" />
                                                </fieldset>
                                            </div>
                                            <Button variant="primary" onClick={this.handleClose}>
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
                                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                            <label className="form-check-label" for="invalidCheck2">
                                                <small>Haciendo click aceptas nuestro terminos y condiciones de uso de la App.</small>
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="form-row">
                                <button type="button" className="btn btn-danger">Registrar</button>
                            </div>

                            <button class="loginBtn loginBtn--facebook">
                                Registrar con Facebook
                            </button>

                            <button class="loginBtn loginBtn--google">
                                Registrar con Google
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
