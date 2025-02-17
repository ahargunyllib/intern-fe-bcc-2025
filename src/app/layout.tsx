import Provider from "@/shared/components/provider";
import { fontVariables } from "@/shared/lib/fonts";
import "@/shared/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Intern FE BCC 2025",
	description: "Intern FE BCC 2025 by Kelompok 11",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${fontVariables} antialiased`}>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
