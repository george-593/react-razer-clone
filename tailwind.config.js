/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"razer-green": "#47E10C",
				"razer-light-black": "#222222",
			},
			fontFamily: {
				razerF5: ["RazerF5", "Arial", "Helvetica", "sans-serif"],
			},
		},
	},
	plugins: [],
};
