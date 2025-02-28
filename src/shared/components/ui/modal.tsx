import { LucideX } from "@/shared/components/icons";
import Button from "@/shared/components/ui/button";

type Props = {
	children: React.ReactNode;
	isOpen: boolean;
	closeModal: () => void;
	title: string;
};

export default function Modal({ children, isOpen, closeModal, title }: Props) {
	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
			onClick={closeModal}
			onKeyDown={() => {}} // TODO
		>
			<div
				className="bg-white rounded-lg max-w-sm max-h-[80%] w-full mx-4 overflow-y-scroll"
				onClick={(e) => e.stopPropagation()}
				onKeyDown={() => {}} // TODO
			>
				<div className="p-4 sticky top-0 bg-white flex flex-row justify-between gap-4 items-start">
					<h2 className="text-lg text-wrap break-all font-bold leading-none">
						{title}
					</h2>
					<Button
						variant="ghost"
						size="icon"
						type="button"
						onClick={closeModal}
						className="text-black size-fit hover:bg-transparent"
					>
						<LucideX />
					</Button>
				</div>
				<div className="px-4 pb-4">{children}</div>
			</div>
		</div>
	);
}
