"use client";

import Modal from "@/shared/components/ui/modal";
import { useModalStore } from "@/shared/stores/use-modal-store";

export default function Provider({ children }: React.PropsWithChildren) {
	const {
		isOpen,
		children: modalChildren,
		closeModal,
		title,
	} = useModalStore();

	return (
		<>
			{children}
			<Modal isOpen={isOpen} closeModal={closeModal} title={title}>
				{modalChildren}
			</Modal>
		</>
	);
}
