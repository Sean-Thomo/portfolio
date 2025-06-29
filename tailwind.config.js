/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				azure: "#0086ff",
				primary: {
					DEFAULT: "#0c121b",
					light: "#141d2b",
					dark: "#0a0f16",
				},
				secondary: {
					DEFAULT: "#9fef00",
					light: "#b5fb20",
					dark: "#73b500",
				},
				text: {
					DEFAULT: "#a4b1cd",
					light: "#ffffff",
					muted: "#8b9bb3",
				},
				lime: {
					50: "#faffe4",
					100: "#f2ffc5",
					200: "#e3ff92",
					300: "#cdff53",
					400: "#b5fb20",
					500: "#9fef00",
					600: "#73b500",
					700: "#578902",
					800: "#466c08",
					900: "#3c5b0c",
					950: "#1d3300",
				},
				mirage: {
					50: "#f4f7fb",
					100: "#e8edf6",
					200: "#ccdaeb",
					300: "#a0bbd9",
					400: "#6c97c4",
					500: "#4a79ad",
					600: "#386091",
					700: "#2e4d76",
					800: "#294363",
					900: "#273a53",
					950: "#141d2b",
				},
			},
		},
	},
	plugins: [],
};
