import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const RouteMap = () => {
  const routes = [
    { id: 1, position: [51.505, -0.09], name: 'Route 1' },
    { id: 2, position: [51.515, -0.1], name: 'Route 2' }
  ];

  return (
    <Map center={[51.505, -0.09]} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {routes.map(route => (
        <Marker key={route.id} position={route.position}>
          <Popup>{route.name}</Popup>
        </Marker>
      ))}
    </Map>
  );
};

export default RouteMap;
