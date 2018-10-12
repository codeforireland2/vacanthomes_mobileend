import * as React from "react";
import "./MapWidget.css";

import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';


interface IMapWidgetState {
    latitude: number;
    longitude: number;
}

class MapWidget extends React.Component<{}, IMapWidgetState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0
        };
        this.getLocation();
    }

    public render() {
        return (
            <div className="MapWidget">

                <Map center={[this.state.latitude, this.state.longitude]} zoom={15} height={400}>
                    <Marker anchor={[this.state.latitude, this.state.longitude]} payload={1} />
                </Map>

            </div>
        );
    }

    private getLocation() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            });
        }
    }
}

export default MapWidget;
