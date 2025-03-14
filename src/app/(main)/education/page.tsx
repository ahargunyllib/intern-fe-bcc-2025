import { LineiconsSearch2 } from "@/shared/components/icons";
import Input from "@/shared/components/ui/input";

export default function Page() {
	return (
		<div className="flex flex-col gap-4 w-full">
			<div className="p-4 bg-secondary shadow-md rounded-md">
				<div className="relative">
					<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 pe-3 peer-disabled:opacity-50">
						<LineiconsSearch2 fontSize={20} />
					</div>
					<Input className="placeholder:font-light placeholder:text-xs bg-white border ps-12 peer" />
				</div>
			</div>
			<div className="w-full p-4 bg-white shadow-md rounded-md flex flex-col gap-2">
				<h2 className="font-bold text-2xl">Edukasi</h2>
				<div className="flex flex-row gap-4 w-full overflow-x-auto">
					{Array.from({ length: 10 }).map((_, index) => (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							className="bg-gray-400 cursor-pointer h-40 aspect-video"
						/>
					))}
				</div>
			</div>
			<div className="w-full p-4 bg-white shadow-md rounded-md flex flex-col gap-2">
				<h2 className="font-bold text-2xl">Berita</h2>
				<div className="flex flex-col gap-4 w-full flex-shrink-0">
					{Array.from({ length: 4 }).map((_, index) => (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							className="flex flex-row gap-4"
						>
							<div className="bg-gray-400 cursor-pointer h-40 w-64 flex-shrink-0" />
							<div className="flex flex-col leading-none">
								<span className="font-semibold text-xl">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Recusandae autem deleniti nam eaque vel rem aliquid culpa esse
									minus voluptate dicta consequatur aperiam veritatis doloremque
									ad quos, repellat at, ipsum quia. Nihil.
								</span>
								<span className="font-semibold text-sm">DD MMM YYYY</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
