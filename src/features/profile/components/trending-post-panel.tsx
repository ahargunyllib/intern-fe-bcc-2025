import Image from "next/image";

export default function TrendingPostPanel() {
	return (
		<div className="p-4 space-y-4 bg-white shadow-md rounded-md flex flex-col">
			<span className="font-bold text-2xl">Trending Post</span>
			{Array.from({ length: 3 }).map((_, index) => (
				<div
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					className="flex flex-col gap-2 hover:cursor-pointer"
				>
					<div className="flex flex-row items-center gap-2">
						<div className="relative size-8">
							<Image
								src={`https://picsum.photos/seed/${Math.random() * 100}/64/64`}
								alt="Profile Picture"
								fill
								className="rounded-full"
							/>
						</div>
						<span className="font-semibold">displayName</span>
					</div>
					<div className="bg-gray-400 hover:bg-gray-400/80 transition-colors duration-300 ease-in-out h-40" />
				</div>
			))}
		</div>
	);
}
