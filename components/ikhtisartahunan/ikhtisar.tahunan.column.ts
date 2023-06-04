import { SelectType } from "@helpers/common.interface";

export type IIkhtisarTahunanRequest = {
	toBulan: number;
	tahun: number;
	kodeCabang?: string;
	kodeUnit?: string;
	kodeGolongan?: string;
	tglCetak?: string;
};

export const IkhtisarTahunanTypes: SelectType[] = [
	{ id: "tahun", label: "Tahun", type: "text" },
	{ id: "toBulan", label: "Sampai Bulan", type: "bulan" },
	{ id: "tglCetak", label: "Tgl Cetak", type: "text" },
	{ id: "kodeCabang", label: "Cabang", type: "cabang" },
	{ id: "kodeUnit", label: "Unit", type: "unit" },
	{ id: "kodeGolongan", label: "Golongan", type: "golongan" },
];

interface IBaseDataTahunan {
	totRekening: number;
	totPakai: number;
	totAir: number;
	totAdm: number;
	totDanaMeter: number;
	totBpsda: number;
	totAngsuran: number;
	totTagihan: number;
}

export interface IIkhtisarGolonganData extends IBaseDataTahunan {
	kodeGolongan: string;
	kodeSubGolongan: string;
	golongan: string;
	urut: number;
}

export interface IIkhtisarUnitData extends IBaseDataTahunan {
	unit: string;
	nama: string;
	cabang: string;
}

export interface IIkhtisarSatkerData extends IBaseDataTahunan {
	satker: string;
	nama: string;
}

export interface IIkhtisarPerTahun {
	bulan: number;
	namaBulan: string;
	periode: number;
	golonganDataList: IIkhtisarGolonganData[];
	unitDataList: IIkhtisarUnitData[];
	satkerDataList: IIkhtisarSatkerData[];
}
