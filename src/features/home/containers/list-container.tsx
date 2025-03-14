import ListCard from "@/features/home/components/list-card";
import { Fragment } from "react";

export default function ListContainer() {
	return (
		<Fragment>
			{listDummy.map((list) => (
				<ListCard {...list} key={list.description} />
			))}
		</Fragment>
	);
}

const listDummy: {
	profilePicture: string;
	displayName: string;
	location: string;
	date: string;
	time: string;
	description: string;
	image_url?: string;
	likes: number;
	dislikes: number;
	shares: number;
	tags: string[];
}[] = [
	{
		profilePicture: `https://picsum.photos/seed/${Math.random() * 100}/64/64`,
		displayName: "John Doe",
		location: "Jakarta",
		date: "2022-01-01",
		time: "11:00",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et turpis in felis.",
		image_url: `https://picsum.photos/seed/${Math.random() * 100}/1920/1080`,
		likes: 10,
		dislikes: 2,
		shares: 3,
		tags: ["Lorem", "Ipsum", "Dolor"],
	},
];
