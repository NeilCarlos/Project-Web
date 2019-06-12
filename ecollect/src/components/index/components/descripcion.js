import React, { Component } from 'react'

export default class Descripcion extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="container descripcion mt-5 text-center ">
                    <h2 class="text-center font-dark font-sub f-weight">Interfaz amigable y responsive</h2>
                    <div class="row mt-5">
                        <div class="col-md-6 align-middle">
                            <h4 class="font-text font-green font-bold">Limpia tu hogar</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                              Itaque in laudantium dignissimos. In fuga consectetur porro vitae,
                              reprehenderit sequi delectus repudiandae modi autem voluptatem
          explicabo impedit quibusdam exercitationem est cum.</p>
                        </div>
                        <div class="col-md-6">
                            <img src="https://placehold.it/400x500" alt="" />
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-md-6">
                            <img src="https://placehold.it/400x500" alt="" />
                        </div>
                        <div class="col-md-6 align-middle">
                            <h4 class="font-text font-green font-bold">Desecha residuos de la manera correcta</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                              Itaque in laudantium dignissimos. In fuga consectetur porro vitae,
                              reprehenderit sequi delectus repudiandae modi autem voluptatem
          explicabo impedit quibusdam exercitationem est cum.</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
