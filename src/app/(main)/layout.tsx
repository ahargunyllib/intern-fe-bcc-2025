import Header from "@/shared/components/header";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="w-full min-h-screen h-screen flex flex-col items-center">
			<Header />
			{children}
		</div>
	);
}
