import Image from "next/image";

export default function Header() {
	return (
		<div className="py-6 px-20 w-full bg-primary absolute flex flex-row gap-4 items-center">
			<div className="relative size-16">
				<Image src="/logo.png" alt="Locapreneur Logo" fill />
			</div>
			<span className="text-white font-extrabold text-xl hidden sm:block">
				Locapreneur.id
			</span>
		</div>
	);
}
