import { IPageRequest } from "@helpers/common.interface";
import { GridColDef } from "@mui/x-data-grid";

export type IAngsuranRequest = {
	noreg?: string;
	nosamw?: string;
	unit?: string;
	kodeGolongan?: string;
	nama?: string;
	alamat?: string;
	tglBayar?: string;
	tglBukti?: string;
	status?: string;
	tagihan?: string;
} & IPageRequest;

export interface IAngsuran {
	noBukti: string;
	tglBukti: Date;
	noreg: string;
	nosamw: string;
	nama: string;
	alamat: string;
	noblth: string;
	jnsangs: string;
	uraian: string;
	angsKe: number;
	angsTot: number;
	jmlTag: number;
	rateJasa: number;
	pokokKredit: number;
	meterai: number;
	jmlDibayar: number;
	saldoKredit: number;
	noByr: string;
	tglBayar: Date;
	stat: string;
	tg: number;
	jlw: string;
	urjlwp: string;
}

export const AngsuranColumn: GridColDef[] = [
	{
		field: "noBukti",
		headerName: "No Bukti",
		filterable: false,
		sortable: false,
		width: 200,
	},
	{
		field: "tglBukti",
		headerName: "Tgl Bukti",
		filterable: false,
		sortable: false,
	},
	{
		field: "noreg",
		headerName: "No Reg.",
		filterable: false,
		sortable: false,
	},
	{
		field: "nosamw",
		headerName: "Nosamw",
		filterable: false,
		sortable: false,
	},
	{
		field: "nama",
		headerName: "Nama",
		filterable: false,
		sortable: false,
		minWidth: 220,
	},
	{
		field: "alamat",
		headerName: "Alamat",
		filterable: false,
		sortable: false,
		width: 300,
	},
	{
		field: "noblth",
		headerName: "No BLTH",
		filterable: false,
		sortable: false,
		width: 130,
	},
	{
		field: "jnsangs",
		headerName: "Jns Angs",
		filterable: false,
		sortable: false,
	},
	{
		field: "uraian",
		headerName: "Uraian",
		filterable: false,
		sortable: false,
		width: 250,
	},
	{
		field: "angsKe",
		headerName: "Angs Ke",
		filterable: false,
		sortable: false,
	},
	{
		field: "angsTot",
		headerName: "Angs Tot",
		filterable: false,
		sortable: false,
	},
	{
		field: "jmlTag",
		headerName: "Jml Tag",
		filterable: false,
		sortable: false,
	},
	{
		field: "rateJasa",
		headerName: "Rate Jasa",
		filterable: false,
		sortable: false,
	},
	{
		field: "pokokKredit",
		headerName: "Pokok Kredit",
		filterable: false,
		sortable: false,
	},
	{
		field: "jasaKredit",
		headerName: "Jasa Kredit",
		filterable: false,
		sortable: false,
	},
	{
		field: "meterai",
		headerName: "Meterai",
		filterable: false,
		sortable: false,
	},
	{
		field: "jmlDibayar",
		headerName: "Jml Dibayar",
		filterable: false,
		sortable: false,
	},
	{
		field: "saldoKredit",
		headerName: "Saldo Kredit",
		filterable: false,
		sortable: false,
	},
	{
		field: "noByr",
		headerName: "No Bayar",
		filterable: false,
		sortable: false,
	},
	{
		field: "tglByr",
		headerName: "Tgl Bayar",
		filterable: false,
		sortable: false,
	},
	{ field: "stat", headerName: "Status", filterable: false, sortable: false },
	{ field: "tg", headerName: "Tagihan", filterable: false, sortable: false },
	{ field: "jlw", headerName: "Jlw", filterable: false, sortable: false },
	{
		field: "urjlwp",
		headerName: "Urjlwp",
		filterable: false,
		sortable: false,
		minWidth: 220,
	},
];
