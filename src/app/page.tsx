"use client";

import { useEffect, useState } from "react";

export default function Home() {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) {
		return null; // return this null to avoid hydration errors
	}

	console.log("EXTENSION CREATED");

	return (
		<main className="text-3xl text-red-500">NextJS extension starter</main>
	);
}
