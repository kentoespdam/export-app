import { IDrdRequest, IDrd } from "@drd/drd.column";
import { create } from "zustand";

interface IDrdStore {
	isLoading: boolean;
	formReq: IDrdRequest;
	page: IDrd[] | null;
	toggleLoading: () => void;
	setRequest: (v: IDrdRequest) => void;
	setPage: (v: IDrd[] | null) => void;
}

export const useDrdStore = create<IDrdStore>((set) => ({
	isLoading: false,
	formReq: {
		pos: 0,
		limit: 10,
	},
	page: null,
	toggleLoading: () =>
		set((state) => ({ ...state, isLoading: !state.isLoading })),
	setRequest: (value) => set((state) => ({ ...state, formReq: value })),
	setPage: (value) => set((state) => ({ ...state, page: value })),
}));
