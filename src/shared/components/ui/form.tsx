import Input from "@/shared/components/ui/input";
import { cn } from "@/shared/lib/utils";
import { ErrorMessage, useField } from "formik";
import type { InputHTMLAttributes, JSX } from "react";

type Props = {
	name: string;
	label: string;
	prefixIcon?: JSX.Element;
	suffixIcon?: JSX.Element;
} & InputHTMLAttributes<HTMLInputElement>;

export function FormFieldInput({
	name,
	label,
	prefixIcon: PrefixIcon,
	suffixIcon: SuffixIcon,
	...props
}: Props) {
	const [field, meta] = useField(name);
	return (
		<div className="space-y-2">
			<label
				htmlFor={name}
				className={cn(
					"font-bold",
					meta.error && meta.touched ? "text-destructive" : "",
				)}
			>
				{label}
			</label>
			<div className="relative">
				{PrefixIcon && (
					<div className="bg-accent rounded-md pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 pe-3 peer-disabled:opacity-50 border border-r">
						{PrefixIcon}
					</div>
				)}
				<Input
					id={name}
					{...props}
					{...field}
					className={cn(
						"placeholder:font-light placeholder:text-xs bg-white border",
						(PrefixIcon || SuffixIcon) && "peer ps-12 pe-12",
					)}
				/>
				{SuffixIcon && (
					<div className="absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50">
						{SuffixIcon}
					</div>
				)}
			</div>
			<span className="text-red-500">
				<ErrorMessage name={name} />
			</span>
		</div>
	);
}
