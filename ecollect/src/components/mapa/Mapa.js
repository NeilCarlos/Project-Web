import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Mapa extends Component {

    static defaultProps = {
        center: {
            lat: -16.4296694,
            lng: -71.5162855
        },
        zoom: 17
    };


    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '450px', width: '90%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key:'AIzaSyBcjhtE0FIFEO92Z_7xKQWODx3I_QXq33E'}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                >
                    <AnyReactComponent
                        lat={-16.4296694}
                        lng={-71.5162855}
                        text="Aqui estoy"
                    />
                </GoogleMapReact>
            </div>
        )
    }
}
