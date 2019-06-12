import React, { Component } from 'react'

export default class Comentarios extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="container comentarios mt-5">
                    <h2 class="text-center font-dark font-sub f-weight">Lo que dicen de nosotros</h2>
                    <div class="row rcomentarios">
                        <div class="col-md-4">
                        <div class="comentsall">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iusto explicabo deserunt animi cumque enim doloremque debitis
                        eveniet aperiam eaque atque, hic, cupiditate reiciendis quidem
                        expedita pariatur blanditiis id voluptas numquam.</p>
                        
                        </div>
                        <div class="usuarios">
                        <div class="testimonial">
                        </div>
                        <div class="user-name font-bold ">
                            <h4>Camila Barrientos Chang</h4>
                        </div>
                        </div>
                        </div>
                        <div class="col-md-4">
                        <div class="comentsall">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iusto explicabo deserunt animi cumque enim doloremque debitis
                        eveniet aperiam eaque atque, hic, cupiditate reiciendis quidem
                        expedita pariatur blanditiis id voluptas numquam.</p>
                        </div>
                        <div class="usuarios">
                        <div class="testimonial2">
                        </div>
                        <div class="user-name font-bold ">
                            <h4>Luis Torres Rodriguez</h4>
                        </div>
                        </div>
                        </div>
                        <div class="col-md-4">
                        <div class="comentsall">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iusto explicabo deserunt animi cumque enim doloremque debitis
                        eveniet aperiam eaque atque, hic, cupiditate reiciendis quidem
                        expedita pariatur blanditiis id voluptas numquam.</p>
                        
                        </div>
                        <div class="usuarios">
                        <div class="testimonial3">
                        </div>
                        <div class="user-name font-bold ">
                            <h4>Jorge Dávila Malpeca</h4>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
