import { cn } from "@/shared/lib/utils";
import type { InputHTMLAttributes, Ref } from "react";

type Props = {
	ref?: Ref<HTMLInputElement>;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, type, ref, ...props }: Props) {
	return (
		<input
			className={cn(
				"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground md:text-sm",
				"focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
				"file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
				"disabled:cursor-not-allowed disabled:opacity-50",
				className,
			)}
			type={type}
			ref={ref}
			{...props}
		/>
	);
}
