import React from "react";
import Navbar from "@/components/homepage/Navbar";
import Landing from "@/components/homepage/Landing";
import About from "@/components/homepage/About";
import Projects from "@/components/homepage/Projects";
import Contact from "@/components/homepage/Contact";

export default function Home() {
	return (
		<main>
			<Navbar />
			<Landing />
			<About />
			<Projects />
			<Contact />
		</main>
	);
}
