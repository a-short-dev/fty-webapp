import { create } from 'zustand';

interface LoanModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useLoanModal = create<LoanModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useLoanModal;