"use client";

import { useRef, useState } from "react";

export default function Navbar() {
	const navRef = useRef<HTMLDivElement>(null);

	const showNavbar = () => {
		if (navRef.current) {
			navRef.current.classList.toggle("responsive-nav");
		}
	};

	return (
		<header className="top-0 sticky flex items-center justify-between h-16 bg-[#0C121B]">
			<a href="/" className="text-lime-600 text-3xl font-black">
				<svg
					className="transition ease-in-out text-slate-200 hover:text-lime-600 hover:scale-110 duration-150"
					width={103}
					height={55}
				>
					<use xlinkHref="/appIcons.svg#logo" />
				</svg>
			</a>
			<nav ref={navRef}>
				<a href="/" className="hover:text-lime-600 mx-8" onClick={showNavbar}>
					<span>00.</span> Home
				</a>
				<a
					href="/#about"
					className="hover:text-lime-600 mx-8"
					onClick={showNavbar}
				>
					<span>01.</span> About
				</a>
				<a
					href="/#projects"
					className="hover:text-lime-600 mx-8"
					onClick={showNavbar}
				>
					<span>02.</span> Projects
				</a>
				<a
					href="/#contact"
					className="hover:text-lime-600 mx-8"
					onClick={showNavbar}
				>
					<span>03.</span> Contact
				</a>
				<button
					className="m-5 nav-btn nav-close-btn md:hidden"
					onClick={showNavbar}
				>
					<svg className="text-lime-500" width={24} height={24}>
						<use xlinkHref="/appIcons.svg#close-circle" />
					</svg>
				</button>
			</nav>
			<button
				className="m-5 nav-btn nav-open-btn md:hidden"
				onClick={showNavbar}
			>
				<svg className="text-lime-500" width={24} height={24}>
					<use xlinkHref="/appIcons.svg#bars" />
				</svg>
			</button>
		</header>
	);
}
