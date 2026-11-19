"use client";

import { useCallback, useState } from "react";

export interface Location {
  latitude: number;
  longitude: number;
  accuracy: number;
}

export interface UseGeolocationResult {
  location: Location | null;
  error: string;
  loading: boolean;
  getLocation: () => void;
}

const pesanError: Record<number, string> = {
  1: "Izin lokasi ditolak.",
  2: "Lokasi tidak tersedia.",
  3: "Waktu permintaan lokasi habis.",
};

export function useUserLocation(): UseGeolocationResult {
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const getLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError("Browser Anda tidak mendukung geolocation.");
      return;
    }

    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
        });
        setLoading(false);
      },
      (err) => {
        setError(pesanError[err.code] ?? "Terjadi kesalahan.");
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 },
    );
  }, []);

  return { location, error, loading, getLocation };
}
