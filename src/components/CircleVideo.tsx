"use client";
import { useState } from "react";
export default function CircleVideo() {
	const [hidden, setHidden] = useState(false);
	const toggleCircle = () => {
		setHidden(!hidden);
	};
	return (
		<div
			className={`bg-black fixed  bottom-5 left-10 flex items-center justify-center overflow-hidden cursor-pointer ${
				!hidden ? "h-[45em]" : "w-32 h-32 rounded-full"
			}`}
			onClick={() => toggleCircle()}>
			<video autoPlay muted loop>
				<source src="/videos/circle-video.mp4" type="video/mp4" />
			</video>
		</div>
	);
}
