/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				xls: {max: "1536px"},
				xl: {max: "1280px"},
				lg: {max: "1024px"},
				md: {max: "768px"},
				sm: {max: "640px"},
				xs: {max: "460px"},
			},
		},
		fontFamily: {
			sans: ["Plus Jakarta Sans", "sans-serif"],
		},
	},
	plugins: [],
};
