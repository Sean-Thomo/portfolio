import React from "react";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

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
