import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

//const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Mapa extends Component {

    // static defaultProps = {
    //     center: {
    //         lat: -16.4296694,
    //         lng: -71.5162855
    //     },
    //     zoom: 17
    // };

    constructor(props){
        super(props)
        this.state = {
            puntoInicial:{
                lat: -16.4296694,
                lng: -71.5162855
                    },
            zoom:17
        }
    }

    
    componentDidMount(){
    navigator.geolocation.getCurrentPosition(
        (position) => {
        this.setState({
                        puntoInicial: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                            }
                        });
        },
        (error) => {},
        { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
        );

    }

    renderMarkers(map, maps) {
        let marker = new maps.Marker({
          position: this.state.puntoInicial,
          map,
          title: 'Hello World!'
        });
      }
    
    situarMarcador(e){
        console.log(e);
        this.setState({
            puntoInicial: {
                lat: e.lat,
                lng: e.lng
                }
            });
    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '450px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key:'AIzaSyBcjhtE0FIFEO92Z_7xKQWODx3I_QXq33E'}}
                    defaultCenter={this.state.puntoInicial}
                    defaultZoom={this.state.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
                    onClick={this.situarMarcador}
                >
                </GoogleMapReact>
            </div>
        )
    }
}
