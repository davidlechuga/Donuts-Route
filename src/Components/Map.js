import React, {useEffect} from 'react';
import '../Styles/Map.css';


const Mapquest = ({ height, width, center, tileLayer, zoom, apiKey }) => {
    

    useEffect(() => {
        //establecer api key
        window.L.mapquest.key = apiKey

        const map = window.L.mapquest.map('map', {
            center,
            layers: window.L.mapquest.tileLayer(tileLayer),
            zoom
        });
        map.addControl(window.L.mapquest.control());
    }, []);

    return (
        <div id="map" className="col-10">
            <p>cargando mapquesta---</p>
        </div>
    );
};



export default Mapquest