import { IBillingRequest, IFinalDrd } from "@billing/billing.column";
import IkhtisarTab from "@billing/tab/ikhtisar.tab";
import LainnyaTab from "@billing/tab/lainnya.tab";
import { create } from "zustand";

interface IBillingTab {
	tabIndex: number;
	setTabIndex: (value: number) => void;
}

export const useBillingTabStore = create<IBillingTab>((set) => ({
	tabIndex: 0,
	setTabIndex: (value) => set((state) => ({ ...state, tabIndex: value })),
}));

/*
Ikhtisar Tab Store
*/
interface IIkhtisarTabStore {
	tabIndex: number;
	setIkhtisarTabIndex: (value: number) => void;
}

export const useIkhtisarTabStore = create<IIkhtisarTabStore>((set) => ({
	tabIndex: 0,
	setIkhtisarTabIndex: (value) =>
		set((state) => ({
			...state,
			tabIndex: value,
		})),
}));

/*
Lainnya Tab Store
*/

interface LainnyaStore {
	tabIndex: number;
	setLainnyaTabIndex: (value: number) => void;
}

export const useLainnyaStore = create<LainnyaStore>((set) => ({
	tabIndex: 0,
	setLainnyaTabIndex: (value) =>
		set((state) => ({ ...state, tabIndex: value })),
}));

export const billingTabHandler = (index: number) => {
	switch (index) {
		case 0:
			return <IkhtisarTab />;
		case 1:
			return <LainnyaTab />;
	}
};

/*
Lainnya Jenis Laporan Store
*/

interface ILainnyaJenisLaporanStore {
	jnsLap: string;
	setRadio: (value: string) => void;
}

export const useLainnyaJenisLaporanStore = create<ILainnyaJenisLaporanStore>(
	(set) => ({
		jnsLap: "jmlTag",
		setRadio: (value) =>
			set((state) => ({
				...state,
				jnsLap: value,
			})),
	})
);

interface IBilingStore {
	isLoading: boolean;
	formReq: IBillingRequest | null;
	page?: IFinalDrd | null;
	toggleLoading: () => void;
	setRequest: (v: IBillingRequest) => void;
	setPage: (v: IFinalDrd | null) => void;
}

export const useBillingStore = create<IBilingStore>((set) => ({
	isLoading: false,
	formReq: null,
	page: null,
	toggleLoading: () =>
		set((state) => ({ ...state, isLoading: !state.isLoading })),
	setRequest: (value) => set((state) => ({ ...state, formReq: value })),
	setPage: (value) => set((state) => ({ ...state, page: value })),
}));