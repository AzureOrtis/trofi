'use client';

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useRouter } from "next/navigation";
import "leaflet/dist/leaflet.css";
import LeafletMap from "./LeafletMap";

// mock 数据
const restaurants = [
  { id: 1, name: "Sushi Bar", lat: -33.8688, lng: 151.2093 },
  { id: 2, name: "Pasta House", lat: -33.870, lng: 151.210 },
  { id: 3, name: "Burger Shop", lat: -33.867, lng: 151.211 }
];

export default function MapView() {
  const router = useRouter();

  return (
    <LeafletMap>
      <MapContainer center={[-33.8688, 151.2093]} zoom={15} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url={`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${process.env.NEXT_PUBLIC_MAPTILER_KEY}`}
          attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        />
        {restaurants.map((r) => (
          <Marker key={r.id} position={[r.lat, r.lng]}>
            <Popup>
              <div>
                <strong>{r.name}</strong>
                <br />
                <button onClick={() => router.push(`/restaurant/${r.id}`)}>查看详情</button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </LeafletMap>
  );
}
