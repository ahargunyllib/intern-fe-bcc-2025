"use client";

import {
	LineiconsSearch2,
	LucideLogOut,
	MaterialSymbolsPerson2,
	MdiHome,
	MingcuteBookLine,
	RiCustomerService2Fill,
} from "@/shared/components/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
	const router = useRouter();
	const routes = [
		{
			name: "Home",
			href: "/",
			icon: <MdiHome fontSize={24} />,
		},
		{
			name: "Profile",
			href: "/profile",
			icon: <MaterialSymbolsPerson2 fontSize={24} />,
		},
		{
			name: "Education",
			href: "/education",
			icon: <MingcuteBookLine fontSize={24} />,
		},
		// {
		// 	name: "Search",
		// 	href: "/search",
		// 	icon: <LineiconsSearch2 fontSize={24} />,
		// },
	];

	return (
		<div className="py-6 px-4 sm:px-20 w-full bg-primary sticky top-0 z-[999] flex flex-row justify-between items-center">
			<div className="flex flex-row gap-4 items-center">
				<div className="relative size-16">
					<Image src="/logo.png" alt="Locapreneur Logo" fill />
				</div>
				<div className="flex-col justify-between flex">
					<span className="text-white font-extrabold text-xl">
						Locapreneur.id
					</span>
					<div className="flex flex-row gap-2">
						<LucideLogOut
							className="text-white cursor-pointer"
							fontSize={24}
							onClick={() => console.log("logout")}
						/>
						<RiCustomerService2Fill
							className="text-white cursor-pointer"
							fontSize={24}
							onClick={() => console.log("customer service")}
						/>
					</div>
				</div>
			</div>
			<div className="hidden lg:flex flex-row gap-8 items-center">
				{routes.map((route) => {
					return (
						<div
							key={route.name}
							className="flex flex-row gap-4 items-center hover:cursor-pointer"
							onClick={() => router.push(route.href)}
							onKeyDown={() => {}}
						>
							<div className="p-2 bg-white rounded-lg hover:bg-white/80 transition-colors duration-300 ease-in-out">
								{route.icon}
							</div>
							<span className="text-white font-bold text-lg hover:tracking-wider transition-all duration-300 ease-in-out">
								{route.name}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}
