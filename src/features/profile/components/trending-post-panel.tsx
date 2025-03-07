export default function TrendingPostPanel() {
	return (
		<div className="p-4 space-y-4 bg-white shadow-md rounded-md flex flex-col">
			<span className="font-bold text-2xl">Trending Post</span>
			{Array.from({ length: 3 }).map((_, index) => (
				<div
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					className="bg-gray-400 hover:bg-gray-400/80 transition-colors duration-300 ease-in-out cursor-pointer h-40"
				/>
			))}
		</div>
	);
}
