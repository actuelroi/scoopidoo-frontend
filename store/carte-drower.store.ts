
import { create } from "zustand";

export interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const useCartDrawerStore = create<CartDrawerProps>((set) => ({
  isOpen: false,

  onOpen: () =>
    set({
      isOpen: true,
    }),

  onClose: () =>
    set({
      isOpen: false,
    }),
}));