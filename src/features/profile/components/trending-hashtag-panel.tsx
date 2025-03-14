type Props = {
	trendingHashtags: string[];
};

export default function TrendingHashtagPanel({ trendingHashtags }: Props) {
	return (
		<div className="p-4 space-y-4 bg-white shadow-md rounded-md flex flex-col">
			<span className="font-bold text-2xl">Trending Hashtag</span>
			{trendingHashtags.map((tag) => (
				<div
					key={tag}
					className="flex flex-row gap-2 items-center cursor-pointer z-20"
				>
					<span className="font-bold text-2xl">#</span>
					<span className="font-semibold text-lg hover:underline hover:underline-offset-4 ">
						{tag}
					</span>
				</div>
			))}
		</div>
	);
}
