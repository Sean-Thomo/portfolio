import React from "react"
import Navbar from "@/components/navbar/Navbar"
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-mirage-950 text-slate-200 h-full">
        <div className="bg-mirage-950 px-8 pb-8 max-w-5xl justify-center items-center m-auto">
            {/* Navbar */}
            <Navbar />
            {/* Intro Text */}
            <div className="h-[85vh] py-4 justify-center flex flex-col md:flex-row">
                <div className="grid gap-8 justify-center items-start md:max-w-xl md:inline-flex md:flex-col">
                    <p className="text-lime-500">👋 Hi, my name is</p>
                    <h1 className="font-semibold text-5xl text-white">Siphesihle Thomo</h1>
                    <h3 className="font-semibold text-4xl">Software Developer</h3>
                    <p>Passionate software developer based in Johannesburg, South Africa.
                    With expertise in building quality full-stack web applications.</p>

                    <Link href="/#contact" className="w-32 text-lime-600 hover:text-white border border-lime-600
                    focus:ring-4 focus:outline-none focus:ring-lime-300
                    font-medium rounded-sm text-sm px-5 py-2.5 text-center mr-2 mb-2 transition
                    duration-150 ease-in-out hover:bg-lime-600 hover:scale-110"
                    >Contact</Link>
                </div>

                <div className="mt-8 flex flex-row justify-center items-center md:flex-col md:place-items-start md:mt-0">
                    <Link href="https://www.linkedin.com/in/siphesihle-thomo/" className="m-5">
                        <svg className="transition ease-in-out text-slate-200 hover:text-lime-600 hover:scale-110 duration-150" width={30} height={30}><use xlinkHref="/appIcons.svg#linkedin"/></svg>                    
                    </Link>
                    <Link href="https://github.com/Sean-Thomo" className="m-5">
                        <svg className="transition ease-in-out text-slate-200 hover:text-lime-600 hover:scale-110 duration-150" width={30} height={30}><use xlinkHref="/appIcons.svg#github"/></svg>                    
                    </Link>
                </div>
            </div>

            {/* About Me */}
            <div id="about" className="grid gap-4 justify-center items-center sm:grid-cols-3 sm:mx-10">
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
                            <svg className="m-5 text-lime-500" width={24} height={24}><use xlinkHref="/appIcons.svg#arrow"/></svg>
                            TypeScript
                        </li>
                        <li className="flex items-center">
                            <svg className="m-5 text-lime-500" width={24} height={24}><use xlinkHref="/appIcons.svg#arrow"/></svg>
                            JavaScript
                        </li>
                        <li className="flex items-center">
                            <svg className="m-5 text-lime-500" width={24} height={24}><use xlinkHref="/appIcons.svg#arrow"/></svg>
                            Java
                        </li>
                        <li className="flex items-center">
                            <svg className="m-5 text-lime-500" width={24} height={24}><use xlinkHref="/appIcons.svg#arrow"/></svg>
                            Python
                        </li>
                    </ul>
                    <ul>
                        <li className="flex items-center">
                            <svg className="m-5 text-lime-500" width={24} height={24}><use xlinkHref="/appIcons.svg#arrow"/></svg>
                            React.js / Next.js
                        </li>
                        <li className="flex items-center">
                            <svg className="m-5 text-lime-500" width={24} height={24}><use xlinkHref="/appIcons.svg#arrow"/></svg>
                            Tailwind CSS
                        </li>
                        <li className="flex items-center">
                            <svg className="m-5 text-lime-500" width={24} height={24}><use xlinkHref="/appIcons.svg#arrow"/></svg>
                            SQL
                        </li>
                        <li className="flex items-center">
                            <svg className="m-5 text-lime-500" width={24} height={24}><use xlinkHref="/appIcons.svg#arrow"/></svg>
                            Node.js
                        </li>
                    </ul>
                    </div>

                </div>
            </div>

            {/* Projects */}
            <div id="projects" className="grid gap-4 justify-center items-center sm:grid-cols-3 sm:mx-10">
                <hr className="h-1 max-w-[538px] border-0 rounded bg-lime-500 col-span-2"/>
                <h2 className="flex justify-end" ><span className="text-lime-500">02. </span>Projects</h2>
            </div>

            <div className="grid gap-6 justify-center items-center my-16 sm:grid-cols-2 lg:grid-cols-3">
                <div className="max-w-xs mx-auto rounded-sm p-6 bg-mirage-900 ring-1 ring-slate-900/5 shadow-lg space-y-3
                    transition duration-150 ease-in-out hover:bg-mirage-700 hover:ring-mirage-600 hover:scale-110 
                    hover:-translate-y-1">
                    <div className="flex justify-between items-center">
                        <h1 className="text-slate-200 group-hover:text-white text-sm font-semibold">Coming Soon</h1>

                        <div className="flex">
                            <Link href="" className="m-5">
                                <svg className="transition ease-in-out text-slate-200 hover:text-lime-600 hover:scale-110 duration-150" width={24} height={24}><use xlinkHref="/appIcons.svg#external-link"/></svg>
                            </Link>
                            <Link href="" className="m-5">
                                <svg className="transition ease-in-out text-slate-200 hover:text-lime-600 hover:scale-110 duration-150" width={31} height={30}><use xlinkHref="/appIcons.svg#github"/></svg>
                            </Link>
                        </div>
                    </div>

                    <p className="text-slate-200 group-hover:text-white text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio accusamus nobis, minima quia, 
                        nostrum, perspiciatis beatae veniam natus fugiat vel quisquam doloremque quidem cupiditate nulla. 
                        Voluptates voluptatem ad odio reiciendis!
                    </p>

                    <div className="flex text-sm text-lime-600">
                        <p className="m-2">HTML/CSS</p>
                        <p className="m-2">JavaScript</p>
                        <p className="m-2">JavaScript</p>
                    </div>
                </div>

                <div className="max-w-xs mx-auto rounded-sm p-6 bg-mirage-900 ring-1 ring-slate-900/5 shadow-lg space-y-3
                    transition duration-150 ease-in-out hover:bg-mirage-700 hover:ring-mirage-600 hover:scale-110 
                    hover:-translate-y-1">
                    <div className="flex justify-between items-center">
                        <h1 className="text-slate-200 group-hover:text-white text-sm font-semibold">Coming Soon</h1>

                        <div className="flex">
                            <Link href="" className="m-5">
                                <svg className="transition ease-in-out text-slate-200 hover:text-lime-600 hover:scale-110 duration-150" width={24} height={24}><use xlinkHref="/appIcons.svg#external-link"/></svg>
                            </Link>
                            <Link href="" className="m-5">
                                <svg className="transition ease-in-out text-slate-200 hover:text-lime-600 hover:scale-110 duration-150" width={31} height={30}><use xlinkHref="/appIcons.svg#github"/></svg>
                            </Link>
                        </div>
                    </div>

                    <p className="text-slate-200 group-hover:text-white text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio accusamus nobis, minima quia, 
                        nostrum, perspiciatis beatae veniam natus fugiat vel quisquam doloremque quidem cupiditate nulla. 
                        Voluptates voluptatem ad odio reiciendis!
                    </p>

                    <div className="flex text-sm text-lime-600">
                        <p className="m-2">HTML/CSS</p>
                        <p className="m-2">JavaScript</p>
                        <p className="m-2">JavaScript</p>
                    </div>
                </div>

                <div className="max-w-xs mx-auto rounded-sm p-6 bg-mirage-900 ring-1 ring-slate-900/5 shadow-lg space-y-3
                    transition duration-150 ease-in-out hover:bg-mirage-700 hover:ring-mirage-600 hover:scale-110 
                    hover:-translate-y-1">
                    <div className="flex justify-between items-center">
                        <h1 className="text-slate-200 group-hover:text-white text-sm font-semibold">Coming Soon</h1>

                        <div className="flex">
                            <Link href="" className="m-5">
                                <svg className="transition ease-in-out text-slate-200 hover:text-lime-600 hover:scale-110 duration-150" width={24} height={24}><use xlinkHref="/appIcons.svg#external-link"/></svg>
                            </Link>
                            <Link href="" className="m-5">
                                <svg className="transition ease-in-out text-slate-200 hover:text-lime-600 hover:scale-110 duration-150" width={31} height={30}><use xlinkHref="/appIcons.svg#github"/></svg>
                            </Link>
                        </div>
                    </div>

                    <p className="text-slate-200 group-hover:text-white text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio accusamus nobis, minima quia, 
                        nostrum, perspiciatis beatae veniam natus fugiat vel quisquam doloremque quidem cupiditate nulla. 
                        Voluptates voluptatem ad odio reiciendis!
                    </p>

                    <div className="flex text-sm text-lime-600">
                        <p className="m-2">HTML/CSS</p>
                        <p className="m-2">JavaScript</p>
                        <p className="m-2">JavaScript</p>
                    </div>
                </div>
            </div>

            {/* Contact */}
            <div className="my-12">
                <div id="contact" className="grid gap-4 justify-center items-center sm:grid-cols-3 sm:mx-10">
                    <h2><span className="text-lime-500">04. </span>Contact</h2>
                    <hr className="h-1 max-w-[538px] border-0 rounded bg-lime-500 col-span-2"/>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <h2 className="m-6 text-center font-semibold text-2xl">Let&rsquo;s  Build Something Together!</h2>
                    <a className="text-lime-600 hover:text-white border border-lime-600
                    focus:ring-4 focus:outline-none focus:ring-lime-300
                    font-medium rounded-sm text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-12 transition
                    duration-150 ease-in-out hover:bg-lime-600 hover:scale-110"
                    href="mailto:seansthomo@gmail.com">Say Hi 👋</a>
                </div>
            </div>



        </div>
    </main>
  )
}