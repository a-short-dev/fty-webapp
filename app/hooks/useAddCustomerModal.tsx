import { create } from "zustand";

interface AddCustomerModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useAddCustomerModal = create<AddCustomerModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAddCustomerModal;
