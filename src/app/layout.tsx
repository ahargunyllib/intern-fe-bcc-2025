import Provider from "@/shared/components/provider";
import { fontVariables } from "@/shared/lib/fonts";
import "@/shared/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Locapreneur",
	description:
		"Platform yang responsif dan ramah pengguna untuk mendukung UMKM (Usaha Mikro, Kecil, dan Menengah) dalam mempromosikan produk dan jasa, menganalisis tren pasar, mendapatkan edukasi keuangan, serta berinteraksi dengan komunitas.",
	icons: "/logo.png",
	openGraph: {
		title: "Locapreneur",
		description:
			"Platform yang responsif dan ramah pengguna untuk mendukung UMKM (Usaha Mikro, Kecil, dan Menengah) dalam mempromosikan produk dan jasa, menganalisis tren pasar, mendapatkan edukasi keuangan, serta berinteraksi dengan komunitas.",
	},
	twitter: {
		title: "Locapreneur",
		description:
			"Platform yang responsif dan ramah pengguna untuk mendukung UMKM (Usaha Mikro, Kecil, dan Menengah) dalam mempromosikan produk dan jasa, menganalisis tren pasar, mendapatkan edukasi keuangan, serta berinteraksi dengan komunitas.",
		card: "summary_large_image",
	},
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
