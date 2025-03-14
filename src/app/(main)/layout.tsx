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
					<TrendingPostPanel />
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
