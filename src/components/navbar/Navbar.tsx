"use client"

import { useRef } from "react"

export default function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-nav")
    }

    return (
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href="/"><span>01.</span> Home</a>
                <a href="/"><span>02.</span> About</a>
                <a href="/"><span>03.</span> Projects</a>
                <a href="/"><span>04.</span> Contact</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    X
                </button>
            </nav>
            <button className="nav-btn nav-open-btn" onClick={showNavbar}>
                open
            </button>
        </header>
    )
}