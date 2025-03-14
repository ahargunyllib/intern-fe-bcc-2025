import Image from "next/image";

type Props = {
	trendingPosts: {
		id: string;
		profilePicture: string;
		displayName: string;
		image_url: string;
	}[];
};

export default function TrendingPostPanel({ trendingPosts }: Props) {
	return (
		<div className="p-4 space-y-4 bg-white shadow-md rounded-md flex flex-col">
			<span className="font-bold text-2xl">Trending Post</span>
			{trendingPosts.map((trendingPost) => (
				<div
					key={trendingPost.id}
					className="flex flex-col gap-2 hover:cursor-pointer"
				>
					<div className="flex flex-row items-center gap-2">
						<div className="relative size-8">
							<Image
								src={trendingPost.profilePicture}
								alt="Profile Picture"
								fill
								className="rounded-full"
							/>
						</div>
						<span className="font-semibold">{trendingPost.displayName}</span>
					</div>
					<div className="relative h-40">
						<Image
							src={trendingPost.image_url}
							alt="Image"
							fill
							objectFit="cover"
						/>
					</div>
				</div>
			))}
		</div>
	);
}
