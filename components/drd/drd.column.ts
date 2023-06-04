import { IPageRequest, SelectType } from "@helpers/common.interface";
import { convertToRupiah } from "@helpers/object.formatter";
import { GridColDef } from "@mui/x-data-grid";

export type IDrdRequest = {
	periode?: number;
	tglBukti?: string;
} & IPageRequest;

export const IDrdType: SelectType[] = [
	{ id: "periode", label: "Periode", type: "text" },
	{ id: "tglBukti", label: "Tgl. Bukti", type: "text" },
];

export interface IDrd {
	kodeGolongan: string;
	golongan: string;
	tagihan: number;
}

export const DrdColumn: GridColDef[] = [
	{
		field: "kodeGolongan",
		headerName: "Kode Golongan",
		filterable: false,
		sortable: false,
		width: 130,
	},
	{
		field: "golongan",
		headerName: "Golongan",
		filterable: false,
		sortable: false,
		width: 240,
	},
	{
		field: "tagihan",
		headerName: "Tagihan",
		filterable: false,
		sortable: false,
		width: 180,
		align: "right",
		valueFormatter: (params) => {
			return convertToRupiah(params.value);
		},
	},
];
