import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

var moment = require('moment')
export default class MisOfertas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ofertas: [{}],
        }
        this.idActual = JSON.parse(localStorage.getItem('usuario-ecollect')).id;
    }

    componentDidMount() {
        fetch(`https://backend-ecollect.herokuapp.com/api/oferta/misofertas/${this.idActual}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data.content);
                this.setState({
                    ofertas: data.content
                });
            });
    }

    CalcularFechaPublicacion = (fecha) => {
        let fecha1 = moment(fecha);
        let hoy = moment(new Date());
        let diferencia = hoy.diff(fecha1, 'day')
        if (diferencia > 0) {
            return `Hace ${diferencia} dias.`;
        } else {
            let diferencia = hoy.diff(fecha1, 'hours')
            if (diferencia > 0) {
                return `Hace ${diferencia} horas.`;
            } else {
                return `Hace unos minutos.`;
            }
        }
    }

    irAPublicacion = (idpublicacion) => {
        // console.log("idpublicacion "+idpublicacion);
        this.props.history.push(`/Publicacion/${idpublicacion}`);
    }

    render() {
        return (
            <div>
                {this.state.ofertas.map((oferta) => {
                    return (
                        <Card style={{ width: "100%" }}>
                            <Card.Body>
                                <Row>
                                    <Col sm={9}>
                                        <Card.Title> Publicacion: #{oferta.publi_id} </Card.Title>
                                        <hr />
                                        <Row>
                                            <Col sm={6}>
                                                <Card.Img src={oferta.publi_foto} />
                                                <button className="btn btn-primary mb-5" onClick={() => { this.irAPublicacion(oferta.publi_id) }}>Ver publicacion</button>
                                            </Col>
                                            <Col sm={6}>
                                                <Card.Text> Publicado Por: {oferta.usu_nombre} </Card.Text>
                                                <Card.Text> Fecha Publicacion: {this.CalcularFechaPublicacion(oferta.publi_fecha)} </Card.Text>
                                                <Card.Text> Estado: {oferta.publi_estado} </Card.Text>
                                            </Col>
                                        </Row>

                                    </Col>
                                    <Col sm={3}>
                                        <Card.Title>Oferta</Card.Title>
                                        <hr />
                                        <Card.Text> Fecha: {this.CalcularFechaPublicacion(oferta.ofer_fecha)} </Card.Text>
                                        <Card.Text> Monto de Oferta: S/.{oferta.ofer_precio_oferta} </Card.Text>

                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    );
                })}
            </div>
        )
    }
}