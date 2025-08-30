import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Home() {
  const position = [-33.8688, 151.2093]; // Sydney CBD 坐标

  return (
    <MapContainer center={position} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url={`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${import.meta.env.VITE_MAPTILER_KEY}`}
      />
      <Marker position={position}>
        <Popup>🍱 Example Restaurant</Popup>
      </Marker>
    </MapContainer>
  );
}
