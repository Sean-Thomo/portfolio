import React from "react";
import Link from "next/link";

export default function Projects() {
	return (
		<section className="bg-[#0C121B] text-slate-200 px-4">
			<div className="flex justify-center">
				<div
					id="projects"
					className="grid gap-4 justify-center items-center mx-10 sm:grid-cols-3 md:w-[1024px]"
				>
					<hr className="h-1 border-0 rounded bg-lime-500 col-span-2" />
					<h2 className="flex justify-end">
						<span className="text-lime-500">02. </span>Projects
					</h2>
				</div>
			</div>

			<div className="grid justify-center flex-col md:flex-row">
				<div className="grid gap-6 justify-center items-center py-16 sm:grid-cols-2 lg:grid-cols-3">
					<div
						className="w-[19em] mx-auto rounded-xl p-6 bg-mirage-950 shadow-lg space-y-3 transition
				    duration-150 ease-in-out hover:bg-mirage-900 hover:ring-mirag hover:-translate-y-1"
					>
						<div className="flex justify-between items-center">
							<h1 className="text-lime-600 group-hover:text-white text-sm font-semibold">
								Ubuntu Health Back-End API
							</h1>

							<div className="flex">
								{/* <Link href="" className="m-5">
									<svg
										className="transition ease-in-out text-slate-200 hover:text-lime-600
                  hover:scale-110 duration-150"
										width={24}
										height={24}
									>
										<use xlinkHref="/appIcons.svg#external-link" />
									</svg>
								</Link> */}
								<Link
									href="https://github.com/Sean-Thomo/ubuntu-health-api"
									className="m-4"
									target="_blank"
								>
									<svg
										className="transition ease-in-out text-slate-200 hover:text-lime-600
                  hover:scale-110 duration-150"
										width={31}
										height={30}
									>
										<use xlinkHref="/appIcons.svg#github" />
									</svg>
								</Link>
							</div>
						</div>

						<p className="text-slate-200 group-hover:text-white text-sm">
							The Ubuntu Health API is a modern healthcare management system
							designed to address inefficiencies in traditional healthcare
							systems, providing a comprehensive solution for managing patient
							data, appointments, and medical records.
						</p>

						<div className="flex text-sm text-lime-600">
							<p className="pr-3 border-r-2">C#</p>
							<p className="pr-3 pl-3 border-r-2">.NET Core</p>
							<p className="pl-3">SQLite</p>
						</div>
					</div>

					<div
						className="w-[19em] mx-auto rounded-xl p-6 bg-mirage-950 shadow-lg space-y-3 transition
				    duration-150 ease-in-out hover:bg-mirage-900 hover:ring-mirag hover:-translate-y-1"
					>
						<div className="flex justify-between items-center">
							<h1 className="text-lime-600 group-hover:text-white text-sm font-semibold">
								Ubuntu Health (Front-End)
							</h1>

							<div className="flex">
								{/* <Link href="" className="m-5">
									<svg
										className="transition ease-in-out text-slate-200 hover:text-lime-600
                  hover:scale-110 duration-150"
										width={24}
										height={24}
									>
										<use xlinkHref="/appIcons.svg#external-link" />
									</svg>
								</Link> */}
								<Link
									href="https://github.com/Sean-Thomo/ubuntu-health"
									className="m-4"
									target="_blank"
								>
									<svg
										className="transition ease-in-out text-slate-200 hover:text-lime-600
                  hover:scale-110 duration-150"
										width={31}
										height={30}
									>
										<use xlinkHref="/appIcons.svg#github" />
									</svg>
								</Link>
							</div>
						</div>

						<p className="text-slate-200 group-hover:text-white text-sm">
							The Ubuntu Health API is a modern healthcare management system
							designed to address inefficiencies in traditional healthcare
							systems, providing a comprehensive solution for managing patient
							data, appointments, and medical records.
						</p>

						<div className="flex text-sm text-lime-600">
							<p className="pr-3 border-r-2">NEXT.js</p>
							{/* <p className="pr-3 pl-3 border-r-2">TailwindCSS</p> */}
							<p className="pl-3">TailwindCSS</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
