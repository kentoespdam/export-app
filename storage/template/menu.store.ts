import { create } from "zustand";

interface IMenuStore {
	isMenuOpen: boolean;
	toggleMenu: () => void;
}

export const useMenuStore = create<IMenuStore>((set) => ({
	isMenuOpen: false,
	toggleMenu: () =>
		set((state) => ({
			...state,
			isMenuOpen: !state.isMenuOpen,
		})),
}));
