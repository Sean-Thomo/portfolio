import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Landing from "@/components/Landing";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
	return (
		<>
			<Navbar />
			<Landing />
			<About />
			<Projects />
			<Contact />
		</>
	);
}
