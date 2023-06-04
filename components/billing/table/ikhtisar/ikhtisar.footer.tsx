import { IBaseDrd } from "@billing/interface/base.drd";
import { IUnitData } from "@billing/interface/unit.data";
import { convertToRupiah } from "@helpers/object.formatter";
import TableCell from "@mui/material/TableCell";
import TableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import { useBillingStore } from "@storage/billing.store";

const totalReducer = (result: IBaseDrd, row: IBaseDrd) => {
	result.totRekening += row.totRekening;
	result.totAktif += row.totAktif;
	result.totPasif += row.totPasif;
	result.totPakai += row.totPakai;
	result.totAir += row.totAir;
	result.totBeban += row.totBeban;
	result.totBpsda += row.totBpsda;
	result.totAngAir += row.totAngAir;
	result.totAngNonAir += row.totAngNonAir;
	result.totTagihan += row.totTagihan;

	return result;
};

const IkhtisarFooterData = ({ rows }: { rows: IUnitData[] }) => {
	const initialBaseDrd = {
		totRekening: 0,
		totAktif: 0,
		totPasif: 0,
		totPakai: 0,
		totAir: 0,
		totBeban: 0,
		totBpsda: 0,
		totAngAir: 0,
		totAngNonAir: 0,
		totTagihan: 0,
		rataAir: 0,
		rataPakai: 0,
	};
	const total = rows.reduce(totalReducer, initialBaseDrd);
	return (
		<TableFooter>
			<TableRow>
				<TableCell variant="body">Total</TableCell>
				<TableCell variant="body" align="right">
					{total.totAktif.toLocaleString()}
				</TableCell>
				<TableCell variant="body" align="right">
					{total.totPasif.toLocaleString()}
				</TableCell>
				<TableCell variant="body" align="right">
					{total.totRekening.toLocaleString()}
				</TableCell>
				<TableCell variant="body" align="right">
					{total.totPakai.toLocaleString()}
				</TableCell>
				<TableCell variant="body" align="right">
					{convertToRupiah(total.totAir)}
				</TableCell>
				<TableCell variant="body" align="right">
					{convertToRupiah(total.totBeban)}
				</TableCell>
				<TableCell variant="body" align="right">
					{convertToRupiah(total.totBpsda)}
				</TableCell>
				<TableCell variant="body" align="right">
					{convertToRupiah(total.totAngAir)}
				</TableCell>
				<TableCell variant="body" align="right">
					{convertToRupiah(total.totAngNonAir)}
				</TableCell>
				<TableCell variant="body" align="right">
					{convertToRupiah(total.totTagihan)}
				</TableCell>
				<TableCell variant="body" align="right">
					{Math.round(total.totAir / total.totPakai).toLocaleString()}
				</TableCell>
				<TableCell variant="body" align="right">
					{Math.round(
						total.totPakai / total.totAktif
					).toLocaleString()}
				</TableCell>
			</TableRow>
		</TableFooter>
	);
};

const IkhtisarFooter = () => {
	const rows = useBillingStore((state) => state.page?.unitDataList);

	return rows === undefined ? null : <IkhtisarFooterData rows={rows} />;
};

export default IkhtisarFooter;
