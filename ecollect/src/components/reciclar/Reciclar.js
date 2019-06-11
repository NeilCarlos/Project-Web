import React, { Component } from 'react'
import Carrusel from './Carrusel';
import Mapa from '../mapa/Mapa';

import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


//import './Reciclar.css';

export default class Reciclar extends Component {


    handleInputChange(event) {
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
            document.getElementById('imgReciclado').setAttribute('src', e.target.result);
        }
        reader.readAsDataURL(image);
        //readURL(event);
    }

    readURL(input) {
        if (input.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('imgReciclado').setAttribute('src', e.target.result);
            }
            reader.readAsDataURL(input.target.files[0]);
        }
    }


    render() {
        const estilo = {
            card: {
                width: '100%',
                //height: '50rem',
                //position: 'absolute'
            },
            img: {
                height: '65%',
                width: '80%',
                //position: 'absolute'

            },
            tabs: {
                width: '100%',
                height: '100%',
                //position: 'absolute'
                // overflowY:'scroll'
            }

        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">





                        <div className="card text-white bg-danger mb-3" style={estilo.card}>
                            <div className="card-header">Reciclar</div>
                            <div className="card-body">
                                <h4 className="card-title">Publica tu Reciclaje</h4>




                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="inTiempoVigencia" className="col-form-label">Tiempo Vigencia</label>
                                        <select className="custom-select" id="inTiempoVigencia">
                                            <option >Selecciona aqui</option>
                                            <option value="1">3 dias</option>
                                            <option value="2">6 dias</option>
                                            <option value="3">1 semana</option>
                                            <option value="4">3 semanas</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inEstado" className="col-form-label">Estado</label>
                                        <div className="form-check">
                                            <label className="form-check-label mr-5">
                                                <input name="optionsRadios" className="form-check-input" id="optionsRadios1" type="radio" defaultChecked value="option1" />
                                                Activo
                                            </label>
                                            <label className="form-check-label">
                                                <input name="optionsRadios" className="form-check-input" id="optionsRadios2" type="radio" value="option2" />
                                                No Activo
                                            </label>
                                        </div>
                                    </div>
                                </div>





                                {/* <ul className="nav nav-tabs bg-info">
                                    <li className="nav-item" id="tabCategoria">
                                        <a className="nav-link active" href="#categoria" data-toggle="tab">Categoria</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#producto" data-toggle="tab">Producto</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent" style={estilo.tabs}>
                                    <div className="tab-pane fade active show p-2" id="categoria">

                                        <Carrusel />

                                    </div>

                                    <div className="tab-pane fade bg-warning p-2" id="producto">

                                        <label htmlFor="inDescripcion" className="col-form-label">Descripcion</label>
                                        <input type="text" className="form-control" placeholder="Ejem.: Envases de vidrio" id="inDescripcion" />

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label htmlFor="inCantidad" className="col-form-label">Cantidad</label>
                                                <input type="number" className="form-control" placeholder="Ejem.: 20" id="inCantidad" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="inDeseo" className="col-form-label">Deseo</label>
                                                <select class="custom-select">
                                                    <option selected="">Selecciona aqui</option>
                                                    <option value="1">Darlo</option>
                                                    <option value="2">Venderlo</option>
                                                </select>
                                            </div>
                                        </div>
                                        <br />

                                        <img alt="" id="imgReciclado" style={estilo.img} />
                                        <br />
                                        <input type="file" accept="image/*" name="image" onChange={this.handleInputChange} />


                                    </div>

                                </div> */}


                                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <Row>
                                        <Col sm={3}>
                                            <Nav variant="pills" className="flex-column">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="first">Categoria</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second">Producto</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </Col>
                                        <Col sm={9}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="first">
                                                    <Carrusel />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="second">

                                                    <label htmlFor="inDescripcion" className="col-form-label">Descripcion</label>
                                                    <input type="text" className="form-control" placeholder="Ejem.: Envases de vidrio" id="inDescripcion" />

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label htmlFor="inCantidad" className="col-form-label">Cantidad</label>
                                                            <input type="number" className="form-control" placeholder="Ejem.: 20" id="inCantidad" />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label htmlFor="inDeseo" className="col-form-label">Deseo</label>
                                                            <select className="custom-select">
                                                                <option >Selecciona aqui</option>
                                                                <option value="1">Darlo</option>
                                                                <option value="2">Venderlo</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <br />

                                                    <img alt="" id="imgReciclado" style={estilo.img} />
                                                    <br />
                                                    <input type="file" accept="image/*" name="image" onChange={this.handleInputChange} />

                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>




                            </div>

                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#categoria">Categoria</a></li>
                                <li className="breadcrumb-item active">Vidrio</li>
                            </ol>


                        </div>


                        <br />

                        <Mapa />

                        <br />



                    </div>

                </div>

                <div className="row m-3 text-right">
                    <div className="col-md-12">
                        <button className="btn btn-primary" type="button">Reciclar</button>
                        <button className="btn btn-danger" type="button">Cancelar</button>
                    </div>
                </div>
            </div>


        )
    }
}
