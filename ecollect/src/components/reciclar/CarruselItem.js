import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function CarruselItem(props) {
    return (
        // <div className={props.claseNombre}>
        //     <img src="http://placehold.it/500x400/" alt="" />
        //     <div className="carousel-caption text-dark">
        //         <h4>{props.categoria.catprod_nombre}</h4>
        //         <p>{props.categoria.catprod_descripcion}</p>
        //     </div>
        // </div>
        <Carousel.Item>
            <img
                //className="d-block w-100"
                src="http://placehold.it/500x400/"
                alt=""
            />

            <Carousel.Caption>
                <h3>{props.categoria.catprod_nombre}</h3>
                <p>
                    {props.categoria.catprod_descripcion}
                </p>
            </Carousel.Caption>
        </Carousel.Item>
    )
}
