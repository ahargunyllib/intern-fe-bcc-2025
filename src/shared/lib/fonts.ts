import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
	subsets: ["latin"],
	variable: "--font-plus-jakarta-sans",
	weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const fontVariables = `${plusJakartaSans.variable}`;
