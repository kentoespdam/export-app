import { SelectType } from "@helpers/common.interface";
import { IGolonganData } from "./interface/golongan.data";
import { ISatkerData } from "./interface/satker.data";
import { ISatkerGolonganData } from "./interface/satker.golongan.data";
import { ISatkerUkmetData } from "./interface/satker.ukmet.data";
import { IUnitData } from "./interface/unit.data";
import { IUnitGolonganData } from "./interface/unit.golongan.data";
import { IUnitUkmetData } from "./interface/unit.ukmet.data";

export type IBillingRequest = {
	tglBukti: string;
	tglCetak: string;
	periode: number;
	cabang: string;
	unit: string;
	kodeGolongan: string;
	kolektif: string;
	noBukti: string;
	statRekening: string;
};

export const IBillingTypes: SelectType[] = [
	{ id: "periode", label: "Periode", type: "text" },
	{ id: "tglBukti", label: "Tgl Bukti", type: "text" },
	{ id: "kodeGolongan", label: "Golongan", type: "golongan" },
	{ id: "cabang", label: "Cabang", type: "cabang" },
	{ id: "unit", label: "Unit", type: "unit" },
	{ id: "tglCetak", label: "Tgl Cetak", type: "text" },
	{ id: "kolektif", label: "Kolektif", type: "text" },
	{ id: "noBukti", label: "No Bukti", type: "text" },
	{ id: "statRekening", label: "Stat Rekening", type: "text" },
];

export interface IFinalDrd {
	satkerDataList: ISatkerData[];
	golonganDataList: IGolonganData[];
	satkerGolonganDataList: ISatkerGolonganData[];
	satkerUkmetDataList: ISatkerUkmetData[];
	unitDataList: IUnitData[];
	unitGolonganDataList: IUnitGolonganData[];
	unitUkmetDataList: IUnitUkmetData[];
}
