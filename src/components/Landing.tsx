import React from "react";
import Link from "next/link";

export default function Landing() {
	return (
		<div
			className="h-[85vh] bg-[#0C121B] text-slate-200 py-4 justify-center flex flex-col
    md:flex-row"
		>
			<div className="grid gap-8 justify-center items-start md:max-w-xl md:inline-flex md:flex-col">
				<p className="text-lime-500">👋 Hi, my name is</p>
				<h1 className="font-semibold text-5xl text-white">Siphesihle Thomo</h1>
				<h3 className="font-semibold text-4xl">Software Developer</h3>
				<p>
					Passionate software developer based in Johannesburg, South Africa.
					With expertise in building quality full-stack web applications.
				</p>

				<a
					className="text-lime-600 w-32 border hover:text-white border-lime-600
          focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-xl text-sm px-5
          py-2.5 text-center mr-2 mb-2 mt-12 transition duration-150 ease-in-out hover:bg-lime-600
          shover:scale-110"
					href="mailto:seansthomo@gmail.com"
				>
					Contact
				</a>
			</div>

			<div
				className="mt-8 flex flex-row justify-center items-center md:flex-col
        md:place-items-start md:mt-0"
			>
				<Link
					href="https://www.linkedin.com/in/siphesihle-thomo/"
					className="m-5"
				>
					<svg
						className="transition ease-in-out text-slate-200 hover:text-lime-600 hover:scale-110
            duration-150"
						width={30}
						height={30}
					>
						<use xlinkHref="/appIcons.svg#linkedin" />
					</svg>
				</Link>
				<Link href="https://github.com/Sean-Thomo" className="m-5">
					<svg
						className="transition ease-in-out text-slate-200 hover:text-lime-600 hover:scale-110
            duration-150"
						width={30}
						height={30}
					>
						<use xlinkHref="/appIcons.svg#github" />
					</svg>
				</Link>
			</div>
		</div>
	);
}
