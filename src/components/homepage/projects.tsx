import React from "react";
import Link from "next/link";

export default function Projects() {
	return (
		<section className="mx-10">
			<div className="flex justify-center">
				<div
					id="projects"
					className="grid gap-4 justify-center items-center sm:grid-cols-3 md:w-[1024px]"
				>
					<hr className="h-1 border-0 rounded bg-lime-600 col-span-2" />
					<h2 className="flex justify-end">
						<span className="text-lime-500">02. </span>Projects
					</h2>
				</div>
			</div>

			<section className="flex justify-center">
				<div className="grid gap-6 justify-center items-center py-16 md:grid-cols-2 md:w-[1024px]">
					<div
						className="mx-auto rounded-xl p-6 bg-slate-500/10 shadow-lg space-y-3 transition
				    duration-150 ease-in-out hover:bg-slate-500/20 hover:ring-lime-500/30 hover:-translate-y-1 group"
					>
						<div className="flex justify-between items-center">
							<h1 className="text-lime-500 group-hover:text-lime-500/70 text-sm font-semibold">
								Ubuntu Health Back-End API
							</h1>

							<div className="flex">
								{/* <Link href="" className="m-5">
									<svg
										className="transition ease-in-out text-lime-500 hover:text-lime-500/70
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
										className="transition ease-in-out text-lime-500 hover:text-lime-500/70
                  hover:scale-110 duration-150"
										width={31}
										height={30}
									>
										<use xlinkHref="/appIcons.svg#github" />
									</svg>
								</Link>
							</div>
						</div>

						<p className="group-hover:text-lime-500/70 text-sm">
							The Ubuntu Health API is a modern healthcare management system
							designed to address inefficiencies in traditional healthcare
							systems, providing a comprehensive solution for managing patient
							data, appointments, and medical records.
						</p>

						<div className="flex text-sm text-lime-500">
							<p className="pr-3 border-r-2">C#</p>
							<p className="pr-3 pl-3 border-r-2">.NET Core</p>
							<p className="pl-3">SQLite</p>
						</div>
					</div>

					<div
						className="mx-auto rounded-xl p-6 bg-slate-500/10 shadow-lg space-y-3 transition
				    duration-150 ease-in-out hover:bg-slate-500/20 hover:ring-lime-500/30 hover:-translate-y-1 group"
					>
						<div className="flex justify-between items-center">
							<h1 className="text-lime-500 group-hover:text-lime-500/70 text-sm font-semibold">
								Ubuntu Health (Front-End)
							</h1>

							<div className="flex">
								{/* <Link href="" className="m-5">
									<svg
										className="transition ease-in-out text-lime-500 hover:text-lime-500/70
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
										className="transition ease-in-out hover:text-lime-500/70
                  hover:scale-110 duration-150"
										width={31}
										height={30}
									>
										<use xlinkHref="/appIcons.svg#github" />
									</svg>
								</Link>
							</div>
						</div>

						<p className="group-hover:text-lime-500/70 text-sm">
							Ubuntu Health is a modern healthcare management system designed to
							address inefficiencies in traditional healthcare systems,
							providing a comprehensive solution for managing patient data,
							appointments, and medical records.
						</p>

						<div className="flex text-sm text-lime-500">
							<p className="pr-3 border-r-2">NEXT.js</p>
							<p className="pr-3 pl-3 border-r-2">TailwindCSS</p>
							<p className="pl-3">TypeScript</p>
						</div>
					</div>

					<div
						className="mx-auto rounded-xl p-6 bg-slate-500/10 shadow-lg space-y-3 transition
				    duration-150 ease-in-out hover:bg-slate-500/20 hover:ring-lime-500/30 hover:-translate-y-1 group"
					>
						<div className="flex justify-between items-center">
							<h1 className="text-lime-500 group-hover:text-lime-500/70 text-sm font-semibold">
								Backend Developer Challenge
							</h1>

							<div className="flex">
								<Link href="/learning" className="m-4">
									<svg
										className="transition ease-in-out text-lime-500 hover:text-lime-500/70
                  hover:scale-110 duration-150"
										width={24}
										height={24}
									>
										<use xlinkHref="/appIcons.svg#external-link" />
									</svg>
								</Link>
							</div>
						</div>

						<p className="group-hover:text-lime-500/70 text-sm">
							Test your backend development skills across 4 key areas: API
							Fundamentals, Database Design, System Architecture, and Debugging
							& Performance. Answer questions quickly for bonus points and learn
							from detailed explanations.
						</p>

						<div className="flex text-sm text-lime-500">
							<p className="pr-3 border-r-2">React</p>
							<p className="pr-3 pl-3 border-r-2">TypeScript</p>
							<p className="pl-3">TailwindCSS</p>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}
