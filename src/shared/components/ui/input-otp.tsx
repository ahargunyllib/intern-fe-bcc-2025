"use client";
import { cn } from "@/shared/lib/utils";
import type { SlotProps } from "input-otp";

export default function Slot(props: SlotProps) {
	return (
		<div
			className={cn(
				"w-10 h-12 sm:w-14 sm:h-16",
				"border-input border-2 bg-white shadow-md text-foreground text-lg flex items-center justify-center rounded-md font-medium transition-[color,box-shadow]",
				{ "border-ring ring-ring/50 z-10 ring-[1px]": props.isActive },
			)}
		>
			<div>{props.char ?? props.placeholderChar}</div>
		</div>
	);
}
