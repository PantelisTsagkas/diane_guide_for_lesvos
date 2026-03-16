"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import type { GuideEntry } from "../data/guide";
import "leaflet/dist/leaflet.css";

// Fix default marker icons in Next.js (Leaflet uses file paths that break with bundlers)
const createIcon = (emoji: string) =>
  L.divIcon({
    html: `<span style="font-size: 1.5rem;">${emoji}</span>`,
    className: "custom-marker",
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });

function MapBounds({ entries }: { entries: GuideEntry[] }) {
  const map = useMap();
  const coords = entries
    .filter((e) => e.coordinates)
    .map((e) => e.coordinates!);
  if (coords.length > 0) {
    map.fitBounds(coords as [number, number][], { padding: [24, 24], maxZoom: 10 });
  }
  return null;
}

interface LesvosMapProps {
  entries: GuideEntry[];
  className?: string;
}

export default function LesvosMap({ entries, className = "" }: LesvosMapProps) {
  const mappableEntries = entries.filter((e) => e.coordinates);

  if (mappableEntries.length === 0) return null;

  // Lesvos center
  const center: [number, number] = [39.17, 26.35];

  return (
    <div className={`overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm ${className}`}>
      <MapContainer
        center={center}
        zoom={9}
        className="h-[220px] w-full z-0"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mappableEntries.map((entry) => (
          <Marker
            key={entry.id}
            position={entry.coordinates!}
            icon={createIcon(entry.emoji)}
          >
            <Popup>
              <span className="font-semibold">{entry.title}</span>
            </Popup>
          </Marker>
        ))}
        <MapBounds entries={mappableEntries} />
      </MapContainer>
    </div>
  );
}
