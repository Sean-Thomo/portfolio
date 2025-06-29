"use client";
import { useRef } from "react";

export default function Navbar() {
	const navRef = useRef<HTMLDivElement>(null);

	const showNavbar = () => {
		if (navRef.current) {
			navRef.current.classList.toggle("responsive-nav");
		}
	};

	return (
		<section className="sm:flex sm:justify-center">
			<header className="sticky flex items-center justify-between h-20 z-40 sm:w-[1000px]">
				<a href="/" className="text-lime-500 text-3xl font-black">
					<svg
						className="transition ease-in-out text-lime-500 hover:text-lime-500/70 hover:scale-110 
          duration-150"
						width={103}
						height={55}
					>
						<use xlinkHref="/appIcons.svg#logo" />
					</svg>
				</a>
				<nav
					ref={navRef}
					className="nav-menu flex justify-center items-center text-slate-300"
				>
					<a
						href="/"
						className="hover:text-lime-500 mx-4 md:mx-6 lg:mx-8"
						onClick={showNavbar}
					>
						<span className="text-lime-500">00.</span> Home
					</a>
					<a
						href="/#about"
						className="hover:text-lime-500 mx-4 md:mx-6 lg:mx-8"
						onClick={showNavbar}
					>
						<span className="text-lime-500">01.</span> About
					</a>
					<a
						href="/#projects"
						className="hover:text-lime-500 mx-4 md:mx-6 lg:mx-8"
						onClick={showNavbar}
					>
						<span className="text-lime-500">02.</span> Projects
					</a>
					<a
						href="/#contact"
						className="hover:text-lime-500 mx-4 md:mx-6 lg:mx-8"
						onClick={showNavbar}
					>
						<span className="text-lime-500">03.</span> Contact
					</a>
					<button
						className="nav-close-btn m-5 nav-btn absolute top-6 right-6 md:hidden"
						onClick={showNavbar}
					>
						<svg className="text-lime-500" width={24} height={24}>
							<use xlinkHref="/appIcons.svg#close-circle" />
						</svg>
					</button>
				</nav>
				<button className="m-5 nav-btn md:hidden" onClick={showNavbar}>
					<svg className="text-lime-500" width={24} height={24}>
						<use xlinkHref="/appIcons.svg#bars" />
					</svg>
				</button>
			</header>
		</section>
	);
}
