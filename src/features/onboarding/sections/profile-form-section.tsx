import { useOnboarding } from "@/features/onboarding/hooks/use-onboarding";
import { LucideEye } from "@/shared/components/icons";
import Button from "@/shared/components/ui/button";
import Input from "@/shared/components/ui/input";
import type { ReactNode } from "react";

export default function ProfileFormSection() {
	const { nextStep } = useOnboarding();

	return (
		<div className="h-full md:h-screen flex items-center justify-center p-8 pt-32">
			<div className="flex flex-col items-center justify-center gap-8 w-3/4">
				<div className="flex flex-col items-center justify-center gap-4 w-full p-4 bg-secondary rounded-xl">
					<h1 className="font-bold text-4xl text-center">
						Masukkan Username Anda
					</h1>
					<Input placeholder="Username" className="w-full sm:w-fit bg-accent" />
				</div>
				<div className="flex flex-col items-center justify-center gap-4 w-full p-4 bg-secondary rounded-xl">
					<h1 className="font-bold text-3xl text-center">
						Pilih Kategori UMKM yang ingin Anda lihat
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 w-full h-fit">
						{categories.map((category) => (
							<div
								key={category.name}
								className="flex flex-row items-center justify-start gap-4 p-4 bg-accent hover:bg-accent/80 hover:-translate-y-1 transition-all duration-300 ease-in-out border rounded-xl flex-shrink-0 hover:cursor-pointer"
							>
								{category.icon}
								<span className="font-bold text-lg">{category.name}</span>
							</div>
						))}
					</div>
				</div>

				<Button onClick={() => nextStep()} type="button" className="w-full">
					Simpan
				</Button>
			</div>
		</div>
	);
}

const categories: {
	icon: ReactNode;
	name: string;
}[] = [
	{
		icon: <LucideEye width={24} height={24} className="flex-shrink-0" />,
		name: "Kuliner",
	},
	{
		icon: <LucideEye width={24} height={24} className="flex-shrink-0" />,
		name: "Pendidikan",
	},
	{
		icon: <LucideEye width={24} height={24} className="flex-shrink-0" />,
		name: "Pakaian",
	},
	{
		icon: <LucideEye width={24} height={24} className="flex-shrink-0" />,
		name: "Jasa",
	},
	{
		icon: <LucideEye width={24} height={24} className="flex-shrink-0" />,
		name: "Kriya",
	},
	{
		icon: <LucideEye width={24} height={24} className="flex-shrink-0" />,
		name: "Kesehatan & Kecantikan",
	},
	{
		icon: <LucideEye width={24} height={24} className="flex-shrink-0" />,
		name: "Teknologi",
	},
	{
		icon: <LucideEye width={24} height={24} className="flex-shrink-0" />,
		name: "Pertanian",
	},
];
