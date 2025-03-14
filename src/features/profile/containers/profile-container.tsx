"use client";

import CatalogPanel from "@/features/profile/components/catalog-panel";
import CreatePostForm from "@/features/profile/components/create-post-form";
import ProfilePanel from "@/features/profile/components/profile-panel";

export default function ProfileContainer() {
	return (
		<div className="relative flex flex-col gap-6 w-full">
			<ProfilePanel user={dummyUser} />
			<CatalogPanel catalogs={dummyCatalogs} />
			<CreatePostForm />
		</div>
	);
}

const dummyUser = {
	banner: "https://picsum.photos/seed/maaf/1920/1080",
	profile_picture: "https://picsum.photos/seed/ga/128/128",
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
		url: "https://picsum.photos/seed/di/1920/1080",
	},
	{
		name: "Catalog 2",
		url: "https://picsum.photos/seed/integrasi/1920/1080",
	},
	{
		name: "Catalog 3",
		url: "https://picsum.photos/seed/hehe/1920/1080",
	},
];
