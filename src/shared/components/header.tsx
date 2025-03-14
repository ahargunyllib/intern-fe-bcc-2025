"use client";

import {
	LucideLogOut,
	LucideX,
	MaterialSymbolsPerson2,
	MdiHome,
	MingcuteBookLine,
	RiCustomerService2Fill,
} from "@/shared/components/icons";
import { LucideMenu } from "@/shared/components/icons/lucide-menu";
import Button from "@/shared/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

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

	const [isOpen, setOpen] = useState(false);

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
							onClick={() => {}}
						/>
						<RiCustomerService2Fill
							className="text-white cursor-pointer"
							fontSize={24}
							onClick={() => {}}
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
			<div className="flex w-12 shrink lg:hidden items-end justify-end">
				<Button
					variant="ghost"
					onClick={() => setOpen(!isOpen)}
					className="p-0 m-0"
				>
					{isOpen ? (
						<LucideX fontSize={24} className="text-white" />
					) : (
						<LucideMenu fontSize={24} className="text-white" />
					)}
				</Button>
				{isOpen && (
					<div className="absolute top-24 flex flex-col w-full right-0 bg-primary shadow-lg py-4 gap-4">
						{routes.map((route) => (
							<div
								key={route.name}
								className="flex flex-col gap-2 px-4 sm:px-20 hover:tracking-wider transition-all duration-300 ease-in-out"
								onClick={() => setOpen(false)}
								onKeyDown={() => {}}
							>
								<Link
									href={route.href}
									className="flex justify-between items-center"
								>
									<span className="text-lg font-bold text-white">
										{route.name}
									</span>
								</Link>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
