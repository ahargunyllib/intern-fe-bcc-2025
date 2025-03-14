import Image from "next/image";

type Props = {
	catalogs: {
		url: string;
		name: string;
	}[];
};

export default function CatalogPanel({ catalogs }: Props) {
	return (
		<div className="bg-white shadow-md rounded-md p-4 space-y-4">
			<span className="font-bold text-2xl">Katalog UMKM</span>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{catalogs.map((catalog) => (
					<div
						key={catalog.name}
						className="relative bg-gray-400 z-20 hover:-translate-y-1 transition-transform duration-300 ease-in-out cursor-pointer h-40"
					>
						<Image src={catalog.url} alt="Catalog" fill objectFit="cover" />
					</div>
				))}
			</div>
		</div>
	);
}
