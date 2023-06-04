import { GridColDef } from "@mui/x-data-grid";
import { IBaseDrd } from "./base.drd";

export interface ISatkerData extends IBaseDrd {
	satker: string;
	nama: string;
}

export function isSatkerData(
	satkerData: ISatkerData
): satkerData is ISatkerData {
	return (satkerData as ISatkerData).satker !== undefined;
}

export const satkerDataColumns: GridColDef[] = [
	{ field: "satker", headerName: "Satker", headerAlign: "center", width: 80 },
	{ field: "nama", headerName: "Nama", headerAlign: "center", width: 80 },
	{
		field: "totRekening",
		headerName: "Tot. Rekening",
		headerAlign: "center",
		width: 80,
	},
	{
		field: "totAktif",
		headerName: "Tot. Aktif",
		headerAlign: "center",
		width: 80,
	},
	{
		field: "totPasif",
		headerName: "Tot. Pasif",
		headerAlign: "center",
		width: 80,
	},
	{
		field: "totPakai",
		headerName: "Tot. Pakai",
		headerAlign: "center",
		width: 80,
	},
	{
		field: "totAir",
		headerName: "Tot. Air",
		headerAlign: "center",
		width: 80,
	},
	{
		field: "totBeban",
		headerName: "Tot. Beban",
		headerAlign: "center",
		width: 80,
	},
	{
		field: "totBpsda",
		headerName: "Tot. Bpsda",
		headerAlign: "center",
		width: 80,
	},
	{
		field: "totAngAir",
		headerName: "Tot. Angs. Air",
		headerAlign: "center",
		width: 80,
	},
	{
		field: "totAngNonAir",
		headerName: "Tot. Angs. Non Air",
		headerAlign: "center",
		width: 80,
	},
	{
		field: "totTagihan",
		headerName: "Tot. Tagihan",
		headerAlign: "center",
		width: 80,
	},
	{
		field: "rataAir",
		headerName: "Rata2 Air",
		headerAlign: "center",
		width: 80,
	},
	{
		field: "rataPakai",
		headerName: "Rata2 Pakai",
		headerAlign: "center",
		width: 80,
	},
];
