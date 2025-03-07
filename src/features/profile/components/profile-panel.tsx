import {
	LogosTiktokIcon,
	LogosWhatsappIcon,
	MaterialSymbolsPerson2,
	SimpleIconsShopee,
	SkillIconsInstagram,
} from "@/shared/components/icons";
import Button from "@/shared/components/ui/button";
import Image from "next/image";

type Props = {
	user: {
		banner: string;
		profile_picture: string;
		name: string;
		username: string;
		description: string;
		location: string;
		skills: string[];
		socials?: {
			instagram: string;
			tiktok: string;
			whatsapp: string;
			shopee: string;
		};
	};
};

export default function ProfilePanel({ user }: Props) {
	return (
		<div className="bg-white shadow-md rounded-md">
			<div className="h-64 relative">
				<div className="relative w-full h-full rounded-t-md">
					<Image
						src={user.banner}
						alt="Profile Banner"
						fill
						objectFit="cover"
					/>
				</div>
				<div className="absolute size-40 -bottom-10 left-4 rounded-full bg-white border-4 border-white">
					<Image
						src={user.profile_picture}
						alt="Profile Picture"
						fill
						objectFit="cover"
					/>
				</div>
			</div>
			<div className="px-4 pt-14 pb-4">
				<div className="flex flex-col gap-4 h-full justify-between">
					<div className="flex flex-col sm:flex-row gap-4 sm:justify-between">
						<div className="flex flex-col">
							<span className="font-extrabold text-2xl sm:text-4xl">
								{user.name}
							</span>
							<span className="font-extralight text-xs">@{user.username}</span>
						</div>
						<Button className="flex items-center gap-2 justify-center w-fit bg-transparent border-4 border-primary rounded-full text-black hover:bg-transparent/10">
							<MaterialSymbolsPerson2 />
							Daftar sebagai UMKM
						</Button>
					</div>
					<p className="font-medium">{user.description}</p>
					<span className="font-extralight text-xs">{user.location}</span>
					<div className="flex flex-row justify-between">
						<div className="flex flex-row gap-2 items-center justify-center">
							{user.skills.map((skill) => {
								return (
									<div
										key={skill}
										className="bg-transparent border-4 border-primary rounded-full font-semibold text-black px-2 py-1"
									>
										{skill}
									</div>
								);
							})}
						</div>
						<div className="flex flex-row gap-2 items-center justify-center">
							<div className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-200/80">
								<SkillIconsInstagram fontSize={24} />
							</div>
							<div className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-200/80">
								<LogosTiktokIcon fontSize={24} />
							</div>
							<div className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-200/80">
								<LogosWhatsappIcon fontSize={24} />
							</div>
							<div className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-200/80">
								<SimpleIconsShopee fontSize={24} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
