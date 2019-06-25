import React, { Component } from 'react'

import Mapa from '../mapa/Mapa';

// Bootstrap react
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
import Modal from 'react-bootstrap/Modal'
// Material UI
import Avatar from '@material-ui/core/Avatar';

export default class Publicacion extends Component {
    objReciclaje = {
        publi_lat: '',
        publi_lng: '',
        publi_estado: '',
        publi_fecha: '',
        usu_id: '',
        publi_tiempo_oferta: '',
        publi_cant: '',
        publi_descripcion: '',
        catpro_id: '',
        foto_img: ''
    }
    constructor(props) {
        super(props)
        console.log(props.match.params.publi_id);
        this.state = {
            showModalMapa: false
        }
    }
    handleInputChange = (event) => {
        var sImagen;
        var image = event.target.files[0];
        var pattern = /image-*/;
        //var reader = new FileReader();
        if (!image.type.match(pattern)) {
            console.error('File is not an image');
            return;
        }
        var reader = new FileReader();
        reader.onload = (e) => {
            document.getElementById('imgReciclado').setAttribute('src', e.target.result);
            sImagen = e.target.result;
            this.objReciclaje.foto_img = sImagen;
        }
        reader.readAsDataURL(image);
    }
    obtenerCoord = (dataMapa) => {
        this.objReciclaje.publi_lat = '' + dataMapa.lat;
        this.objReciclaje.publi_lng = '' + dataMapa.lng;
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // Falta completar estos campos
        this.objReciclaje.publi_fecha = new Date();
        this.objReciclaje.catpro_id = 15;
        this.objReciclaje.usu_id = 1;
        // 

        var myHeaders = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.objReciclaje)
        }
        console.log(this.objReciclaje);
        fetch('https://backend-ecollect.herokuapp.com/api/publicacion', myHeaders)
            .then(response => { return response.json(); })
            .then(data => {
                console.log(data);
            })
    }
    onChangeEstado = (e) => {
        this.objReciclaje.publi_estado = e.currentTarget.value;
    }
    onChangeTiempoOferta = (e) => {
        this.objReciclaje.publi_tiempo_oferta = e.target.value;
    }
    onChangeCant = (e) => {
        this.objReciclaje.publi_cant = e.target.value;
    }
    onChangeDescripcion = (e) => {
        this.objReciclaje.publi_descripcion = e.target.value;
    }
    render() {
        return (
            <React.Fragment>
                {/* Card */}
                <div style={{ display: 'flex', flexDirection: 'row' }}>

                    <Card style={{ width: '60rem' }}>
                        <Card.Header style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <label style={{ fontWeight: 'bold', marginTop: 5 }}><Button onClick={()=>{this.props.history.push("/publicaciones")  }} variant="outline-info">{"< "}</Button> Publicado por : </label>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Avatar style={{ marginLeft: 10, marginRight: 5 }}>M</Avatar>
                                <label style={{ marginTop: 5 }}>Magno I. Taipe Charca</label>
                            </div>
                        </Card.Header>
                        <Image src="https://s6.eestatic.com/2018/09/17/actualidad/Actualidad_338727027_97484678_1024x576.jpg" fluid />

                        <ListGroup.Item style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            {/* Fecha */}
                            <div >
                                <label style={{ fontWeight: 'bold', marginTop: 2 }}>Fecha : </label>
                                <label style={{ marginLeft: 5 }}> 16/06/2019 10:20:15</label>
                            </div>
                            {/* Precio */}
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <label style={{ fontWeight: 'bold', marginTop: 5 }}>Valor : </label>
                                <h3><label style={{ marginLeft: 10 }}>S/.{'158.00'}</label></h3>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <label style={{ fontWeight: 'bold', marginTop: 5 }}>Descripción : </label>
                                <label style={{ marginLeft: 30 }}>Magnificos articulos para reciclar, he reciclado por mucho tiempo y tengo desde botellas de plastico, botellas de vidrio, cajas de carton, cintas, papel blanco y de color. todo empaquedao listo para llevarselo.</label>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Button variant="primary">Anular Publicación</Button>
                                <Button variant="primary">Ofertar</Button>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <label style={{ fontWeight: 'bold' }}>Ubicación : </label>
                                    <label style={{ marginLeft: 30 }}>Miraflores, Arequipa, Peru</label>
                                </div>
                                <Button variant="outline-secondary" onClick={() => { this.setState({ showModalMapa: true }) }}>Ver Mapa</Button>
                            </div>
                        </ListGroup.Item>
                    </Card>
                    {/* Mapa */}
                    <div >
                        {/* Card de Ofertas */}
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Card style={{ width: '30rem', display: 'flex' }}>
                                <Card.Header>
                                    <label style={{ marginTop: 5 }}>OFERTAS</label>
                                </Card.Header>
                            </Card>
                            {/* Lista de Ofertas */}
                            <Card style={{ width: '30rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    {/* <label style={{ fontWeight: 'bold', margin: 10 }}>Publicado por : </label> */}
                                    <div style={{ display: 'flex', margin: 10, flexDirection: 'row', alignItems: 'center' }}>
                                        <Avatar style={{ margin: 10 }}>E</Avatar>
                                        <label style={{ marginTop: 5 }}>Ernesto Cuadros Miraval</label>
                                    </div>
                                    {/* Raiting */}
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <label style={{ fontWeight: 'bold', margin: 10 }}>Valoración </label>
                                        <h3 style={{marginRight:10}}>4.5</h3>
                                    </div>
                                </div>
                                <ListGroup.Item style={{display:'flex',justifyContent: 'space-between'}}>
                                    <div>
                                        <label style={{ fontWeight: 'bold', margin: 10 }}>Fecha </label>
                                        <label>19/06/2019 08:10:12</label>
                                    </div>
                                    <div>
                                        <label style={{ fontWeight: 'bold', margin: 10 }}>Monto</label>
                                        <label><h5>S/. {'31.00'}</h5></label>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item style={{display:'flex',justifyContent: 'space-between'}}>
                                <Button variant="primary">Aceptar Oferta</Button>
                                <Button variant="primary">Ver Oferta</Button>
                                </ListGroup.Item>
                            </Card>

                            <Card style={{ width: '30rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    {/* <label style={{ fontWeight: 'bold', margin: 10 }}>Publicado por : </label> */}
                                    <div style={{ display: 'flex', margin: 10, flexDirection: 'row', alignItems: 'center' }}>
                                        <Avatar style={{ margin: 10 }}>M</Avatar>
                                        <label style={{ marginTop: 5 }}>Magno I. Taipe Charca</label>
                                    </div>
                                    {/* Raiting */}
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <label style={{ fontWeight: 'bold', margin: 10 }}>Valoración </label>
                                        <h3 style={{marginRight:10}}>2.5</h3>
                                    </div>
                                </div>
                                <ListGroup.Item style={{display:'flex',justifyContent: 'space-between'}}>
                                    <div>
                                        <label style={{ fontWeight: 'bold', margin: 10 }}>Fecha </label>
                                        <label>18/06/2019 11:20:25</label>
                                    </div>
                                    <div>
                                        <label style={{ fontWeight: 'bold', margin: 10 }}>Monto</label>
                                        <label><h5>S/. {'30.50'}</h5></label>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item style={{display:'flex',justifyContent: 'space-between'}}>
                                <Button variant="primary">Aceptar Oferta</Button>
                                <Button variant="primary">Ver Oferta</Button>
                                </ListGroup.Item>
                            </Card>

                            <Card style={{ width: '30rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    {/* <label style={{ fontWeight: 'bold', margin: 10 }}>Publicado por : </label> */}
                                    <div style={{ display: 'flex', margin: 10, flexDirection: 'row', alignItems: 'center' }}>
                                        <Avatar style={{ margin: 10 }}>J</Avatar>
                                        <label style={{ marginTop: 5 }}>Juan Ramos Rivera</label>
                                    </div>
                                    {/* Raiting */}
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <label style={{ fontWeight: 'bold', margin: 10 }}>Valoración </label>
                                        <h3 style={{marginRight:10}}>1.8</h3>
                                    </div>
                                </div>
                                <ListGroup.Item style={{display:'flex',justifyContent: 'space-between'}}>
                                    <div>
                                        <label style={{ fontWeight: 'bold', margin: 10 }}>Fecha </label>
                                        <label>19/06/2019 10:20:25</label>
                                    </div>
                                    <div>
                                        <label style={{ fontWeight: 'bold', margin: 10 }}>Monto</label>
                                        <label><h5>S/. {'25.00'}</h5></label>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item style={{display:'flex',justifyContent: 'space-between'}}>
                                <Button variant="primary">Aceptar Oferta</Button>
                                <Button variant="primary">Ver Oferta</Button>
                                </ListGroup.Item>
                            </Card>

                        </div>

                    </div>

                </div>












                {/* Modal Para el Mapa */}
                <Modal
                    show={this.state.showModalMapa}
                    onHide={() => { this.setState({ showModalMapa: false }) }}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Ubicación
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ height: '30em' }}>
                        <Mapa style={{ transform: 'scale(0.9)' }} enviarCoord={this.obtenerCoord} />
                    </Modal.Body>
                </Modal>



                {/* <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>

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
                                                            onChange={this.onChangeEstado} />
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
                                                            
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="second">

                                                            <label htmlFor="inDescripcion" className="col-form-label">Descripcion</label>
                                                            <input type="text" className="form-control" placeholder="Ejem.: Envases de vidrio" id="inDescripcion"
                                                                onChange={this.onChangeDescripcion} />

                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <label htmlFor="inCantidad" className="col-form-label">Cantidad</label>
                                                                    <input type="number" className="form-control" placeholder="Ejem.: 20" id="inCantidad"
                                                                        onChange={this.onChangeCant} />
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
                                <button type="submit" className="btn btn-primary">Reciclar</button>
                                <button className="btn btn-danger" type="button">Cancelar</button>
                            </Col>
                        </Row>
                    </Container>
                </form> */}
            </React.Fragment>

        )
    }
}
