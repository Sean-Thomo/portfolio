import React from "react";
import Link from "next/link";

export default function Projects() {
	return (
		<section className="bg-[#0C121B] text-slate-200">
			<div
				id="projects"
				className="grid gap-4 justify-center items-center sm:grid-cols-3 sm:mx-10"
			>
				<hr className="h-1 max-w-lg border-0 rounded bg-lime-500 col-span-2" />
				<h2 className="flex justify-end">
					<span className="text-lime-500">02. </span>Projects
				</h2>
			</div>

			<div className="grid gap-6 justify-center items-center py-16 sm:grid-cols-2 lg:grid-cols-3">
				<div
					className="max-w-xs mx-auto rounded-xl p-6 bg-mirage-950 ring-1 ring-slate-950/5 shadow-lg space-y-3
                transition duration-150 ease-in-out hover:bg-mirage-900 hover:ring-mirage-700 hover:scale-110 
                hover:-translate-y-1"
				>
					<div className="flex justify-between items-center">
						<h1 className="text-slate-200 group-hover:text-white text-sm font-semibold">
							Coming Soon
						</h1>

						<div className="flex">
							<Link href="" className="m-5">
								<svg
									className="transition ease-in-out text-slate-200 hover:text-lime-600 hover:scale-110 duration-150"
									width={24}
									height={24}
								>
									<use xlinkHref="/appIcons.svg#external-link" />
								</svg>
							</Link>
							<Link href="" className="m-5">
								<svg
									className="transition ease-in-out text-slate-200 hover:text-lime-600 hover:scale-110 duration-150"
									width={31}
									height={30}
								>
									<use xlinkHref="/appIcons.svg#github" />
								</svg>
							</Link>
						</div>
					</div>

					<p className="text-slate-200 group-hover:text-white text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
						accusamus nobis, minima quia, nostrum, perspiciatis beatae veniam
						natus fugiat vel quisquam doloremque quidem cupiditate nulla.
						Voluptates voluptatem ad odio reiciendis!
					</p>

					<div className="flex text-sm text-lime-600">
						<p className="m-2">HTML/CSS</p>
						<p className="m-2">JavaScript</p>
						<p className="m-2">JavaScript</p>
					</div>
				</div>

				<div
					className="max-w-xs mx-auto rounded-xl p-6 bg-mirage-950 ring-1 ring-slate-950/5 shadow-lg space-y-3
                transition duration-150 ease-in-out hover:bg-mirage-900 hover:ring-mirage-700 hover:scale-110 
                hover:-translate-y-1"
				>
					<div className="flex justify-between items-center">
						<h1 className="text-slate-200 group-hover:text-white text-sm font-semibold">
							Coming Soon
						</h1>

						<div className="flex">
							<Link href="" className="m-5">
								<svg
									className="transition ease-in-out text-slate-200 hover:text-lime-600 hover:scale-110 duration-150"
									width={24}
									height={24}
								>
									<use xlinkHref="/appIcons.svg#external-link" />
								</svg>
							</Link>
							<Link href="" className="m-5">
								<svg
									className="transition ease-in-out text-slate-200 hover:text-lime-600 hover:scale-110 duration-150"
									width={31}
									height={30}
								>
									<use xlinkHref="/appIcons.svg#github" />
								</svg>
							</Link>
						</div>
					</div>

					<p className="text-slate-200 group-hover:text-white text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
						accusamus nobis, minima quia, nostrum, perspiciatis beatae veniam
						natus fugiat vel quisquam doloremque quidem cupiditate nulla.
						Voluptates voluptatem ad odio reiciendis!
					</p>

					<div className="flex text-sm text-lime-600">
						<p className="m-2">HTML/CSS</p>
						<p className="m-2">JavaScript</p>
						<p className="m-2">JavaScript</p>
					</div>
				</div>

				<div
					className="max-w-xs mx-auto rounded-xl p-6 bg-mirage-950 ring-1 ring-slate-950/5 shadow-lg space-y-3
                transition duration-150 ease-in-out hover:bg-mirage-900 hover:ring-mirage-700 hover:scale-110 
                hover:-translate-y-1"
				>
					<div className="flex justify-between items-center">
						<h1 className="text-slate-200 group-hover:text-white text-sm font-semibold">
							Coming Soon
						</h1>

						<div className="flex">
							<Link href="" className="m-5">
								<svg
									className="transition ease-in-out text-slate-200 hover:text-lime-600 hover:scale-110 duration-150"
									width={24}
									height={24}
								>
									<use xlinkHref="/appIcons.svg#external-link" />
								</svg>
							</Link>
							<Link href="" className="m-5">
								<svg
									className="transition ease-in-out text-slate-200 hover:text-lime-600 hover:scale-110 duration-150"
									width={31}
									height={30}
								>
									<use xlinkHref="/appIcons.svg#github" />
								</svg>
							</Link>
						</div>
					</div>

					<p className="text-slate-200 group-hover:text-white text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
						accusamus nobis, minima quia, nostrum, perspiciatis beatae veniam
						natus fugiat vel quisquam doloremque quidem cupiditate nulla.
						Voluptates voluptatem ad odio reiciendis!
					</p>

					<div className="flex text-sm text-lime-600">
						<p className="m-2">HTML/CSS</p>
						<p className="m-2">JavaScript</p>
						<p className="m-2">JavaScript</p>
					</div>
				</div>
			</div>
		</section>
	);
}
