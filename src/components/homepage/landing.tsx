import React from "react";
import Link from "next/link";

export default function Landing() {
	return (
		<section className="h-[85vh] flex justify-center flex-col px-4 md:flex-row">
			<div className="grid gap-8 justify-center items-start md:max-w-xl md:inline-flex md:flex-col">
				<p className="text-lime-500">👋 Hi, my name is</p>
				<h1 className="font-semibold text-5xl">Siphesihle Thomo</h1>
				<h3 className="font-semibold text-4xl text-lime-500 transparent">
					Software Developer
				</h3>
				<p>
					Passionate software developer based in Johannesburg, South Africa.
					With expertise in building quality full-stack web applications.
				</p>

				<div className="flex flex-row justify-start md:place-items-start md:mt-0">
					<Link
						href="https://www.linkedin.com/in/siphesihle-thomo/"
						className="mr-5"
					>
						<svg
							className="transition ease-in-out text-slate-300 hover:text-lime-500 hover:scale-110
            duration-150"
							width={30}
							height={30}
						>
							<use xlinkHref="/appIcons.svg#linkedin" />
						</svg>
					</Link>

					<Link href="https://github.com/Sean-Thomo">
						<svg
							className="transition ease-in-out text-slate-300 hover:text-lime-500 hover:scale-110
            duration-150"
							width={30}
							height={30}
						>
							<use xlinkHref="/appIcons.svg#github" />
						</svg>
					</Link>
				</div>
				<a
					className="text-lime-500 w-32 border hover border-lime-500
          focus:ring-4 focus:outline-none focus-ring-lime-500 font-medium rounded-xl text-sm px-5
          py-2.5 text-center mt-4 transition duration-150 ease-in-out hover:bg-lime-500 hover:text-slate-950
          hover:scale-110"
					href="mailto:seansthomo@gmail.com"
				>
					Contact
				</a>
			</div>
		</section>
	);
}
