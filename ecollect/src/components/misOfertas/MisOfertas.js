import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class MisOfertas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ofertas: [{}],
        }
        this.idActual = JSON.parse(localStorage.getItem('usuario-ecollect')).id;
    }

    componentDidMount() {
        // ${this.idActual}
        fetch(`https://backend-ecollect.herokuapp.com/api/oferta/misofertas/4`)
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

    render() {
        let publicaciones = [];
        return (
            <div>
                {this.state.ofertas.map( async(oferta, i) => {
                    await fetch(`https://backend-ecollect.herokuapp.com/api/publicacion/buscarById/${oferta.publi_id}`).then(response => {
                        return response.json();
                    })
                        .then(data => {
                            publicaciones = data.content;
                            console.log(publicaciones[0]);
                        });
                    return (
                        <Card style={{ width: "100%" }}>
                            <Card.Body>
                                <Row>
                                    <Col sm={9}>
                                        <Card.Title> Publicacion: #{oferta.publi_id} </Card.Title>
                                        <hr />
                                        <Row>
                                            <Col sm={6}>
                                                <Card.Img src={publicaciones[i].t_fotos[0].fot_img} />
                                                <button className="btn btn-primary mb-5">Ver publicacion</button>
                                            </Col>
                                            <Col sm={6}>
                                                <Card.Text> Publicado Por: {publicaciones[i].t_usuario.usu_nombre} </Card.Text>
                                                <Card.Text> Fecha Publicacion: {publicaciones[i].publi_fecha} </Card.Text>
                                                <Card.Text> Estado: {publicaciones[i].publi_estado} </Card.Text>
                                            </Col>
                                        </Row>

                                    </Col>
                                    <Col sm={3}>
                                        <Card.Title>Oferta</Card.Title>
                                        <hr />
                                        <Card.Text> Fecha: {oferta.ofer_fecha} </Card.Text>
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