import { convertToRupiah } from "@helpers/object.formatter";
import { GridColDef, GridValueFormatterParams } from "@mui/x-data-grid/";

export interface IPendapatan {
	kodeGolongan: string;
	kodeSubGolongan: string;
	golongan: string;
	air: number;
	danaMeter: number;
	kodeLokasi: string;
	namaLokasi: string;
	kodeCabang: string;
	cabang: string;
}

export const PendapatanColumn: GridColDef[] = [
	{
		field: "kodeGolongan",
		headerName: "Kd.Gol",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 60,
	},
	{
		field: "kodeSubGolongan",
		headerName: "Kd.Sub.Gol",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 90,
	},
	{
		field: "golongan",
		headerName: "Golongan",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 200,
	},
	{
		field: "air",
		headerName: "Air",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 180,
		align: "right",
		valueFormatter: (params: GridValueFormatterParams<number>) => {
			if (params.value === null) return "";

			return convertToRupiah(params.value);
		},
	},
	{
		field: "danaMeter",
		headerName: "Dana Meter",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 180,
		align: "right",
		valueFormatter: (params: GridValueFormatterParams<number>) => {
			if (params.value === null) return "";

			return convertToRupiah(params.value);
		},
	},
	{
		field: "kodeLokasi",
		headerName: "Kd.Lokasi",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 80,
	},
	{
		field: "namaLokasi",
		headerName: "Lokasi",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 180,
	},
	{
		field: "kodeCabang",
		headerName: "Kd.Cabang",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 90,
	},
	{
		field: "cabang",
		headerName: "CABANG",
		width: 200,
		filterable: false,
		sortable: false,
		headerAlign: "center",
	},
];
