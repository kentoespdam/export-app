import { IPages } from "@helpers/common.interface";
import { IRekairRequest, IRekair } from "components/rekair/rekair.column";
import { create } from "zustand";
import periodeHelper from "@helpers/periode.helper";

interface IRekairStore {
	isLoading: boolean;
	formReq: IRekairRequest;
	page: IPages<IRekair> | null;
	toggleLoading: () => void;
	setRequest: (v: IRekairRequest) => void;
	setPage: (v: IPages<IRekair> | null) => void;
}

export const useRekairStore = create<IRekairStore>((set) => ({
	isLoading: false,
	formReq: {
		periode: periodeHelper.currentPeriode(),
		pos: 0,
		limit: 10,
	},
	page: null,
	toggleLoading: () =>
		set((state) => ({ ...state, isLoading: !state.isLoading })),
	setRequest: (value) => set((state) => ({ ...state, formReq: value })),
	setPage: (value) => set((state) => ({ ...state, page: value })),
}));
