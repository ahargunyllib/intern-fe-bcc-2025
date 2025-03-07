"use client";

import CatalogPanel from "@/features/profile/components/catalog-panel";
import ProfilePanel from "@/features/profile/components/profile-panel";
import TrendingHashtagPanel from "@/features/profile/components/trending-hashtag-panel";
import TrendingPostPanel from "@/features/profile/components/trending-post-panel";

export default function ProfileContainer() {
	return (
		<div className="flex flex-row gap-6 w-full p-4 sm:p-20">
			<div className="flex flex-col gap-6 w-full lg:w-3/4">
				<ProfilePanel user={dummyUser} />
				<CatalogPanel catalogs={dummyCatalogs} />
			</div>

			<div className="hidden lg:flex flex-col gap-6 w-1/4 ">
				<TrendingHashtagPanel trendingHashtags={dummyTrendingHashtags} />
				<TrendingPostPanel />
			</div>
		</div>
	);
}

const dummyUser = {
	banner: "/dummy-profile-banner.png",
	profile_picture: "/dummy-profile-picture.png",
	name: "Locapreneur.id",
	username: "umkmutuindonesiamaju",
	description:
		"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ducimus magnam excepturi architecto quidem dolorem. Quibusdam accusamus pariatur quam eveniet!",
	location: "Malang, Jawa Timur, Indonesia",
	skills: ["Kriya"],
};

const dummyTrendingHashtags = [
	"KetoprakGeprek",
	"DimsumViral",
	"BebekGorengJKT",
	"BaksoDisko",
];

const dummyCatalogs = [
	{
		name: "Catalog 1",
		url: "/dummy-catalog-1.png",
	},
	{
		name: "Catalog 2",
		url: "/dummy-catalog-2.png",
	},
	{
		name: "Catalog 3",
		url: "/dummy-catalog-3.png",
	},
];
