import { IPageRequest } from "@helpers/common.interface";
import { GridColDef } from "@mui/x-data-grid";

export type IDetailSaldoRequest = {
	periode?: number;
	fromPeriode?: number;
	toPeriode?: number;
	tglBukti?: string;
	nosamw?: string;
	nama?: string;
	alamat?: string;
	kodeGolongan?: string;
	golongan?: string;
	statSambung?: string;
	unit?: string;
	satker?: string;
	tagihan?: string;
	statRekening?: string;
} & IPageRequest;

export interface IDetailSaldo {
	satker: string;
	ptgsMeter: string;
	unit: string;
	wilayah: string;
	noSambung: string;
	periode: number;
	noblth: string;
	nama: string;
	alamat: string;
	golongan: string;
	air: number;
	adm: number;
	denda: number;
	angsuran: number;
	tagihan: number;
	kodeSambung: string;
	statusSambung: string;
	telp: string;
	pakai: number;
}

export const DetailSaldoColumn: GridColDef[] = [
	{
		field: "satker",
		headerName: "Satker",
		filterable: false,
		sortable: false,
	},
	{
		field: "ptgsMeter",
		headerName: "Petugas Meter",
		filterable: false,
		sortable: false,
	},
	{ field: "unit", headerName: "Unit", filterable: false, sortable: false },
	{
		field: "wilayah",
		headerName: "Wilayah",
		filterable: false,
		sortable: false,
	},
	{
		field: "noSambung",
		headerName: "No Sambung",
		filterable: false,
		sortable: false,
	},
	{
		field: "periode",
		headerName: "Periode",
		filterable: false,
		sortable: false,
	},
	{
		field: "noblth",
		headerName: "No BLTH",
		filterable: false,
		sortable: false,
	},
	{ field: "nama", headerName: "Nama", filterable: false, sortable: false },
	{
		field: "alamat",
		headerName: "Alamat",
		filterable: false,
		sortable: false,
	},
	{
		field: "golongan",
		headerName: "Golongan",
		filterable: false,
		sortable: false,
	},
	{ field: "air", headerName: "Air", filterable: false, sortable: false },
	{ field: "adm", headerName: "Adm", filterable: false, sortable: false },
	{ field: "denda", headerName: "Denda", filterable: false, sortable: false },
	{
		field: "angsuran",
		headerName: "Angsuran",
		filterable: false,
		sortable: false,
	},
	{
		field: "tagihan",
		headerName: "Tagihan",
		filterable: false,
		sortable: false,
	},
	{
		field: "kodeSambung",
		headerName: "Kode Sambung",
		filterable: false,
		sortable: false,
	},
	{
		field: "statusSambung",
		headerName: "Status Sambung",
		filterable: false,
		sortable: false,
	},
	{ field: "telp", headerName: "Telp", filterable: false, sortable: false },
	{ field: "pakai", headerName: "Pakai", filterable: false, sortable: false },
];
