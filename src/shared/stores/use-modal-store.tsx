import type { ReactNode } from "react";
import { create } from "zustand";

type ModalStore = {
	isOpen: boolean;
	openModal: (props: { children: ReactNode; title: string }) => void;
	closeModal: () => void;
	title: string;
	children: ReactNode;
};

export const useModalStore = create<ModalStore>((set) => ({
	isOpen: false,
	openModal: ({ children, title }) => {
		set({ isOpen: true, children, title });
	},
	closeModal: () => {
		set({ isOpen: false, children: null, title: "" });
	},
	title: "",
	children: null,
}));
