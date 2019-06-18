import React from 'react'

export default function CarruselItem(props) {
    return (
        <div className="carousel-item text-center">
            <img src="http://placehold.it/500x400/" alt="" />
            <div className="carousel-caption text-dark">
                <h4>{props.categoria.catprod_nombre}</h4>
                <p>{props.categoria.catprod_descripcion}</p>
            </div>
        </div>
    )
}
