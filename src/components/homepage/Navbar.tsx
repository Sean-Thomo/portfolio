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
		<section className="bg-theme-primary text-theme-text w-full sm:flex sm:justify-center">
			<header
				className="top-0 sticky flex items-center justify-between h-16 max-w-7xl z-40 px-4 
      sm:w-[1000px] md:px-8 lg:px-12"
			>
				<a href="/" className="text-theme-secondary text-3xl font-black">
					<svg
						className="transition ease-in-out text-theme-text hover-text-theme-secondary hover:scale-110 
          duration-150"
						width={103}
						height={55}
					>
						<use xlinkHref="/appIcons.svg#logo" />
					</svg>
				</a>
				<nav ref={navRef} className="flex items-center">
					<a
						href="/"
						className="hover-text-theme-secondary mx-4 md:mx-6 lg:mx-8"
						onClick={showNavbar}
					>
						<span>00.</span> Home
					</a>
					<a
						href="/#about"
						className="hover-text-theme-secondary mx-4 md:mx-6 lg:mx-8"
						onClick={showNavbar}
					>
						<span>01.</span> About
					</a>
					<a
						href="/#projects"
						className="hover-text-theme-secondary mx-4 md:mx-6 lg:mx-8"
						onClick={showNavbar}
					>
						<span>02.</span> Projects
					</a>
					<a
						href="/#contact"
						className="hover-text-theme-secondary mx-4 md:mx-6 lg:mx-8"
						onClick={showNavbar}
					>
						<span>03.</span> Contact
					</a>
					<button
						className="m-5 nav-btn nav-close-btn md:hidden"
						onClick={showNavbar}
					>
						<svg className="text-theme-secondary" width={24} height={24}>
							<use xlinkHref="/appIcons.svg#close-circle" />
						</svg>
					</button>
				</nav>
				<button
					className="m-5 nav-btn nav-open-btn md:hidden"
					onClick={showNavbar}
				>
					<svg className="text-theme-secondary" width={24} height={24}>
						<use xlinkHref="/appIcons.svg#bars" />
					</svg>
				</button>
			</header>
		</section>
	);
}
