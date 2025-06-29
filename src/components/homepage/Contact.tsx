import React from "react";

export default function Contact() {
	return (
		<section className="mx-10">
			<div className="flex justify-center">
				<div
					id="contact"
					className="grid gap-4 justify-center items-center sm:grid-cols-3 md:w-[1024px]"
				>
					<h2>
						<span className="text-lime-500">04. </span>Contact
					</h2>
					<hr className="h-1 border-0 rounded bg-lime-500 col-span-2" />
				</div>
			</div>

			<div className="py-16">
				<div className="flex flex-col justify-center items-center">
					<h2 className="m-6 text-center font-semibold text-2xl">
						Let&rsquo;s Build Something Together!
					</h2>
					<a
						className="text-lime-500 hover:text-lime-500/70 border border-lime-500
            focus:ring-4 focus:outline-none focus-ring-lime-500 font-medium rounded-xl text-sm
            px-5 py-2.5 text-center mr-2 mb-2 mt-12 transition duration-150 ease-in-out
            hover:bg-lime-500 hover:text-slate-950 hover:scale-110"
						href="mailto:seansthomo@gmail.com"
					>
						Say Hi 👋
					</a>
				</div>
			</div>
		</section>
	);
}
