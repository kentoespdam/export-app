import { IPageRequest, SelectType } from "@helpers/common.interface";
import { convertToRupiah } from "@helpers/object.formatter";
import { GridColDef, GridValueFormatterParams } from "@mui/x-data-grid";

export type IRekairRequest = {
	kodeCabang?: string;
	kodeUnit?: string;
	periode?: number;
	tglBukti?: string;
	nosamw?: string;
	nama?: string;
	alamat?: string;
	kodeGolongan?: string;
	golongan?: string;
	kodeSambung?: string;
	statRekening?: string;
	loketkol?: string;
	noBukti?: string;
	tglCetak?: string;
	tagihan?: number;
} & IPageRequest;

export const IRekairTypes: SelectType[] = [
	{ id: "periode", label: "Periode", type: "periode" },
	{ id: "kodeGolongan", label: "Kode Golongan", type: "golongan" },
	{ id: "kodeCabang", label: "Kode Cabang", type: "cabang" },
	{ id: "kodeUnit", label: "Kode Unit", type: "unit" },
	{ id: "nosamw", label: "No Sambung", type: "text" },
	{ id: "nama", label: "Nama", type: "text" },
	{ id: "alamat", label: "Alamat", type: "text" },
	{ id: "kodeStatusSambung", label: "Status Sambung", type: "statusSambung" },
	{ id: "statRekening", label: "Stat Rekening", type: "text" },
	{ id: "loketkol", label: "Loket Kolektif", type: "text" },
	{ id: "noBukti", label: "No Bukti", type: "text" },
	{ id: "tagihan", label: "Tagihan", type: "tagihan" },
];

export interface IRekair {
	noBukti: string;
	tglBukti: string;
	noSambung: string;
	unit: string;
	cabang: string;
	nama: string;
	alamat: string;
	noblth: string;
	golongan: string;
	metLalu: number;
	metKini: number;
	totalPakai: number;
	rata2: number;
	statusSambung: string;
	periode: number;
	loketBayar: string;
	danaMeter: number;
	diameter: string;
	minm3: number;
	adm: number;
	ret: number;
	r1: number;
	r2: number;
	r3: number;
	r4: number;
	tarif1: number;
	tarif2: number;
	tarif3: number;
	tarif4: number;
	pakai1: number;
	pakai2: number;
	pakai3: number;
	pakai4: number;
	denda: number;
	bTutup: number;
	angSambung: number;
	angAir: number;
	jasaSambung: number;
	jangSambung: number;
	angSbke: number;
	angSbso: number;
	materai: number;
	tagihan: number;
	operator: string;
	tglByr: string;
	noByr: string;
	ket: string;
	kolektif: string;
}

export const RekairColumn: GridColDef[] = [
	{
		field: "noBukti",
		headerName: "No Bukti",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 180,
	},
	{
		field: "tglBukti",
		headerName: "Tgl Bukti",
		filterable: false,
		sortable: false,
		headerAlign: "center",
	},
	{
		field: "noSambung",
		headerName: "No Sambung",
		filterable: false,
		sortable: false,
		headerAlign: "center",
	},
	// { field: "unit", headerName: "Unit", filterable: false, sortable: false, headerAlign:"center" },
	{
		field: "cabang",
		headerName: "Cabang",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 160,
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
		width: 300,
	},
	{
		field: "noblth",
		headerName: "No BLTH",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 135,
	},
	{
		field: "golongan",
		headerName: "Golongan",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 225,
	},
	{
		field: "metLalu",
		headerName: "Meter Lalu",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		align: "right",
	},
	{
		field: "metKini",
		headerName: "Meter Kini",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		align: "right",
	},
	{
		field: "totalPakai",
		headerName: "Pakai",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		align: "right",
	},
	{
		field: "rata2",
		headerName: "Rata2",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		align: "right",
	},
	{
		field: "statusSambung",
		headerName: "Status Sambung",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 180,
	},
	{
		field: "periode",
		headerName: "Periode",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		align: "right",
	},
	{
		field: "loketBayar",
		headerName: "Loket Bayar",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 180,
	},
	{
		field: "danaMeter",
		headerName: "Dana Meter",
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
		field: "diameter",
		headerName: "Diameter",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		align: "right",
	},
	// {
	// 	field: "minm3",
	// 	headerName: "Minimal m3",
	// 	filterable: false,
	// 	sortable: false,
	// 	headerAlign: "center",
	// 	align: "right",
	// },
	{
		field: "adm",
		headerName: "Adm",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		align: "right",
		valueFormatter: (params: GridValueFormatterParams<number>) => {
			if (params.value === null) return "";

			return convertToRupiah(params.value);
		},
	},
	{
		field: "ret",
		headerName: "Retribusi",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 80,
		align: "right",
		valueFormatter: (params: GridValueFormatterParams<number>) => {
			if (params.value === null) return "";

			return convertToRupiah(params.value);
		},
	},
	{
		field: "r1",
		headerName: "R1",
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
		field: "r2",
		headerName: "R2",
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
		field: "r3",
		headerName: "R3",
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
		field: "r4",
		headerName: "R4",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 80,
		align: "right",
		valueFormatter: (params: GridValueFormatterParams<number>) => {
			if (params.value === null) return "";

			return convertToRupiah(params.value);
		},
	},
	{
		field: "tarif1",
		headerName: "Tarif 1",
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
		field: "tarif2",
		headerName: "Tarif 2",
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
		field: "tarif3",
		headerName: "Tarif 3",
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
		field: "tarif4",
		headerName: "Tarif 4",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 80,
		align: "right",
		valueFormatter: (params: GridValueFormatterParams<number>) => {
			if (params.value === null) return "";

			return convertToRupiah(params.value);
		},
	},
	{
		field: "pakai1",
		headerName: "Pakai 1",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		align: "right",
	},
	{
		field: "pakai2",
		headerName: "Pakai 2",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		align: "right",
	},
	{
		field: "pakai3",
		headerName: "Pakai 3",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		align: "right",
	},
	{
		field: "pakai4",
		headerName: "Pakai 4",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		align: "right",
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
		field: "bTutup",
		headerName: "Biaya Tutup",
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
		field: "angSambung",
		headerName: "Angsuran Sambung",
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
		field: "angAir",
		headerName: "Angsuran Air",
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
		field: "jasaSambung",
		headerName: "Jasa Sambung",
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
		field: "jangSambung",
		headerName: "Jang Sambung",
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
		field: "angSbke",
		headerName: "Angsuran Sambung Ke",
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
		field: "angSbso",
		headerName: "Angsuran SBSO",
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
		field: "materai",
		headerName: "Materai",
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
		field: "tagihan",
		headerName: "Tagihan",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 120,
	},
	{
		field: "operator",
		headerName: "Operator",
		filterable: false,
		sortable: false,
		headerAlign: "center",
	},
	{
		field: "tglByr",
		headerName: "Tgl Bayar",
		filterable: false,
		sortable: false,
		headerAlign: "center",
	},
	{
		field: "noByr",
		headerName: "No Bayar",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 130,
	},
	{
		field: "ket",
		headerName: "Ket",
		filterable: false,
		sortable: false,
		headerAlign: "center",
	},
	{
		field: "kolektif",
		headerName: "Kolektif",
		filterable: false,
		sortable: false,
		headerAlign: "center",
		width: 200,
	},
];
