import React, { Component } from 'react'
import Carrusel from './Carrusel';
import Mapa from '../mapa/Mapa';

import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

//import './Reciclar.css';


export default class Reciclar extends Component {
    objReciclaje = {
        publi_lat: '',
        publi_lng: '',
        publi_estado: 'p',
        publi_fecha: '',
        usu_id: '',
        publi_tiempo_oferta: '',
        publi_cant: '',
        publi_descripcion: '',
        catpro_id: '',
        foto_img: '',
        publi_preciobase: ''
    }


    constructor(props) {
        super(props)
        this.state = {
            nombreCategoria: ''
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
        let usuario = JSON.parse(localStorage.getItem('usuario-ecollect'));
        e.preventDefault();
        // Falta completar estos campos
        this.objReciclaje.publi_fecha = new Date();
        this.objReciclaje.usu_id = usuario.id;
        
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
                    
                onChangeTiempoOferta = (e)=>{
        this.objReciclaje.publi_tiempo_oferta = e.target.value;
    }
                    
                onChangeCant = (e) => {
        this.objReciclaje.publi_cant = e.target.value;
    }
                    
                onChangePrecioBase = (e) => {
        this.objReciclaje.publi_preciobase = e.target.value;
    }
                    
                        Descripcion = (e) => {
                    this.objReciclaje.publi_descripcion = e.target.value;
                      
                
    getNombreCategoria = (nombre, id) => {
        this.setState({
            nombreCategoria: nombre,
                    });
                        .objReciclaje.catpro_id=id;
                            
                            
                            
                         {
                        t estilo = {
                            : {
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
                // overflow Y:'scroll'
                        

                            
                                
                                    
            <React.Fragment>
                                         autoComplete="off" onSubmit={this.handleSubmit}>
                                            
                                            
                                                
                            <Col>
                                                
                                                    me="card text-white bg-danger mb-3" style={estilo.card}>
                                                        me="card-header">Reciclar</div>
                                                        me="card-body">
                                                            e="card-title">Publica tu Reciclaje</h4>
                                                            
                                                            me="row mb-3">
                                                            ssName="col-md-6">
                                                            el htmlFor="inTiempoVigencia" className="col-form-label">Tiempo Vigencia</label>
                                                        <select className="custom-select" id="inTiempoVigencia" onChange={this.onChangeTiempoOferta} required >
                                                            <option >Selecciona aqui</option>
                                                            <option value="1 semana">1 semana</option>
                                                            <option value="2 semanas">2 semanas</option>
                                                            <option value="1 mes">1 mes</option>
                                                            <option value="2 meses">2 meses</option>
                                                                >
                                                                     
                                                                me="col-md-6">
                                                <label htmlFor="inEstado" className="col-form-label">Estado</label>
                                                             className="form-check">
                                                                el className="form-check-label mr-5">
                                                                    ut name="optionsRadios" className="form-check-input" id="optionsRadios1" type="radio" defaultChecked value="1" 
                                                                    onChange={this.onChangeEstado}/>
                                                        Activo
                                                            </label>
                                                            <label className="form-check-label">
                                                                <input name="optionsRadios" className="form-check-input" id="optionsRadios2" type="radio" value="0"
                                                            onChange={this.onChangeEstado} />
                                                                No Activo
                                                            </label>
                                                        </div>
                                                            
                                                                
                                                                    
                                                                d="left-tabs-example" defaultActiveKey="first">
                                                                
                                                                    
                                                                 variant="pills" className="flex-column">
                                                                <Nav.Item>
                                                                    <Nav.Link eventKey="first">Categoria</Nav.Link>
                                                                </Nav.Item>
                                                                <Nav.Item>
                                                                    <Nav.Link eventKey="second">Producto</Nav.Link>
                                                                    v.Item>
                                                                v>
                                                                
                                                <Col sm={9}>
                                                                    tent>
                                                                    .Pane eventKey="first">
                                                                        rusel getNombreCategoria = {this.ge tNombreCategoria} />
                                                        </Tab.Pane>
                                                                    .Pane eventKey="second">
                                                                        
                                                                            tmlFor="inDescripcion" className="col-form-label">Descripcion</label>
                                                                            ype="text" className="form-control" placeholder="Ejem.: Envases de vidrio" id="inDescipcion" 
                                                                                ={this.onChangeDescripcion}/ >
                                                                        
                                                                         className="row">
                                                                             className="col-md-4">
                                                                            <label htmlFor="inCantidad" className="col-form-label">Cantidad</label>
                                                                                ut type="number" className="form-c ontrol" placeholder="Ejem.: 20" id="inCantidad" 
                                                                                onChange={this.onChangeCant}/>
                                                                        </div>
                                                                             className="col-md-4">
                                                                            <label htmlFor="inPrecioBase" className="col-form-label">Precio Base S/.</label>
                                                                                ut type="number" className="form-control" placeholder="5" id="inPrecioBase" 
                                                                                onChange={this.onChangePrecioBase}/>
                                                                                
                                                                             className="col-md-4">
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
                                        <li className="breadcrumb-item active">{this.state.nombreCategoria}</li>
                                            </ol>

                                        </div>
                                    
                                        l>
                                    
                                </Row>

                        <Row>
                            <Col style={{ height: 450 }}>
                                        <Mapa enviarCoord={this.obtenerCoord} />
                                    </Col>
                                        
                                        
                                    
                                
                                <Row style={{ marginTop: 25 }}>
                            <Col>
                                <button type="submit" className="btn btn-primary">Reciclar</button>
                                <button className="btn btn-danger" type="button">Cancelar</button>
                                    </Col>
                        </Ro w>
                    </Container>



                </form>
            </React.Fragment>

        )
    }
}
