"use client";

import { useEffect, useState } from "react";

const CurrentTime = () => {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const timerId = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => clearInterval(timerId);
	}, []);

	return (
		<div>
			<div>{currentTime.toLocaleString()}</div>
		</div>
	);
};

export default CurrentTime;
