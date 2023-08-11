import React from "react"
import Navbar from "@/components/navbar/Navbar"
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-grey">
      <div className="px-8">
        {/* Navbar */}
        <Navbar />
        {/* Intro Text */}
        <div className="flex flex-col mt-">
          <div className="grid gap-8 justify-center items-start">
            <p className="text-green">Hi, my name is</p>
            <h1 className="font-semibold text-5xl">Siphesihle Thomo</h1>
            <h3 className="font-semibold text-4xl">Software Developer</h3>
            <p>Passionate software developer based in Johannesburg, South Africa.
            With expertise in building quality full-stack web applications.</p>

            <Link href="/#contact" className="flex gap-3 bg-green w-36 h-14 
            p-2.5 items-center justify-center rounded-3xl text-black font-semibold"
            >Contact</Link>
          </div>

          <div className="flex flex-col">
            github
          </div>
        </div>

      </div>
    </main>
  )
}