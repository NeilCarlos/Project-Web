import React, { Component } from 'react';
import './MiPerfil.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class MiPerfil extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.handleShow2 = this.handleShow2.bind(this);
        this.handleClose2 = this.handleClose2.bind(this);

        this.state = {
            show: false,
            show2: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleClose2() {
        this.setState({ show2: false });
    }

    handleShow2() {
        this.setState({ show2: true });
    }
    render() {
        return (
            <div className="container bootstrap snippets text-dark">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <div className="panel panel-default mt-5">
                                <div className="panel-body text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="img-circle profile-avatar" alt="User avatar" />
                                    <br />
                                    <label htmlFor="Nueva">Haga click para cambiar su foto</label>
                                    <input type="file" id="Nueva" name="Nueva" required="required" />
                                </div>
                            </div>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Editar Informacion</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Cambiar ubicacion</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Cambiar contraseña</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <form className="form-horizontal mt-5">

                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h2>Informacion de usuario</h2>
                                            </div>
                                            <div className="panel-body">
                                                <div className="form-group">
                                                    <label className="col-sm-3 control-label">Nombre</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control" value="Cesar Mauricio" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-3 control-label">Correo electronico</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control" value="micorre@gmail.com" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-sm-3 control-label">Telefono</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control" value="987654321" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <br />
                                    <button className="btn btn-primary mb-5">Guardar Cambios</button>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <h2 className="mt-5">CAMBIAR UBICACION</h2>
                                    <img className="mapa" src="https://fotos.e-consulta.com/maps2.jpg"></img>
                                    <div class="form-group">
                                        <fieldset>
                                            <label className="control-label" for="readOnlyInput">Latitud</label>
                                            <input className="form-control" id="readOnlyInput" type="text" value="-70.123412" readonly="" />
                                            <label className="control-label" for="readOnlyInput">Longitud</label>
                                            <input className="form-control" id="readOnlyInput" type="text" value="-16.123412" readonly="" />
                                        </fieldset>
                                    </div>
                                    <br />
                                    <button className="btn btn-primary mb-5">Guardar Cambios</button>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <h2 className="mt-5">Cambiar contraseña</h2>
                                    <div className="form-group">
                                        <label className="control-label">Actual contraseña</label>
                                        <div className="col-sm-10">
                                            <input type="password" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">Nueva contraseña</label>
                                        <div className="col-sm-10">
                                            <input type="password" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">Confirmar contraseña</label>
                                        <div className="col-sm-10">
                                            <input type="password" className="form-control" />
                                        </div>
                                    </div>
                                    <br />
                                    <button className="btn btn-primary mb-5">Guardar Cambios</button>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    }
}
