'use client';
import { create } from 'zustand';
interface ModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useModal = create<ModalStore>((set) => ({
	isOpen: false,
	onOpen: () => set((state) => ({ ...state, isOpen: true })),
	onClose: () => set((state) => ({ ...state, isOpen: false })),
}));

export default useModal;
