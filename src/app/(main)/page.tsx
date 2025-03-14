import ListContainer from "@/features/home/containers/list-container";
import { LineiconsSearch2 } from "@/shared/components/icons";
import Input from "@/shared/components/ui/input";

export default function Page() {
	return (
		<div className="flex flex-col gap-4 w-full">
			<div className="p-4 bg-secondary shadow-md rounded-md">
				<div className="relative">
					<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 pe-3 peer-disabled:opacity-50">
						<LineiconsSearch2 fontSize={20} />
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
			<ListContainer />
		</div>
	);
}
