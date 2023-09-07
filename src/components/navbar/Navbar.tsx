"use client"

import { useRef, useState } from "react"

export default function Navbar() {
    const navRef = useRef();
    const [isRotated, setIsRotated] = useState(false);

    const toggleRotation = () => {
        setIsRotated(!isRotated);
    };

    const showNavbar = () => {
        if (navRef.current) {
            navRef.current.classList.toggle("responsive-nav");
        }
    }

    return (
        <header className="top-0 sticky flex items-center justify-between h-16 bg-mirage-950">
            <h1>Thomo.dev</h1>
            <nav ref={navRef}>
                <a href="/" className="hover:text-lime-600 mx-8"><span>01.</span> Home</a>
                <a href="/#about" className="hover:text-lime-600 mx-8"><span>02.</span> About</a>
                <a href="/#projects" className="hover:text-lime-600 mx-8"><span>03.</span> Projects</a>
                <a href="/#contact" className="hover:text-lime-600 mx-8"><span>04.</span> Contact</a>
                <button className={`nav-btn nav-close-btn md:hidden ${isRotated ? 'transition ease-in-out delay-150 rotate-[360deg]' : 'rotate-0'}`} onClick={() => {showNavbar(); toggleRotation();}}>
                    <svg className='m-5 text-lime-500' width={24} height={24}><use xlinkHref="/appIcons.svg#nav-arrow-up"/></svg>
                </button>
            </nav>
            <button className={`nav-btn nav-open-btn md:hidden ${isRotated ? 'transition ease-in-out delay-150 rotate-[360deg] hidden' : 'rotate-0'}`} onClick={() => {showNavbar(); toggleRotation();}}>
                <svg className='m-5 text-lime-500' width={24} height={24}><use xlinkHref="/appIcons.svg#nav-arrow-down"/></svg>
            </button>
        </header>
    )
}