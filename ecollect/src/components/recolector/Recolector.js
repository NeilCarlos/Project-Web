import React, { Component } from 'react'

import './Recolector.css';

var moment = require('moment')

export default class Recolector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorias: [],
      loadCategorias: false,
      publicaciones: [],
      loadPublicaciones: false
    }
    this.selectorCategorias = React.createRef();
    this.inputBusqueda=React.createRef();

  }
  componentDidMount() {

    // Obteniendo Categorias    
    fetch('https://backend-ecollect.herokuapp.com/api/categoria').then((respuesta) => {
      return respuesta.json();
    }).then((data) => {
      if (data.content.length > 0) {
        this.setState({
          loadCategorias: true,
          categorias: data.content
        });
      }

    });
    // Obteniendo Las publicaciones
    fetch(`https://backend-ecollect.herokuapp.com/api/publicacion/${'p'} `).then((respuesta) => {
      // fetch(`http://localhost:3700/api/publicacion/${'p'} `).then((respuesta) => {
      return respuesta.json();
    }).then((data) => {
      if (data.content.length > 0) {
        this.setState({
          publicaciones: data.content,
          loadPublicaciones: true
        });
      }
    });
  }
  
  // Mostrar Fecha
  CalcularFechaPublicacion=(fecha)=>{
    let fecha1 = moment(fecha);
    let hoy = moment(new Date());
    let diferencia= hoy.diff(fecha1,'day')
    if (diferencia>0){
      return `Hace ${diferencia} dias.`;  
    }else{
      let diferencia= hoy.diff(fecha1,'hours')
      if(diferencia>0){
        return `Hace ${diferencia} horas.`;  
      }else{
        return `Hace unos minutos.`;  
      }
    }
    // console.log(hoy.diff(fecha1,'day'));
    // console.log(React.key);
    

    // return hoy.diff(fecha1,'day');
  }
  GenerarKey=()=>{

  }
  BuscarPublicacionCategoria=()=>{

  }
  BuscarPublicacionNombre=()=>{
    console.log(this.inputBusqueda.current.value);
    
    fetch(`https://backend-ecollect.herokuapp.com/api/publicacion/buscarByNombre/${this.inputBusqueda.current.value}/p`).then((respuesta)=>{
      return respuesta.json();
    }).then((data)=>{
      if(data){
        this.setState({
          publicaciones:data.content
        })
        // console.log(data.content);       
      }      
    });
  }

  // TraerImagen=(publi_id)=>{
  //   fetch(`https://backend-ecollect.herokuapp.com/api/publicacion/fotos/${publi_id}`).then((respuesta)=>{
  //     return respuesta.json();
  //   }).then((data)=>{
  //     if(data){
  //       console.log(data.content[0].fot_img); 
  //       let imagen=new Image();
  //         imagen.src=data.content[0].fot_img;
  //       return (data.content[0].fot_img)
  //     }
  //     else{
  //       return(<img src="https://www.sctech.edu/wp-content/plugins/ajax-search-pro/img/default.jpg" alt="" />)
  //     }
  //   });
    
  // }
  render() {

    if (this.state.loadCategorias && this.state.loadPublicaciones) {
      return (
        <div className="contenedor-recolector container-fluid">
          <div class="row justify-content-center header-recolector">
            {/* dropdownlist categorias */}
            <div class="col-4 col-md-3 col-lg-2">
              <select ref={this.selectorCategorias} class=" form-control form-control-lg form-control-borderless">
              <option value='0'>Elija una Categoria</option>
                {
                  this.state.categorias.map(elem => {
                    return (<option value={elem.catprod_id}>{elem.catprod_nombre}</option>)
                  })
                }
              </select>
            </div>
            {/* Barra de busqueda */}
            <div class="col-8 col-md-7 col-lg-6">
              <div class="card-body row no-gutters align-items-center ">
                <div class="col-auto">
                  <i class="fas fa-search h4 text-body mr-2"></i>
                </div>
                <div class="col">
                  <input ref={this.inputBusqueda} class="form-control form-control-lg form-control-borderless"  type="search" placeholder="Busqueda" />
                </div>
                <div class="col-auto">
                  <button class="btn btn-lg btn-success ml-2" type="submit" onClick={this.BuscarPublicacionNombre}>Buscar</button>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-1" />


          <div className="contenedorcards">
            {/* cards1 */}
            {
              this.state.publicaciones.map(publi => {
                // console.log(publi);                
                // let imagen;
                // imagen=this.TraerImagen(publi.publi_id)
                return (
                  <div class="card" key={publi.publi_id}>                                        
                    {/* <img src="https://www.sctech.edu/wp-content/plugins/ajax-search-pro/img/default.jpg" alt="" /> */}
                    <img src={publi.t_fotos[0].fot_img} alt="" />
                    <div class="card-footer text-muted" >
                      {/* <h5 className="text-dark">Titulo de la Publicación..</h5> */}
                      <div className="footer-precio" >
                        <h4 className="mt-2 mb-2" >S/. {publi.publi_preciobase}</h4>
                      </div>
                      <div className="flex-card-footer">
                        <span >{this.CalcularFechaPublicacion(publi.publi_fecha)}</span>
                        <button className="btn btn-primary">Ofertar</button>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
          <hr class="my-4" />

          {/* Paginador Inferior */}
          <nav aria-label="Page navigation example">
            <ul class="pagination pagination-lg justify-content-center">
              <li class="page-item">
                <button class="page-link" tabIndex="-1" aria-disabled="true">Anterior</button>
              </li>
              <li class="page-item"><button class="page-link" >1</button></li>
              <li class="page-item"><button class="page-link" >2</button></li>
              <li class="page-item"><button class="page-link" >3</button></li>
              <li class="page-item"><button class="page-link" >4</button></li>
              <li class="page-item"><button class="page-link" >5</button></li>
              <li class="page-item"><button class="page-link" >6</button></li>
              <li class="page-item"><button class="page-link" >7</button></li>
              <li class="page-item"><button class="page-link" >8</button></li>
              <li class="page-item">
                <button class="page-link" >Siguiente</button>
              </li>
            </ul>
          </nav>

        </div>
      )
    } else {
      return (<div>Cargando...</div>)
    }

  }
}
