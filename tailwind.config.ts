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
			fontSize: {
				"desktop-h1": "4.5rem",
				"desktop-h2": "3.5rem",
				"desktop-h3": "1.5rem",
				"desktop-h4": "1rem",
				"mobile-h1": "1.75rem",
				"mobile-h2": "1.5rem",
				"mobile-h3": "1.25rem",
				"mobile-h4": "1rem",
			},
			colors: {
				background: "rgb(var(--background))",
				foreground: "rgb(var(--foreground))",
				primary: {
					DEFAULT: "rgb(var(--primary))",
					foreground: "rgb(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "rgb(var(--secondary))",
					foreground: "rgb(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "rgb(var(--muted))",
					foreground: "rgb(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "rgb(var(--accent))",
					foreground: "rgb(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "rgb(var(--destructive))",
					foreground: "rgb(var(--destructive-foreground))",
				},
				border: "rgb(var(--border))",
				input: "rgb(var(--input))",
				ring: "rgb(var(--ring))",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
