import { MdiHome } from "@/shared/components/icons";
import Input from "@/shared/components/ui/input";
import Image from "next/image";

export default function Page() {
	return (
		<div className="flex flex-col gap-4 w-full">
			<div className="p-4 bg-secondary shadow-md rounded-md">
				<div className="relative">
					<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 pe-3 peer-disabled:opacity-50">
						<MdiHome />
					</div>
					<Input className="placeholder:font-light placeholder:text-xs bg-white border ps-12 peer" />
				</div>
			</div>
			<div className="flex flex-row justify-around divide-x-2 bg-secondary shadow-md rounded-md">
				<span className="hover:bg-primary/20 hover:cursor-pointer transition-all duration-300 ease-in-out py-4 w-full flex items-center justify-center text-xs sm:text-base">
					Lokasi
				</span>
				<span className="hover:bg-primary/20 hover:cursor-pointer transition-all duration-300 ease-in-out py-4 w-full flex items-center justify-center text-xs sm:text-base">
					Tampilan
				</span>
				<span className="hover:bg-primary/20 hover:cursor-pointer transition-all duration-300 ease-in-out py-4 w-full flex items-center justify-center text-xs sm:text-base">
					Terbaru
				</span>
				<span className="hover:bg-primary/20 hover:cursor-pointer transition-all duration-300 ease-in-out py-4 w-full flex items-center justify-center text-xs sm:text-base">
					Kategori
				</span>
			</div>
			{Array.from({ length: 4 }).map((_, index) => (
				<div
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					className="w-full p-4 bg-white shadow-md rounded-md flex flex-col gap-2"
				>
					<div className="flex flex-row justify-between">
						<div className="flex flex-row items-center justify-center gap-2">
							<div className="relative size-12">
								<Image src="/logo.png" alt="Locapreneur Logo" fill />
							</div>
							<div className="flex flex-col font-bold leading-none">
								<span>Display Name</span>
								<span className="text-sm">Location</span>
							</div>
						</div>
						<div className="flex flex-col text-end text-sm">
							<span>Date</span>
							<span>Time</span>
						</div>
					</div>
					<p className="font-medium text-sm text-justify">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, minus
						perferendis et neque vitae provident ab id itaque nulla amet quo a
						natus quibusdam, accusantium aspernatur, nisi quos animi labore
						laboriosam? Unde blanditiis voluptates cupiditate sapiente eius quis
						sunt dolores.
					</p>
					<div className="bg-gray-400 h-40" />
					<div className="flex flex-row items-start justify-between">
						<div className="flex flex-row gap-2">
							<div className="flex flex-row items-center gap-1">
								<MdiHome />
								<span>10</span>
							</div>
							<div className="flex flex-row items-center gap-1">
								<MdiHome />
								<span>10</span>
							</div>
							<div className="flex flex-row items-center gap-1">
								<MdiHome />
								<span>10</span>
							</div>
						</div>
						<div className="flex flex-row gap-2">
							<div className="bg-transparent border border-primary rounded-full text-sm font-medium text-black px-2 py-1">
								Tag 1
							</div>
							<div className="bg-transparent border border-primary rounded-full text-sm font-medium text-black px-2 py-1">
								Tag 2
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
