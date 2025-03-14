import ListContainer from "@/features/home/containers/list-container";
import SearchBar from "@/shared/components/search-bar";

export default function Page() {
	return (
		<div className="flex flex-col gap-4 w-full">
			<SearchBar />
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
