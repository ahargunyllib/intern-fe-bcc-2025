import TrendingHashtagPanel from "@/features/profile/components/trending-hashtag-panel";
import TrendingPostPanel from "@/features/profile/components/trending-post-panel";
import Header from "@/shared/components/header";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="w-full min-h-screen h-screen flex flex-col items-center">
			<Header />
			<div className="flex flex-row gap-6 w-full px-4 py-2 sm:px-20 sm:py-10 ">
				<div className="flex flex-col gap-6 w-full lg:w-3/4">{children}</div>

				<div className="hidden lg:flex flex-col gap-6 w-1/4 ">
					<TrendingHashtagPanel trendingHashtags={dummyTrendingHashtags} />
					<TrendingPostPanel trendingPosts={dummyTrendingPosts} />
				</div>
			</div>
		</div>
	);
}

const dummyTrendingHashtags = [
	"KetoprakGeprek",
	"DimsumViral",
	"BebekGorengJKT",
	"BaksoDisko",
];

const dummyTrendingPosts: {
	id: string;
	profilePicture: string;
	displayName: string;
	image_url: string;
}[] = [
	{
		id: "1",
		profilePicture: "https://picsum.photos/seed/hai/64/64",
		displayName: "John Doe",
		image_url: "https://picsum.photos/seed/hehe/1920/1080",
	},
	{
		id: "2",
		profilePicture: "https://picsum.photos/seed/ini/64/64",
		displayName: "Jane Doe",
		image_url: "https://picsum.photos/seed/ceritanya/1920/1080",
	},
	{
		id: "3",
		profilePicture: "https://picsum.photos/seed/easter/64/64",
		displayName: "John Doe",
		image_url: "https://picsum.photos/seed/egg/1920/1080",
	},
];
