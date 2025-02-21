import { cn } from "@/shared/lib/utils";

type RadioProps = {
	disabled?: boolean;
	defaultChecked?: boolean;
	id: string;
	label: string;
	name?: string;
	onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
	value?: string;
};

function Radio({
	disabled,
	defaultChecked,
	id,
	label,
	name,
	onChange,
	value,
}: RadioProps) {
	return (
		<div className="flex gap-2 items-start">
			<div className="grid place-items-center mt-1">
				<input
					type="radio"
					id={id}
					name={name}
					defaultChecked={defaultChecked}
					disabled={disabled}
					className="peer col-start-1 row-start-1 appearance-none shrink-0 w-4 h-4 border-2 border-blue-500 rounded-full focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-400 disabled:border-gray-400"
					onChange={onChange}
					value={value}
				/>
				<div className="pointer-events-none col-start-1 row-start-1 w-2 h-2 rounded-full peer-checked:bg-blue-500 peer-checked:peer-disabled:bg-gray-400" />
			</div>
			<label
				htmlFor={id}
				className={cn(
					"text-start hover:cursor-pointer",
					disabled && "text-gray-400",
				)}
			>
				{label}
			</label>
		</div>
	);
}

type OptionType = {
	value: string;
	label: string;
};

export type RadioGroupProps = {
	defaultChecked?: string;
	disabled?: boolean;
	name: string;
	onChange: (value: string) => void;
	options: OptionType[];
};

export default function RadioGroup({
	defaultChecked,
	disabled,
	name,
	onChange,
	options,
}: RadioGroupProps) {
	const handleChange = (event: React.FormEvent<HTMLInputElement>) =>
		onChange(event.currentTarget.value);

	return (
		<div className="flex flex-col">
			{options.map(({ label: optionLabel, value }) => (
				<div key={value} className="flex gap-2 items-center">
					<Radio
						id={value}
						name={name}
						disabled={disabled}
						defaultChecked={defaultChecked === value}
						label={optionLabel}
						onChange={handleChange}
						value={value}
					/>
				</div>
			))}
		</div>
	);
}
