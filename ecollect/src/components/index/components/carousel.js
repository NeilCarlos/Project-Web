import React, { Component } from 'react';
import './../index.css'

export default class Carousel extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="impacto">
                    <h2 class="text-center font-dark f-weight font-sub">Nuestra aplicación tiene un gran impacto</h2>
                    <div id="carouselExampleIndicators" class="carousel slide c1-contenido " data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner ">
                            <div class="carousel-item  active ">
                                <div class="container c1-cont ">
                                    <div class=" row ">
                                        <div class=" col-md-6 justify-content-center ">
                                            <div class="carousel-img"></div>
                                        </div>
                                        <div class=" col-md-6 justify-content-center ">
                                            {/* CONTENIDO 1 */}
                                            <h1>Qué es Ecolet?</h1>
                                            <p>Lorem ....</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item ">
                                <div class="container c1-cont">
                                    <div class="row ">
                                        <div class=" col-md-6 justify-content-center ">
                                            <div className="carousel-img"></div>
                                        </div>
                                        <div class=" col-md-6 justify-content-center ">
                                            {/* CONTENIDO 2 */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item ">
                                <div class="container c1-cont">

                                    <div class="row ">
                                        <div class=" col-md-6 justify-content-center ">
                                            <div className="carousel-img"></div>
                                        </div>
                                        <div class=" col-md-6 justify-content-center ">
                                            {/* CONTENIDO 3 */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>

                </div>

            </React.Fragment>
        )
    }
}
