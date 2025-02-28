import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/features/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			sans: ["Inter", "sans-serif"],
		},
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
