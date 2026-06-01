
import { create } from "zustand";

export interface AuthStoreProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const useCreateStore = create<AuthStoreProps>((set) => ({
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