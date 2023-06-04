import {
	IDataPelanggan,
	IDataPelangganRequest,
} from "@datapelanggan/datapelanggan.column";
import { IPages } from "@helpers/common.interface";
import { create } from "zustand";

interface IDataPelangganStore {
	isLoading: boolean;
	formReq: IDataPelangganRequest;
	page: IPages<IDataPelanggan> | null;
	toggleLoading: () => void;
	setRequest: (v: IDataPelangganRequest) => void;
	setPage: (v: IPages<IDataPelanggan> | null) => void;
}

export const useDataPelangganStore = create<IDataPelangganStore>((set) => ({
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
