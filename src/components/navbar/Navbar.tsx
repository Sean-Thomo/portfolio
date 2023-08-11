"use client"

import { useRef } from "react"

export default function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        if (navRef.current) {
            navRef.current.classList.toggle("responsive-nav");
        }
    }

    return (
        <header className="flex items-center justify-between h-16">
            <h1>Thomo.dev</h1>
            <nav ref={navRef}>
                <a href="/" className="hover:text-green mx-8"><span>01.</span> Home</a>
                <a href="/#about" className="hover:text-green mx-8"><span>02.</span> About</a>
                <a href="/#projects" className="hover:text-green mx-8"><span>03.</span> Projects</a>
                <a href="/#contact" className="hover:text-green mx-8"><span>04.</span> Contact</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    X
                </button>
            </nav>
            <button className="nav-btn nav-open-btn" onClick={showNavbar}>
                |||
            </button>
        </header>
    )
}