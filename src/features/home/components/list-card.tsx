import {
	IconamoonDislike,
	IconamoonLike,
	MdiShare,
} from "@/shared/components/icons";
import Image from "next/image";

type Props = {
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
};

export default function ListCard(props: Props) {
	const {
		profilePicture,
		displayName,
		location,
		date,
		time,
		description,
		image_url,
		likes,
		dislikes,
		shares,
		tags,
	} = props;

	return (
		<div className="w-full p-4 bg-white shadow-md rounded-md flex flex-col gap-2">
			<div className="flex flex-row justify-between">
				<div className="flex flex-row items-center justify-center gap-2">
					<div className="relative size-12">
						<Image
							src={profilePicture}
							alt="Profile Picture"
							fill
							className="rounded-full"
						/>
					</div>
					<div className="flex flex-col font-bold leading-none">
						<span>{displayName}</span>
						<span className="text-sm">{location}</span>
					</div>
				</div>
				<div className="flex flex-col text-end text-sm">
					<span>
						{Intl.DateTimeFormat("id-ID", {
							day: "numeric",
							year: "numeric",
							month: "long",
						}).format(new Date(date))}
					</span>
					<span>{time}</span>
				</div>
			</div>
			<p className="font-medium text-sm text-justify">{description}</p>
			{image_url && (
				<div className="h-48 relative ">
					<Image src={image_url} alt="Image" fill objectFit="cover" />
				</div>
			)}
			<div className="flex flex-row items-start justify-between">
				<div className="flex flex-row gap-2">
					<div className="flex flex-row items-center gap-1 hover:cursor-pointer">
						<IconamoonLike />
						<span>{likes}</span>
					</div>
					<div className="flex flex-row items-center gap-1 hover:cursor-pointer">
						<IconamoonDislike />
						<span>{dislikes}</span>
					</div>
					<div className="flex flex-row items-center gap-1 hover:cursor-pointer">
						<MdiShare />
						<span>{shares}</span>
					</div>
				</div>
				<div className="flex flex-row gap-2">
					{tags.map((tag) => (
						<div
							key={tag}
							className="bg-transparent border border-primary rounded-full text-sm font-medium text-black px-2 py-1"
						>
							{tag}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
