import { IPageRequest, SelectType } from "@helpers/common.interface";
import { GridColDef } from "@mui/x-data-grid";

export interface IDataPelanggan {
	noreg: string;
	wil: string;
	nosamw: string;
	nama: string;
	alamat: string;
	rt: string;
	rw: string;
	desa: string;
	kecamatan: string;
	kodeGolongan: string;
	golongan: string;
	kodeStatusSambung: string;
	statusSambung: string;
	tglPas: string;
}

export type IDataPelangganRequest = {
	noreg?: string;
	nosamw?: string;
	nama?: string;
	alamat?: string;
	tglPasang?: string;
	kodeGolongan?: string;
	kodeStatusSambung?: string;
} & IPageRequest;

export const dataPelangganSelectType: SelectType[] = [
	{ id: "noreg", label: "No. Registrasi", type: "text" },
	{ id: "nosamw", label: "No. sambung", type: "text" },
	{ id: "nama", label: "nama", type: "text" },
	{ id: "alamat", label: "alamat", type: "text" },
	{ id: "tanggalPasang", label: "Tanggal Pasang", type: "tgl" },
	{ id: "kodeGolongan", label: "Golongan", type: "golongan" },
	{ id: "kodeStatusSambung", label: "Status Sambung", type: "statusSambung" },
];

export const DataPelangganColumn: GridColDef[] = [
	{
		field: "wilayah",
		headerName: "wilayah",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 150,
	},
	{
		field: "nosamw",
		headerName: "No Sambung",
		filterable: false,
		sortable: false,
		headerAlign: "center",
	},
	{
		field: "nama",
		headerName: "Nama",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 250,
	},
	{
		field: "alamat",
		headerName: "Alamat",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 400,
	},
	{
		field: "rt",
		headerName: "RT",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 40,
	},
	{
		field: "rw",
		headerName: "RW",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 40,
	},
	{
		field: "desa",
		headerName: "Desa",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 120,
	},
	{
		field: "kecamatan",
		headerName: "Kecamatan",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 200,
	},
	{
		field: "kodeGolongan",
		headerName: "Kode",
		headerClassName: "super-app-theme--header",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 50,
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
		field: "kodeStatusSambung",
		headerName: "Kode",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 50,
	},
	{
		field: "statusSambung",
		headerName: "Status Sambungan",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 150,
	},
	{
		field: "tanggalPasang",
		headerName: "Tgl Pasang",
		filterable: false,
		sortable: false,
		headerAlign: "center",
	},
];
