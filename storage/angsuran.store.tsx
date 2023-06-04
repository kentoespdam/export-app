import { IPages } from "@helpers/common.interface";
import { IAngsuranRequest, IAngsuran } from "components/angsuran/angsuran.column";
import { create } from "zustand";

interface IAngsuranStore {
	isLoading: boolean;
	angRequest: IAngsuranRequest;
	page: IPages<IAngsuran> | null;
	toggleLoading: () => void;
	setRequest: (v: IAngsuranRequest) => void;
	setPage: (v: IPages<IAngsuran> | null) => void;
}

export const useAngsuranStore = create<IAngsuranStore>((set) => ({
	isLoading: false,
	angRequest: {
		pos: 0,
		limit: 10,
	},
	page: null,
	toggleLoading: () =>
		set((state) => ({ ...state, isLoading: !state.isLoading })),
	setRequest: (value) => set((state) => ({ ...state, angRequest: value })),
	setPage: (value) => set((state) => ({ ...state, page: value })),
}));

interface ICariAngsuran {
	noreg?: string;
	nosamw?: string;
	unit?: string;
	kodeGolongan?: string;
	nama?: string;
	alamat?: string;
	tglBayar?: string;
	tglBukti?: string;
	status?: string;
	tagihan: number;
	setNoreg: (v: string) => void;
	setNosamw: (v: string) => void;
	setUnit: (v: string) => void;
	setKodeGolongan: (v: string) => void;
	setAlamat: (v: string) => void;
	setTglBayar: (v: string) => void;
	setTglBukti: (v: string) => void;
	setStatus: (v: string) => void;
	setTagihan: (v: number) => void;
}

export const useCariAngsuranStore = create<ICariAngsuran>((set) => ({
	tagihan: 1,
	setNoreg: (value) => set((state) => ({ ...state, noreg: value })),
	setNosamw: (value) => set((state) => ({ ...state, nosamw: value })),
	setUnit: (value) => set((state) => ({ ...state, unit: value })),
	setKodeGolongan: (value) =>
		set((state) => ({ ...state, kodeGolongan: value })),
	setAlamat: (value) => set((state) => ({ ...state, alamat: value })),
	setTglBayar: (value) => set((state) => ({ ...state, tglBayar: value })),
	setTglBukti: (value) => set((state) => ({ ...state, tglBukti: value })),
	setStatus: (value) => set((state) => ({ ...state, status: value })),
	setTagihan: (value) => set((state) => ({ ...state, tagihan: value })),
}));
