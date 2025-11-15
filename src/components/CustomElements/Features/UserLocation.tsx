// components/UserGeoLocation.tsx
"use client";

import { GeoLocationState } from "@/lib/alltypes";
import { useState, useEffect } from "react";

// Define a type for the data we expect back


const UserGeoLocation = () => {
	const [location, setLocation] = useState<GeoLocationState | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// We'll use an async function inside useEffect to fetch the data
		const fetchGeoLocation = async () => {
			try {
				const response = await fetch("http://ip-api.com/json");
				if (!response.ok) {
					throw new Error("Failed to fetch location");
				}
				const data: GeoLocationState = await response.json();
				setLocation(data);
			} catch (err: any) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchGeoLocation();
	}, []); // Empty array ensures this runs only once on mount

	return (
		<div>
			<h3>🌍 Your Location (from IP)</h3>
			{isLoading && <p>Loading location...</p>}
			{error && <p style={{ color: "red" }}>{error}</p>}
			{location && (
				<p>
					Welcome, visitor from {location.city},{" "}
					<strong>{location.regionName}</strong>,{" "}
					<strong>{location.country}</strong>!
					<strong>{location.userIp}</strong>!
				</p>
			)}
		</div>
	);
};

export default UserGeoLocation;
