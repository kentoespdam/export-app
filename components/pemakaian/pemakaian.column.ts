import { convertToRupiah } from "@helpers/object.formatter";
import { GridColDef, GridValueFormatterParams } from "@mui/x-data-grid";

export interface IPemakaian {
	periode: number;
	nosamw: string;
	nama: string;
	alamat: string;
	desa: string;
	kecamatan: string;
	standLalu: number;
	standKini: number;
	pakai: number;
	rata2: number;
	golongan: string;
	diameter: string;
	status: string;
	bebanTetap: string;
	hargaAir: number;
	denda: number;
	angsuran: number;
	hargaTotal: number;
	tagihan: string;
	tanggalBayar: string;
	loket: string;
	kodeLoket: string;
	cabang: string;
}

export const PemakaianColumn: GridColDef[] = [
	{
		field: "periode",
		headerName: "Periode",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 70,
	},
	{
		field: "nosamw",
		headerName: "Nosamw",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 80,
	},
	{
		field: "nama",
		headerName: "Nama",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 200,
	},
	{
		field: "alamat",
		headerName: "Alamat",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 450,
	},
	{
		field: "desa",
		headerName: "Desa",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 180,
	},
	{
		field: "kecamatan",
		headerName: "Kecamatan",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 180,
	},
	{
		field: "standLalu",
		headerName: "Stand Lalu",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 90,
		align: "right",
		valueFormatter: (params: GridValueFormatterParams<number>) => {
			if (params.value === null) return "";

			return params.value.toLocaleString();
		},
	},
	{
		field: "standKini",
		headerName: "Stand Kini",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 90,
		align: "right",
		valueFormatter: (params: GridValueFormatterParams<number>) => {
			if (params.value === null) return "";

			return params.value.toLocaleString();
		},
	},
	{
		field: "pakai",
		headerName: "Pakai",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 90,
		align: "right",
		valueFormatter: (params: GridValueFormatterParams<number>) => {
			if (params.value === null) return "";

			return params.value.toLocaleString();
		},
	},
	{
		field: "rata2",
		headerName: "Rata2",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 90,
		align: "right",
		valueFormatter: (params: GridValueFormatterParams<number>) => {
			if (params.value === null) return "";

			return params.value.toLocaleString();
		},
	},
	{
		field: "golongan",
		headerName: "Golongan",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 245,
	},
	{
		field: "diameter",
		headerName: "Diamter",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 90,
		align: "right",
		valueFormatter: (params: GridValueFormatterParams<number>) => {
			if (params.value === null) return "";

			return params.value.toLocaleString();
		},
	},
	{
		field: "status",
		headerName: "Status",
		filterable: false,
		sortable: false,
		headerAlign: "center",
	},
	{
		field: "bebanTetap",
		headerName: "Beban Tetap",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 120,
		align: "right",
		valueFormatter: (params: GridValueFormatterParams<number>) => {
			if (params.value === null) return "";

			return convertToRupiah(params.value);
		},
	},
	{
		field: "hargaAir",
		headerName: "Harga Air",
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
		field: "denda",
		headerName: "Denda",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 120,
		align: "right",
		valueFormatter: (params: GridValueFormatterParams<number>) => {
			if (params.value === null) return "";

			return convertToRupiah(params.value);
		},
	},
	{
		field: "angsuran",
		headerName: "Angsuran",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 120,
		align: "right",
		valueFormatter: (params: GridValueFormatterParams<number>) => {
			if (params.value === null) return "";

			return convertToRupiah(params.value);
		},
	},
	{
		field: "hargaTotal",
		headerName: "Harga Total",
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
		field: "statusBayar",
		headerName: "Stat Bayar",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 120,
	},
	{
		field: "tanggalBayar",
		headerName: "Tgl Bayar",
		filterable: false,
		sortable: false,
		headerAlign: "center",
	},
	{
		field: "loket",
		headerName: "Loket",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 120,
	},
	{
		field: "kodeLoket",
		headerName: "Kd Loket",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 80,
	},
	{
		field: "cabang",
		headerName: "Cabang",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 200,
	},
];
