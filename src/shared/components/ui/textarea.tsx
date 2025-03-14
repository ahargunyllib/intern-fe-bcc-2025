import { cn } from "@/shared/lib/utils";
import type { InputHTMLAttributes, Ref } from "react";

type Props = {
	ref?: Ref<HTMLTextAreaElement>;
} & InputHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({ className, type, ref, ...props }: Props) {
	return (
		<textarea
			className={cn(
				"flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
				className,
			)}
			ref={ref}
			{...props}
		/>
	);
}
