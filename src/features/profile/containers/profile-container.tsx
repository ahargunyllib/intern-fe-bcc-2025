"use client";

import CatalogPanel from "@/features/profile/components/catalog-panel";
import ProfilePanel from "@/features/profile/components/profile-panel";

export default function ProfileContainer() {
	return (
		<div className="flex flex-col gap-6 w-full">
			<ProfilePanel user={dummyUser} />
			<CatalogPanel catalogs={dummyCatalogs} />
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

const dummyCatalogs = [
	{
		name: "Catalog 1",
		url: `https://picsum.photos/seed/${Math.random() * 100}/1920/1080`,
	},
	{
		name: "Catalog 2",
		url: `https://picsum.photos/seed/${Math.random() * 100}/1920/1080`,
	},
	{
		name: "Catalog 3",
		url: `https://picsum.photos/seed/${Math.random() * 100}/1920/1080`,
	},
];
