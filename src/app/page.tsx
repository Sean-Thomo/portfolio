import React from "react"
import Navbar from "@/components/navbar/Navbar"
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-grey">
      <div className="px-8 max-w-5xl justify-center items-center m-auto">
        {/* Navbar */}
        <Navbar />
        {/* Intro Text */}
        <div className="h-[85vh] justify-center flex flex-col md:flex-row">
          <div className="grid gap-8 justify-center items-start md:max-w-xl md:inline-flex md:flex-col">
            <p className="text-green">Hi, my name is</p>
            <h1 className="font-semibold text-5xl text-white">Siphesihle Thomo</h1>
            <h3 className="font-semibold text-4xl">Software Developer</h3>
            <p>Passionate software developer based in Johannesburg, South Africa.
            With expertise in building quality full-stack web applications.</p>

            <Link href="/#contact" className="flex gap-3 bg-green w-36 h-14 
            p-2.5 items-center justify-center rounded-3xl text-black font-semibold"
            >Contact</Link>
          </div>

          <div className="flex flex-row justify-center items-center md:flex-col md:place-items-start">
            <svg className='m-5' width={31} height={30}><use xlinkHref="/appIcons.svg#github"/></svg>
            <svg className='m-5' width={31} height={30}><use xlinkHref="/appIcons.svg#linkedin"/></svg>
          </div>
        </div>

        {/* About Me */}
        <div className="grid gap-4 justify-center items-center sm:grid-cols-3 sm:mx-10">
          <h2><span className="text-green">02. </span>About Me</h2>
          <hr className="h-1 max-w-[538px] border-0 rounded bg-green col-span-2"/>
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
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>Python</li>
              </ul>
              <ul>
                <li>React.js / Next.js</li>
                <li>Tailwind CSS</li>
                <li>SQL</li>
                <li>Node.js</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}