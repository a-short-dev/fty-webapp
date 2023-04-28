import { create } from 'zustand';

interface WelcomeModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useWelcomeModal = create<WelcomeModalStore>((set) => ({
	isOpen: false,
	onOpen: () => set((state) => ({ ...state, isOpen: true })),
	onClose: () => set((state) => ({ ...state, isOpen: false })),
}));

export default useWelcomeModal;
