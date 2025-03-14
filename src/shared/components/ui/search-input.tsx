"use client";

import { LineiconsSearch2 } from "@/shared/components/icons";
import Input from "@/shared/components/ui/input";

type Props = {
	placeholder?: string;
	value: string;
	handleSearch: (search: string) => void;
};

export default function SearchInput({
	placeholder = "Cari...",
	value,
	handleSearch,
}: Props) {
	return (
		<div className="p-4 bg-secondary shadow-md rounded-md">
			<div className="relative">
				<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 pe-3 peer-disabled:opacity-50">
					<LineiconsSearch2 fontSize={20} />
				</div>
				<Input
					placeholder={placeholder}
					value={value}
					onChange={(e) => handleSearch(e.target.value)}
					className="placeholder:font-light placeholder:text-xs bg-white border ps-12 peer"
				/>
			</div>
		</div>
	);
}
