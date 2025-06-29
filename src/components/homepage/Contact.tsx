import React from "react";

export default function Contact() {
	return (
		<section className="bg-primary text-text px-4">
			<div className="flex justify-center">
				<div
					id="contact"
					className="grid gap-4 justify-center items-center mx-10 sm:grid-cols-3 md:w-[1024px]"
				>
					<h2>
						<span className="text-secondary">04. </span>Contact
					</h2>
					<hr className="h-1 border-0 rounded bg-secondary col-span-2" />
				</div>
			</div>

			<div className="py-16">
				<div className="flex flex-col justify-center items-center">
					<h2 className="m-6 text-center font-semibold text-2xl">
						Let&rsquo;s Build Something Together!
					</h2>
					<a
						className="text-secondary hover:text-text-light border border-secondary
            focus:ring-4 focus:outline-none focus:ring-secondary/30 font-medium rounded-xl text-sm
            px-5 py-2.5 text-center mr-2 mb-2 mt-12 transition duration-150 ease-in-out
            hover:bg-secondary hover:scale-110"
						href="mailto:seansthomo@gmail.com"
					>
						Say Hi 👋
					</a>
				</div>
			</div>
		</section>
	);
}
