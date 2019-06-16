import React, { Component } from 'react'
import Carrusel from './Carrusel';
import Mapa from '../mapa/Mapa';

import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
//import Form from 'react-bootstrap/Form'


//import './Reciclar.css';

export default class Reciclar extends Component {
    publi_lat;
    publi_lng;
    publi_estado;
    publi_fecha;
    usu_id;
    publi_tiempo_oferta;
    publi_cant;
    publi_descripcion;
    catpro_id;
    fot_img;

    constructor(props) {
        super(props)
        
    }


    handleInputChange = (event) => {
        var image = event.target.files[0];
        var pattern = /image-*/;
        //var reader = new FileReader();
        if (!image.type.match(pattern)) {
            console.error('File is not an image');
            return;
        }
        this.fot_img = image;
        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('imgReciclado').setAttribute('src', e.target.result);
        }
        reader.readAsDataURL(image);
        //readURL(event);
    }

    obtenerCoord = (dataMapa) => {
        this.publi_lat = '' + dataMapa.lat;
        this.publi_lng = '' + dataMapa.lng;
        console.log(this.publi_tiempo_oferta);
    }

    readURL = (input) => {
        if (input.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('imgReciclado').setAttribute('src', e.target.result);
            }
            reader.readAsDataURL(input.target.files[0]);
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

    }

    onChangeEstado = (e) => {
        this.publi_estado = e.currentTarget.value;
    }

    onChangeTiempoOferta = (e)=>{
        this.publi_tiempo_oferta = e.target.value;
    }

    onChangeCant = (e) => {
        this.publi_cant = e.target.value;
    }

    onChangeDescripcion = (e) => {
        this.publi_descripcion = e.target.value;
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
            <React.Fragment>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>

                    <Container>
                        <Row>
                            <Col>

                                <div className="card text-white bg-danger mb-3" style={estilo.card}>
                                    <div className="card-header">Reciclar</div>
                                    <div className="card-body">
                                        <h4 className="card-title">Publica tu Reciclaje</h4>

                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <label htmlFor="inTiempoVigencia" className="col-form-label">Tiempo Vigencia</label>
                                                <select className="custom-select" id="inTiempoVigencia" onChange={this.onChangeTiempoOferta}>
                                                    <option >Selecciona aqui</option>
                                                    <option value="1 semana">1 semana</option>
                                                    <option value="2 semanas">2 semanas</option>
                                                    <option value="1 mes">1 mes</option>
                                                    <option value="2 meses">2 meses</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="inEstado" className="col-form-label">Estado</label>
                                                <div className="form-check">
                                                    <label className="form-check-label mr-5">
                                                        <input name="optionsRadios" className="form-check-input" id="optionsRadios1" type="radio" defaultChecked value="1" 
                                                            onChange={this.onChangeEstado}/>
                                                        Activo
                                                    </label>
                                                    <label className="form-check-label">
                                                        <input name="optionsRadios" className="form-check-input" id="optionsRadios2" type="radio" value="0"
                                                            onChange={this.onChangeEstado} />
                                                        No Activo
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

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
                                                            <input type="text" className="form-control" placeholder="Ejem.: Envases de vidrio" id="inDescripcion" 
                                                                onChange={this.onChangeDescripcion}/>

                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <label htmlFor="inCantidad" className="col-form-label">Cantidad</label>
                                                                    <input type="number" className="form-control" placeholder="Ejem.: 20" id="inCantidad" 
                                                                        onChange={this.onChangeCant}/>
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

                            </Col>

                        </Row>

                        <Row>
                            <Col style={{ height: 450 }}>
                                <Mapa enviarCoord={this.obtenerCoord} />
                            </Col>
                        </Row>



                        <Row style={{ marginTop: 25 }}>
                            <Col>
                                <button className="btn btn-primary" type="button">Reciclar</button>
                                <button className="btn btn-danger" type="button">Cancelar</button>
                            </Col>
                        </Row>
                    </Container>



                </form>
            </React.Fragment>

        )
    }
}
