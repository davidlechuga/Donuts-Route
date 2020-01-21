import React, { useState } from 'react';

const Busqueda = ({setCenter, addMarker, clearMarkers}) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        findLocation();
    } 

    const findLocation = () => {
        if (!query.length) return;
        if (clearMarkers) clearMarkers();
        window.L.mapquest.geocoding().geocode(query,
            (error, response) => {
                // console.log(response);
                response.results.forEach((result, index) => {
                    //ubicaciones de cada resultado
                    result.locations.forEach(location => {
                        const { street, adminArea5, adminArea3, latLng } = location;
                            if (index === 0) {
                            setCenter(latLng.lat, latLng.lng);
                             }
                            addMarker(
                                latLng.lat,
                                latLng.lng,
                                `lat: ${latLng.lat}, lng: ${latLng.lng}`,
                                 //subtitulo
                                `${street || ''}, ${adminArea5 || ''}, ${adminArea3 || ''} `
                            );
                        });
                });
            }
        );
    }

    return (
        <form
            className="form-inline"
            onSubmit={handleSubmit}
        >
            <div className="form-group col-8">
                <label htmlFor="query" className="mr-2"> Buscar: </label>
                <input
                    type="text"
                    className="form-control col-10"
                    id="query"
                    defaultValue={query}
                    onChange={handleChange}
                >
                </input>
            </div>
            <button
                type="submit"
                className="btn btn-primary"
                disabled={!query.length} 
            >
                Buscar
            </button>
        </form>
    )
}
 

export default Busqueda