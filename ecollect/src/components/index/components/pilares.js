import React, { Component } from 'react';
import './../index.css'

export default class Pilares extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="container pilares text-center justify-content-center mb-5">
                    <h2 class="subir mb-3">Elígenos por estas razones</h2>

                    <div class="row">
                        <div class="col-md-4 justify-content-center">
                            <div class="p-card">
                                <div class="card-body">
                                    <div class="card-body-img"></div>
                                    <p class="p-card-text mt-2">Recoleccion de residuos</p>
                                </div>
                            </div>
                        </div>
                        <div class=" col-md-4 justify-content-center">
                            <div class="p-card" >
                                <div class="card-body">
                                    <div class="card-body-img"></div>
                                    <p class="p-card-text mt-2">Seguridad</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 justify-content-center">
                            <div class="p-card" >
                                <div class="card-body">
                                    <div class="card-body-img"></div>
                                    <p class="p-card-text mt-2">Calidad</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
