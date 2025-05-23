import React from "react";
import Image from "next/image";

export default function About() {
	return (
		<section className="bg-[#0C121B] text-slate-200 px-4">
			<div className="flex justify-center">
				<div
					id="about"
					className="grid gap-4 justify-center items-center mx-10 sm:grid-cols-3 md:w-[1024px]"
				>
					<h2 className="flex justify-start">
						<span className="text-lime-500">01. </span>About Me
					</h2>
					<hr className="h-1 border-0 rounded bg-lime-500 col-span-2" />
				</div>
			</div>

			<div className="flex flex-col justify-center items-center py-16 lg:flex-row gap-12">
				<Image
					className="pb-4 rounded-full"
					width={300}
					height={300}
					src="/images/profile-pic.svg"
					alt="Siphesihle Thomo"
				/>
				<div className="md:w-2/3 md:max-w-3xl">
					<p>
						As a Junior Software Developer, I possess an impressive arsenal of
						skills in Java, Python, JavaScript, React/Next, Tailwind and Git. I
						excel in designing and maintaining responsive websites that offer a
						smooth user experience. My expertise lies in crafting dynamic,
						engaging web apps through writing clean and optimized code and
						utilizing cutting-edge development tools and techniques. I am also a
						team player who thrives in collaborating with cross-functional teams
						to produce outstanding web applications.
					</p>
					<br />
					<p>Here are a few technologies I’ve been working with recently:</p>
					<br />
					<div className="grid grid-cols-2">
						<ul>
							<li className="flex items-center">
								<span className="m-2 text-lime-500"> &gt; </span>
								TypeScript
							</li>
							<li className="flex items-center">
								<span className="m-2 text-lime-500"> &gt; </span>
								JavaScript
							</li>
							<li className="flex items-center">
								<span className="m-2 text-lime-500"> &gt; </span>
								Java
							</li>
							<li className="flex items-center">
								<span className="m-2 text-lime-500"> &gt; </span>
								Python
							</li>
						</ul>
						<ul>
							<li className="flex items-center">
								<span className="m-2 text-lime-500"> &gt; </span>
								React.js / Next.js
							</li>
							<li className="flex items-center">
								<span className="m-2 text-lime-500"> &gt; </span>
								Tailwind CSS
							</li>
							<li className="flex items-center">
								<span className="m-2 text-lime-500"> &gt; </span>
								SQL
							</li>
							<li className="flex items-center">
								<span className="m-2 text-lime-500"> &gt; </span>
								Node.js
							</li>
						</ul>
					</div>
				</div>
			</div>
			{/* </div> */}
		</section>
	);
}
