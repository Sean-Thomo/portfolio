import React from "react";
import Landing from "@/components/homepage/landing";
import About from "@/components/homepage/about";
import Projects from "@/components/homepage/projects";
import Contact from "@/components/homepage/contact";

export default function Home() {
	return (
		<>
			<Landing />
			<About />
			<Projects />
			<Contact />
		</>
	);
}
