import React, { Component } from 'react'
import CarruselItem from './CarruselItem';
import Carousel from 'react-bootstrap/Carousel'


export default class Carrusel extends Component {

    constructor(props) {
        super(props)
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            categoria: [],
            index: 0,
            direction: null,
        }

    }

    componentDidMount() {
        fetch('https://backend-ecollect.herokuapp.com/api/categoria').then(response => {
            return response.json();
        }).then(data => {
            this.setState({
                categoria: data.content,
            })
        })
    }

    // onChangeCCN = () => {
    //     //console.log(e.target);
    //     //console.log(e.currentTarget);
    //     //debugger;
    //     //let arreglo = e.currentTarget.childNodes[0];
    //     //for (let index = -1; index <= arreglo.childElementCount-2; index++) {
    //     //    const element = arreglo.childNodes[index+1];
    //     //    if(element.className.includes("active")){
    //     //        console.log(element)
    //     //    }  
    //     //}



    // }
    handleSelect(selectedIndex, e) {
        this.setState({
          index: selectedIndex,
          direction: e.direction,
        });
        let nombre = this.state.categoria[selectedIndex].catprod_nombre;
        let id = this.state.categoria[selectedIndex].catprod_id;
        this.props.getNombreCategoria(nombre,id)
    }

    render() {
        const { index, direction } = this.state;
        return (
            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
                interval={null}>
                {
                    this.state.categoria.map((cat, i) => {
                        return (<CarruselItem categoria={cat} key={i} />)
                    })
                }
            </Carousel>

            // <div className="container" >

            //     <div className="carousel slide" id="miCarousel" data-ride="carousel" data-interval="false">
            //         {/* <!--indicadores--> */}
            //         {/* <ol className="carousel-indicators">
            //             <li data-target="#miCarousel" data-slide-to="0" className="active"></li>
            //             <li data-target="#miCarousel" data-slide-to="1"></li>
            //             <li data-target="#miCarousel" data-slide-to="2"></li>
            //         </ol> */}

            //         {/* <!--panel--> */}

            //         <div className="carousel-inner">
            //             {
            //                     this.state.categoria.map((cat, i) => {
            //                                 //console.log(cat);
            //                                 if (i === 0){
            //                                     return <CarruselItem categoria={cat} key={i} claseNombre={"carousel-item active text-center"}/>
            //                                 } else {
            //                                     return <CarruselItem categoria={cat} key={i} claseNombre={"carousel-item text-center"}/>
            //                                 }
            //                             })
            //             }
            //         </div>

            //         {/* <!--botones de navegacion--> */}
            //         <a href="#miCarousel" className="carousel-control-prev" data-slide="prev">
            //             <span className="carousel-control-prev-icon"></span>
            //         </a>
            //         <a href="#miCarousel" className="carousel-control-next" data-slide="next">
            //             <span className="carousel-control-next-icon"></span>
            //         </a>

            //     </div>
            // </div>
        )
    }

}
