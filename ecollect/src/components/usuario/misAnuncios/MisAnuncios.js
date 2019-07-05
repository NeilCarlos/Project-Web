import React, { Component } from 'react'
import Todos from './todos/Todos';
import Activos from './activos/Activos';
import Pendientes from './pendientes/Pendientes';
import Caducados from './caducados/Caducados';

export default class MisAnuncios extends Component {

    constructor(props) {
        super(props);
        this.state = {
            publicaciones: [],
            cargado: false

        }

        this.inputSearch = React.createRef();
        
    }


    searchPublicationByName = (e)=>{
        e.preventDefault();
        console.log(this.inputSearch.current.value);
        

        fetch(`https://backend-ecollect.herokuapp.com/api/publicacion/buscarByNombre/${this.inputSearch.current.value}/p`).then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data.content);
                this.setState({
                    publicaciones: data.content,
                    cargado: true,
                });
    
            });

    }
    
    render() {
        return (
            <React.Fragment>
                {/* <div>
                    Holy, I'm mis Anuncios.

                </div> */}



                <ul className="nav nav-tabs">

                    <form className="form-inline my-2 my-lg-0">
                        <input ref={this.inputSearch} className="form-control mr-sm-2" type="search" placeholder="Search" />
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit" onClick={this.searchPublicationByName}>Search</button>
                    </form>
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#todos">Activos</a>

                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#activos">Activos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#pendientes">Pendientes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#caducados">Caducados</a>
                    </li> */}

                </ul>

                <div id="myTabContent" className="tab-content">
                    <div className="tab-pane fade show active" id="todos">
                        <Todos  history={this.props.history} searchAnuncios = {this.state.publicaciones} cargadoS = {this.state.cargado}/>
                    </div>
                    {/* <div className="tab-pane fade" id="activos">
                        <Activos />
                    </div>
                    <div className="tab-pane fade" id="pendientes">
                        <Pendientes />
                    </div>
                    <div className="tab-pane fade" id="caducados">
                        <Caducados />
                    </div> */}
                </div>
            </React.Fragment>
        )
    }
}
