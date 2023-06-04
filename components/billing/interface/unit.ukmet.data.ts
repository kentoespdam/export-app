import { IUkmetData } from "./ukmet.data";

export interface IUnitUkmetData {
	unit: string;
	nama: string;
	satker: string;
	ukmetDataList: IUkmetData[];
}
