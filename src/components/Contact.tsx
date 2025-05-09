import React from "react";

export default function Contact() {
	return (
		<>
			<div className="py-12 bg-[#0C121B] text-slate-200">
				<div
					id="contact"
					className="grid gap-4 justify-center items-center sm:grid-cols-3 sm:mx-10"
				>
					<h2>
						<span className="text-lime-500">04. </span>Contact
					</h2>
					<hr className="h-1 max-w-lg border-0 rounded bg-lime-500 col-span-2" />
				</div>

				<div className="flex flex-col justify-center items-center">
					<h2 className="m-6 text-center font-semibold text-2xl">
						Let&rsquo;s Build Something Together!
					</h2>
					<a
						className="text-lime-600 hover:text-white border border-lime-600
                    focus:ring-4 focus:outline-none focus:ring-lime-300
                    font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-12 transition
                    duration-150 ease-in-out hover:bg-lime-600 hover:scale-110"
						href="mailto:seansthomo@gmail.com"
					>
						Say Hi 👋
					</a>
				</div>
			</div>
		</>
	);
}
