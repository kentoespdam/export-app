import { IPemakaian } from "@pemakaian/pemakaian.column";
import { IRekairRequest } from "../components/rekair/rekair.column";
import { IPages } from "../helpers/common.interface";
import { create } from "zustand";
import periodeHelper from "@helpers/periode.helper";

interface IPemakaianStore {
	isLoading: boolean;
	isLoadingTotal: boolean;
	formReq: IRekairRequest;
	page: IPages<IPemakaian> | null;
	total: number;
	toggleLoading: () => void;
	toggleLoadingTotal: () => void;
	setRequest: (v: IRekairRequest) => void;
	setPage: (v: IPages<IPemakaian> | null) => void;
	setTotal: (v: number) => void;
}

export const usePemakaianStore = create<IPemakaianStore>((set) => ({
	isLoading: false,
	isLoadingTotal: false,
	formReq: {
		periode: periodeHelper.currentPeriode(),
		pos: 0,
		limit: 10,
	},
	page: null,
	total: 0,
	toggleLoading: () =>
		set((state) => ({ ...state, isLoading: !state.isLoading })),
	toggleLoadingTotal: () =>
		set((state) => ({ ...state, isLoadingTotal: !state.isLoadingTotal })),
	setRequest: (value) => set((state) => ({ ...state, formReq: value })),
	setPage: (value) => set((state) => ({ ...state, page: value })),
	setTotal: (value) => set((state) => ({ ...state, total: value })),
}));
