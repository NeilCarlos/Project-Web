import React, { Component } from 'react'

import './Recolector.css';
export default class Recolector extends Component {
  constructor(props) {
    super(props);
    this.state={
      categorias:[],
      loadCategorias:false
      
    }
    
  }
  componentDidMount(){

    // Obteniendo Categorias    
    fetch('https://backend-ecollect.herokuapp.com/api/categoria').then((respuesta)=>{
      return respuesta.json();
    }).then((data)=>{
      console.log(data);    
      this.setState({
        loadCategorias:true
      });  
    });

  }



  render() {
    return (
      <div className="contenedor-recolector container-fluid">
        <div class="row justify-content-center header-recolector">
          {/* dropdownlist categorias */}
          <div class="col-4 col-md-3 col-lg-2">
            <select class=" form-control form-control-lg form-control-borderless">
              
              
              
            </select>
          </div>
          {/* Barra de busqueda */}
          <div class="col-8 col-md-7 col-lg-6">
            <div class="card-body row no-gutters align-items-center ">
              <div class="col-auto">
                <i class="fas fa-search h4 text-body mr-2"></i>
              </div>
              <div class="col">
                <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Busqueda" />
              </div>
              <div class="col-auto">
                <button class="btn btn-lg btn-success ml-2" type="submit">Buscar</button>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-1" />


        <div className="contenedorcards">
          {/* card 1 */}
          <div class="card">
            <img src="http://ecovale.com.mx/wp-content/uploads/2014/05/simbologia-reciclar-plasticos-xl-668x400x80xX-540x400c.jpg" alt="" />
            <div class="card-footer text-muted">
              <h5 className="text-dark">Titulo de la Publicación..</h5>
              <div className="footer-precio">
                <h4 className="mt-2 mb-2">S/. 145.60</h4>
              </div>
              <div className="flex-card-footer">
                <span>Publicado hace 2 dias.</span>
                <button className="btn btn-primary">Ofertar</button>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div class="card">
            <img src="https://1.bp.blogspot.com/-k1qSgK61eNg/U7EIWg1gYAI/AAAAAAAAACc/CMEk5e5gRK0/s1600/botellas-copia-226x300.jpg" alt="" />
            <div class="card-footer text-muted">
              <h5 className="text-dark">Titulo de la Publicación..</h5>
              <div className="footer-precio">
                <h4 className="mt-2 mb-2">S/. 145.60</h4>
              </div>
              <div className="flex-card-footer">
                <span>Publicado hace 2 dias.</span>
                <button className="btn btn-primary">Ofertar</button>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div class="card">
            <img src="http://ecovale.com.mx/wp-content/uploads/2014/05/simbologia-reciclar-plasticos-xl-668x400x80xX-540x400c.jpg" alt="" />
            <div class="card-footer text-muted">
              <h5 className="text-dark">Titulo de la Publicación..</h5>
              <div className="footer-precio">
                <h4 className="mt-2 mb-2">S/. 145.60</h4>
              </div>
              <div className="flex-card-footer">
                <span>Publicado hace 2 dias.</span>
                <button className="btn btn-primary">Ofertar</button>
              </div>
            </div>
          </div>

          {/* card 4 */}
          <div class="card">
            <img src="http://ecovale.com.mx/wp-content/uploads/2014/05/simbologia-reciclar-plasticos-xl-668x400x80xX-540x400c.jpg" alt="" />
            <div class="card-footer text-muted">
              <h5 className="text-dark">Titulo de la Publicación..</h5>
              <div className="footer-precio">
                <h4 className="mt-2 mb-2">S/. 145.60</h4>
              </div>
              <div className="flex-card-footer">
                <span>Publicado hace 2 dias.</span>
                <button className="btn btn-primary">Ofertar</button>
              </div>
            </div>
          </div>
          {/* card 5 */}
          <div class="card">
            <img src="http://ecovale.com.mx/wp-content/uploads/2014/05/simbologia-reciclar-plasticos-xl-668x400x80xX-540x400c.jpg" alt="" />
            <div class="card-footer text-muted">
              <h5 className="text-dark">Titulo de la Publicación..</h5>
              <div className="footer-precio">
                <h4 className="mt-2 mb-2">S/. 145.60</h4>
              </div>
              <div className="flex-card-footer">
                <span>Publicado hace 2 dias.</span>
                <button className="btn btn-primary">Ofertar</button>
              </div>
            </div>
          </div>

          {/* card 6 */}
          <div class="card">
            <img src="http://ecovale.com.mx/wp-content/uploads/2014/05/simbologia-reciclar-plasticos-xl-668x400x80xX-540x400c.jpg" alt="" />
            <div class="card-footer text-muted">
              <h5 className="text-dark">Titulo de la Publicación..</h5>
              <div className="footer-precio">
                <h4 className="mt-2 mb-2">S/. 145.60</h4>
              </div>
              <div className="flex-card-footer">
                <span>Publicado hace 2 dias.</span>
                <button className="btn btn-primary">Ofertar</button>
              </div>
            </div>
          </div>
          {/* card 7 */}
          <div class="card">
            <img src="http://ecovale.com.mx/wp-content/uploads/2014/05/simbologia-reciclar-plasticos-xl-668x400x80xX-540x400c.jpg" alt="" />
            <div class="card-footer text-muted">
              <h5 className="text-dark">Titulo de la Publicación..</h5>
              <div className="footer-precio">
                <h4 className="mt-2 mb-2">S/. 145.60</h4>
              </div>
              <div className="flex-card-footer">
                <span>Publicado hace 2 dias.</span>
                <button className="btn btn-primary">Ofertar</button>
              </div>
            </div>
          </div>
          {/* card 8 */}
          <div class="card">
            <img src="http://ecovale.com.mx/wp-content/uploads/2014/05/simbologia-reciclar-plasticos-xl-668x400x80xX-540x400c.jpg" alt="" />
            <div class="card-footer text-muted">
              <h5 className="text-dark">Titulo de la Publicación..</h5>
              <div className="footer-precio">
                <h4 className="mt-2 mb-2">S/. 145.60</h4>
              </div>
              <div className="flex-card-footer">
                <span>Publicado hace 2 dias.</span>
                <button className="btn btn-primary">Ofertar</button>
              </div>
            </div>
          </div>

        </div>
        <hr class="my-4" />



        
        {/* Paginador Inferior */}
        <nav aria-label="Page navigation example">
          <ul class="pagination pagination-lg justify-content-center">
            <li class="page-item">
              <button class="page-link"  tabindex="-1" aria-disabled="true">Anterior</button>
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
  }
}
