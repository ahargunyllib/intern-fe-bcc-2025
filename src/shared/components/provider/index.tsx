"use client";

import ReactQueryProvider from "@/shared/components/provider/tanstack";
import Modal from "@/shared/components/ui/modal";
import { useModalStore } from "@/shared/stores/use-modal-store";
import type { PropsWithChildren } from "react";

export default function Provider({ children }: PropsWithChildren) {
	const {
		isOpen,
		children: modalChildren,
		closeModal,
		title,
	} = useModalStore();

	return (
		<ReactQueryProvider>
			{children}
			<Modal isOpen={isOpen} closeModal={closeModal} title={title}>
				{modalChildren}
			</Modal>
		</ReactQueryProvider>
	);
}
