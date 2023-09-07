import React from "react"
import Navbar from "@/components/navbar/Navbar"
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" text-slate-200 h-screen">
        <div className="bg-mirage-950 px-8 max-w-5xl justify-center items-center m-auto">
            {/* Navbar */}
            <Navbar />
            {/* Intro Text */}
            <div className="h-[85vh] justify-center flex flex-col md:flex-row">
                <div className="grid gap-8 justify-center items-start md:max-w-xl md:inline-flex md:flex-col">
                    <p className="text-lime-500">Hi, my name is</p>
                    <h1 className="font-semibold text-5xl text-white">Siphesihle Thomo</h1>
                    <h3 className="font-semibold text-4xl">Software Developer</h3>
                    <p>Passionate software developer based in Johannesburg, South Africa.
                    With expertise in building quality full-stack web applications.</p>

                    <Link href="/#contact" className="flex gap-3 bg-lime-500 w-36 h-14 
                    p-2.5 items-center justify-center rounded-3xl text-black font-semibold
                    hover:bg-lime-600"
                    >Contact</Link>
                </div>

                <div className="flex flex-row justify-center items-center md:flex-col md:place-items-start">
                    <svg className='m-5 hover:text-lime-600' width={31} height={30}><use xlinkHref="/appIcons.svg#github"/></svg>
                    <svg className='m-5 hover:text-lime-600' width={31} height={30}><use xlinkHref="/appIcons.svg#linkedin"/></svg>
                </div>
            </div>

            {/* About Me */}
            <div className="grid gap-4 justify-center items-center sm:grid-cols-3 sm:mx-10">
                <h2><span className="text-lime-500">02. </span>About Me</h2>
                <hr className="h-1 max-w-[538px] border-0 rounded bg-lime-500 col-span-2"/>
            </div>

            <div className="grid justify-center items-center my-16 gap-16 md:grid-cols-3 ">
                <Image className="mx-auto rounded-full" width={300} height={300} src="/images/profile-pic.svg" alt="Siphesihle Thomo"/>
                <div className="md:col-span-2">
                    <p>
                    As a Junior Software Developer, I possess an impressive arsenal of 
                    skills in Java, Python, JavaScript, React/Next, Tailwind and Git. I 
                    excel in designing and maintaining responsive websites that offer a 
                    smooth user experience. My expertise lies in crafting dynamic, engaging
                    web apps through writing clean and optimized code and utilizing 
                    cutting-edge development tools and techniques. I am also a team player
                    who thrives in collaborating with cross-functional teams to produce
                    outstanding web applications.
                    </p>
                    <br />
                    <p>Here are a few technologies I’ve been working with recently:</p>
                    <br />
                    <div className="grid grid-cols-2">
                    <ul>
                        <li className="flex items-center">
                            {/* <span> */}
                            <svg className='m-5 text-lime-500' width={24} height={24}><use xlinkHref="/appIcons.svg#arrow"/></svg>
                            {/* </span> */}
                            TypeScript
                        </li>
                        <li className="flex items-center">
                            <svg className='m-5 text-lime-500' width={24} height={24}><use xlinkHref="/appIcons.svg#arrow"/></svg>
                            JavaScript
                        </li>
                        <li className="flex items-center">
                            <svg className='m-5 text-lime-500' width={24} height={24}><use xlinkHref="/appIcons.svg#arrow"/></svg>
                            Java
                        </li>
                        <li className="flex items-center">
                            <svg className='m-5 text-lime-500' width={24} height={24}><use xlinkHref="/appIcons.svg#arrow"/></svg>
                            Python
                        </li>
                    </ul>
                    <ul>
                        <li className="flex items-center">
                            <svg className='m-5 text-lime-500' width={24} height={24}><use xlinkHref="/appIcons.svg#arrow"/></svg>
                            React.js / Next.js
                        </li>
                        <li className="flex items-center">
                            <svg className='m-5 text-lime-500' width={24} height={24}><use xlinkHref="/appIcons.svg#arrow"/></svg>
                            Tailwind CSS
                        </li>
                        <li className="flex items-center">
                            <svg className='m-5 text-lime-500' width={24} height={24}><use xlinkHref="/appIcons.svg#arrow"/></svg>
                            SQL
                        </li>
                        <li className="flex items-center">
                            <svg className='m-5 text-lime-500' width={24} height={24}><use xlinkHref="/appIcons.svg#arrow"/></svg>
                            Node.js
                        </li>
                    </ul>
                    </div>

                </div>
            </div>

            {/* Projects */}
            <div className="grid gap-4 justify-center items-center sm:grid-cols-3 sm:mx-10">
                <hr className="h-1 max-w-[538px] border-0 rounded bg-lime-500 col-span-2"/>
                <h2><span className="text-lime-500">02. </span>Projects</h2>
            </div>

            <div className="flex justify-center items-center my-16">
                <Link href="#" className="group block max-w-xs mx-auto rounded-lg p-6 bg-mirage-900 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-mirage-700 hover:ring-mirage-600">
                    <div className="flex items-center space-x-3">
                    <svg className='m-5 text-lime-500' width={24} height={24}><use xlinkHref="/appIcons.svg#folder"/></svg>
                        <h3 className="text-slate-200 group-hover:text-white text-sm font-semibold">New project</h3>
                    </div>
                    <p className="text-slate-200 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
                </Link>
            </div>

        </div>
    </main>
  )
}