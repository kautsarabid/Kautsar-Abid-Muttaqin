/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				display: ["Playfair Display", "serif"],
				base: ["Raleway", "sans-serif"],
				logo: ["Honk", "system-ui"],
			},
			colors: {
				black: "#1A1A1A",
				white: "#EFEFEF",
				primary: "#2E7099",
				secondary: "#6F3434",
			},
			boxShadow: {
				"custom-active":
					"2px 2px 8px 0 rgba(12, 11, 11, 65), -2px -2px 2px 0 rgba(136, 136, 136, 0.5)",
				"custom-hover":
					"inset -2px -2px 2px 0 rgba(136, 136, 136, 0.5), inset 4px 4px 10px 0 rgba(12, 11, 11, 65)",
			},
			transitionProperty: {
				width: "width",
			},
		},
	},
	plugins: [],
};
