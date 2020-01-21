import React, {useState} from 'react';
import Mapquest from './Components/Map'
import Miubicacion from './Components/Miubicacion'


function App() {
  //  state coordenadas
  const [lat, setLat] = useState ('19.3520662')
  const [lng, setLng] = useState('-99.138787')
  
  let markers = [];

  //funciones centro del mapa
  const setCenter = (lat, lng) => {
    setLat(lat);
    setLng(lng);
    window.L.mapquest.Map.getMap('map').setView(new window.L.LatLng(lat, lng), 12);
  };

  const addMarker = (lat, lng, title, subtitle) => {
    const marker = window.L.mapquest.textMarker(
      new window.L.LatLng(lat, lng),
      {
        text: title || '',
        subtext: subtitle || '',
        position: 'right',
        type: 'marker',
        icon: {
          primaryColor: '#a8190f',
          secondaryColor: '#db2c2c',
          size: 'md'
        }
      }
    )
    .addTo(window.L.mapquest.Map.getMap('map'));
    markers.push(marker)

  };

  return (
    
    <div className="App">
       <div className="container-fluid">
          <div className="row pl-3 pr-3 pb-3">
              <div className="col-sm-10">
                  Búsqueda
              </div>
              <div className="col-sm-2">
                  <Miubicacion
                      setCenter={setCenter}
                      setMarker={addMarker}
                  />
              </div>
          </div>
            <Mapquest
              height="80vh"
              width="100%"
              center={[lat, lng]}
              tileLayer={'map'}
              zoom={12}
              apiKey="cGAICTZ68URYWN5Gbh1DD7YnOAwaEv1o"
            />
        </div>    
    </div>
  );
}

export default App;
