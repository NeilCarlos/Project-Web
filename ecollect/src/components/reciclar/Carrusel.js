import React, { Component } from 'react'
import CarruselItem from './CarruselItem';

export default class Carrusel extends Component {

    componentDidMount(){
        fetch('https://picsum.photos/v2/list').then(response=>{
            return response.json();
        }).then(data=>{
            console.log(data);
            
        })
    }

    
    render() {
        return (
            <div className="container" >
                <div className="carousel slide" id="miCarousel" data-ride="carousel">
                    {/* <!--indicadores--> */}
                    <ol className="carousel-indicators">
                        <li data-target="#miCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#miCarousel" data-slide-to="1"></li>
                        <li data-target="#miCarousel" data-slide-to="2"></li>
                    </ol>

                    {/* <!--panel--> */}
                    <div className="carousel-inner">
                        <div className="carousel-item active text-center">
                            <img src="http://placehold.it/500x400/" alt="" />
                            <div className="carousel-caption text-dark">
                                <h4>Titulo de la imagen 1</h4>
                                <p>Descripcion de la imagen</p>
                            </div>
                        </div>
                        <CarruselItem />
                        <CarruselItem />
                    </div>

                    {/* <!--botones de navegacion--> */}
                    <a href="#miCarousel" className="carousel-control-prev" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a href="#miCarousel" className="carousel-control-next" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>

                </div>
            </div>
        )
    }

}
