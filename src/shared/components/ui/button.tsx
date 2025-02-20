import { cn } from "@/shared/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import type { ButtonHTMLAttributes, Ref } from "react";

export const buttonVariants = cva(
	"flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-black text-white shadow hover:bg-black/90",
				destructive: "bg-red-500 text-white shadow-sm hover:bg-red-500/90",
				outline:
					"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
				ghost: "bg-transparent text-whte hover:bg-black/10",
			},
			size: {
				default: "h-9 px-4 py-2",
				icon: "h-9 w-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

type Props = {
	ref?: Ref<HTMLButtonElement>;
} & ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants>;

export default function Button({
	className,
	variant,
	size,
	ref,
	...props
}: Props) {
	return (
		<button
			className={cn(buttonVariants({ variant, size, className }))}
			ref={ref}
			{...props}
		/>
	);
}
