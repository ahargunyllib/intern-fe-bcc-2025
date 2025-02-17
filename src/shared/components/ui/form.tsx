import Input from "@/shared/components/ui/input";
import { cn } from "@/shared/lib/utils";
import { ErrorMessage, useField } from "formik";
import type { InputHTMLAttributes } from "react";

type Props = {
	name: string;
	label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function FormFieldInput({ name, label, ...props }: Props) {
	const [field, meta] = useField(name);
	return (
		<div className="space-y-2">
			<label
				htmlFor={name}
				className={cn(meta.error && meta.touched ? "text-red-500" : "")}
			>
				{label}
			</label>
			<Input id={name} {...props} {...field} />
			<span className="text-red-500">
				<ErrorMessage name="email" />
			</span>
		</div>
	);
}
