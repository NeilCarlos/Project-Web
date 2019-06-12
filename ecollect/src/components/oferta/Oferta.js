import React from 'react';
import {Component} from 'react';
import './Oferta.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class Oferta extends Component{
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
    this.precofer = React.createRef();
    this.comentario = React.createRef();
    }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  //--------------------//
  oferta = () => {
    let objOferta = {
        ofer_precio_oferta: this.precofer.current.value,
        ofer_comentario: this.comentario.current.value,
        ofer_fecha:Date,
        ofer_estado: "a",

    }
    console.log(objOferta);
    let headers = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objOferta)
    };
    fetch('https://backend-ecollect.herokuapp.com/api/oferta', headers)
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.message === "created") {
                console.log("bien");
            };
        });
}
//--------------------//


  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Abrir Modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ofertar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
        <p><label for="ingreso" class="intro"> Ingrese el precio que ofrece: </label></p>
        <p>
          <input type="number"
          placeholder="Precio"
          id="ingreso" class="prec" ref={this.precofer}/>
      </p>

      
      
      <br></br>
      <p>
          <label for="comentario" class="comen"> Ingresa un comentario para el reciclador:</label>
      </p>
      <p>
          <textarea id="comentario" cols="45" rows="6"
          placeholder="Comentario. . ." class="areatext" ref={this.comentario}></textarea>
      </p>

        </form>
       
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Ofertar
            </Button>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}