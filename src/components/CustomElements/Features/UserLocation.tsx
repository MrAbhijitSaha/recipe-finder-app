"use client";

import { GeoLocationState } from "@/lib/alltypes";
import ky from "ky";
import { useEffect, useState } from "react";

const UserLocation = () => {
	const [location, setLocation] = useState<GeoLocationState | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		ky.get("https://ipapi.co/json/")
			.json<GeoLocationState>()
			.then(setLocation)
			.catch((err) => {
				setError(err instanceof Error ? err.message : String(err));
			})
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<div>
			{isLoading && <p>location...</p>}
			{error && <p style={{ color: "red" }}>{error}</p>}
			{location && (
				<p className="font-mono">
					{location.city}, <strong>{location.country_name}</strong>
				</p>
			)}
		</div>
	);
};

export default UserLocation;
