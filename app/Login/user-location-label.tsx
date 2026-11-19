"use client";

import { useUserLocation } from "@/lib/user.location";
import { MapPin } from "lucide-react";
import { useEffect } from "react";

export default function UserLocationLabel() {
  const { location, error, loading, getLocation } = useUserLocation();

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  const label = loading
    ? "Mendeteksi lokasi..."
    : location
      ? `${location.latitude.toFixed(2)}, ${location.longitude.toFixed(2)}`
      : error || "Lokasi lahan";

  return (
    <span className="flex items-center gap-1 text-[10px] text-[#4B6B00]">
      <MapPin size={12} /> {label}
    </span>
  );
}
