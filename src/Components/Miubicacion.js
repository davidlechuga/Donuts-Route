import React from 'react';

const Miubicacion = ({ setCenter, setMarker }) => {

    const findMe = () => {
        if (!navigator.geolocation) {
            alert('el navegador no soporta geolocalización')
            return;
        }
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const {latitude, longitude} = position.coords;
                if (setCenter) {
                    setCenter(latitude,longitude)
                }
                if (setMarker) {
                    setMarker(latitude, longitude, 'Mi ubicación', `lat: ${latitude}`, `lng: ${longitude}`) 
                }
            }, 
            (error) => {
                alert('Error al obtener la ubicación');
            }
        );
    };

    return (
        <button
            type="button"
            className="btn btn-info"
            onClick= {findMe}
        >
            Mi ubicacion
        </button>
    )
};

export default Miubicacion