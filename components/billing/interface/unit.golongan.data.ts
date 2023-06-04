import { IGolonganData } from "./golongan.data";

export interface IUnitGolonganData {
	unit: string;
	nama: string;
	satker: string;
	golonganDataList: IGolonganData[];
}
