import { convertToRupiah } from "@helpers/object.formatter";
import { TableBody, TableRow, TableCell } from "@mui/material";
import { useBillingStore } from "@storage/billing.store";

const IkhtisarSatkerBody = () => {
	const rows = useBillingStore((state) => state.page?.satkerDataList);

	return rows === undefined ? null : (
		<TableBody>
			{rows.map((row) => (
				<TableRow key={row.satker}>
					<TableCell>{row.nama}</TableCell>
					<TableCell align="right">
						{row.totAktif.toLocaleString()}
					</TableCell>
					<TableCell align="right">
						{row.totPasif.toLocaleString()}
					</TableCell>
					<TableCell align="right">
						{row.totRekening.toLocaleString()}
					</TableCell>
					<TableCell align="right">
						{row.totPakai.toLocaleString()}
					</TableCell>
					<TableCell align="right">
						{convertToRupiah(row.totAir)}
					</TableCell>
					<TableCell align="right">
						{convertToRupiah(row.totBeban)}
					</TableCell>
					<TableCell align="right">
						{convertToRupiah(row.totBpsda)}
					</TableCell>
					<TableCell align="right">
						{convertToRupiah(row.totAngAir)}
					</TableCell>
					<TableCell align="right">
						{convertToRupiah(row.totAngNonAir)}
					</TableCell>
					<TableCell align="right">
						{convertToRupiah(row.totTagihan)}
					</TableCell>
					<TableCell align="right">
						{row.rataAir.toLocaleString()}
					</TableCell>
					<TableCell align="right">
						{row.rataPakai.toLocaleString()}
					</TableCell>
				</TableRow>
			))}
		</TableBody>
	);
};

export default IkhtisarSatkerBody;
