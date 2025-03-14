import SearchBar from "@/shared/components/search-bar";
import Image from "next/image";

export default function Page() {
	return (
		<div className="flex flex-col gap-4 w-full">
			<SearchBar />
			<div className="w-full p-4 bg-white shadow-md rounded-md flex flex-col gap-2">
				<h2 className="font-bold text-2xl">Edukasi</h2>
				<div className="flex flex-row gap-4 w-full overflow-x-auto">
					{educations.map((education) => (
						<div
							key={education.id}
							className="relative cursor-pointer h-40 aspect-video"
						>
							<Image
								src={education.image_url}
								alt="Education"
								fill
								objectFit="cover"
							/>
						</div>
					))}
				</div>
			</div>
			<div className="w-full p-4 bg-white shadow-md rounded-md flex flex-col gap-2">
				<h2 className="font-bold text-2xl">Berita</h2>
				<div className="flex flex-col gap-4 w-full flex-shrink-0">
					{news.map((news) => (
						<div
							key={news.id}
							className="flex flex-col lg:flex-row gap-4 hover:cursor-pointer"
						>
							<div className="relative cursor-pointer h-40 w-full lg:w-64 flex-shrink-0">
								<Image src={news.image_url} alt="News" fill objectFit="cover" />
							</div>
							<div className="flex flex-col leading-none">
								<span className="font-semibold text-xl">{news.title}</span>
								<span className="font-semibold text-sm">
									{Intl.DateTimeFormat("id-ID", { dateStyle: "full" }).format(
										new Date(news.date),
									)}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

const educations = [
	{
		id: 1,
		image_url: `https://picsum.photos/seed/${Math.random()}/640/480`,
	},
	{
		id: 2,
		image_url: `https://picsum.photos/seed/${Math.random()}/640/480`,
	},
	{
		id: 3,
		image_url: `https://picsum.photos/seed/${Math.random()}/640/480`,
	},
	{
		id: 4,
		image_url: `https://picsum.photos/seed/${Math.random()}/640/480`,
	},
];

const news = [
	{
		id: 1,
		image_url: `https://picsum.photos/seed/${Math.random()}/640/480`,
		title:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae autem deleniti nam eaque vel rem aliquid culpa esse minus voluptate dicta consequatur aperiam veritatis doloremque ad quos, repellat at, ipsum quia. Nihil.",
		date: "2025-02-27T07:00:00.000Z",
	},
	{
		id: 2,
		image_url: `https://picsum.photos/seed/${Math.random()}/640/480`,
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		date: "2025-03-02T07:00:00.000Z",
	},
	{
		id: 3,
		image_url: `https://picsum.photos/seed/${Math.random()}/640/480`,
		title:
			"Recusandae autem deleniti nam eaque vel rem aliquid culpa esse minus voluptate dicta consequatur aperiam veritatis doloremque ad quos, repellat at, ipsum quia. Nihil.",
		date: "2025-03-05T07:00:00.000Z",
	},
];
