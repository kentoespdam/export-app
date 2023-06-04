import { dateToStringFormat } from "@helpers/object.formatter";
import {
	IIkhtisarPerTahun,
	IIkhtisarTahunanRequest,
} from "@ikhtisartahunan/ikhtisar.tahunan.column";
import IkhtisarTabGolongan from "@ikhtisartahunan/tab/ikhtisar.tahunan.golongan";
import IkhtisarTabWilayah from "@ikhtisartahunan/tab/ikhtisar.tahunan.wilayah";
import { create } from "zustand";

interface IIkhitsarTahunanStore {
	isLoading: boolean;
	formReq: IIkhtisarTahunanRequest | null;
	page: IIkhtisarPerTahun[] | null;
	toggleLoading: () => void;
	setRequest: (v: IIkhtisarTahunanRequest) => void;
	setPage: (v: IIkhtisarPerTahun[] | null) => void;
}

const sekarang = new Date();

export const useIkhtisarTahunanStore = create<IIkhitsarTahunanStore>((set) => ({
	isLoading: false,
	formReq: {
		tahun: sekarang.getFullYear(),
		toBulan: sekarang.getMonth() + 1,
		tglCetak: dateToStringFormat(sekarang),
	},
	page: null,
	toggleLoading: () =>
		set((state) => ({ ...state, isLoading: !state.isLoading })),
	setRequest: (value) => set((state) => ({ ...state, formReq: value })),
	setPage: (value) => set((state) => ({ ...state, page: value })),
}));

interface IkhtisarTahunanTab {
	tabIndex: number;
	setTabIndex: (v: number) => void;
}

export const useIkhtisarTabStore = create<IkhtisarTahunanTab>((set) => ({
	tabIndex: 0,
	setTabIndex: (value) => set((state) => ({ ...state, tabIndex: value })),
}));

export const ikhtisarTabHandler = (index: number) => {
	switch (index) {
		case 0:
			return <IkhtisarTabWilayah />;
		case 1:
			return <IkhtisarTabGolongan />;
	}
};

/**
 * Jenis Laporan Store
 */

interface IIkhtisarTahunanLaporanStore {
	jnsLap: string;
	setRadio: (value: string) => void;
}

export const useIkhtisarTahunanLaporanStore =
	create<IIkhtisarTahunanLaporanStore>((set) => ({
		jnsLap: "jmlTag",
		setRadio: (value) =>
			set((state) => ({
				...state,
				jnsLap: value,
			})),
	}));
