import { IGolonganData } from "@billing/interface/golongan.data";
import { convertToRupiah } from "@helpers/object.formatter";
import { TableRow, TableCell } from "@mui/material";

type KonsolidasiRowBuilderProps = {
	rowData: IGolonganData;
};

const IkhtisarGolonganRowBuilder = (props: KonsolidasiRowBuilderProps) => {
	const { rowData } = props;

	return (
		<TableRow>
			{/* <TableCell align="right">.</TableCell> */}
			<TableCell>{rowData.golongan}</TableCell>
			<TableCell align="right">
				{rowData.totAktif.toLocaleString()}
			</TableCell>
			<TableCell align="right">
				{rowData.totPasif.toLocaleString()}
			</TableCell>
			<TableCell align="right">
				{rowData.totRekening.toLocaleString()}
			</TableCell>
			<TableCell align="right">
				{rowData.totPakai.toLocaleString()}
			</TableCell>
			<TableCell align="right">
				{convertToRupiah(rowData.totAir)}
			</TableCell>
			<TableCell align="right">
				{convertToRupiah(rowData.totBeban)}
			</TableCell>
			<TableCell align="right">
				{convertToRupiah(rowData.totBpsda)}
			</TableCell>
			<TableCell align="right">
				{convertToRupiah(rowData.totAngAir)}
			</TableCell>
			<TableCell align="right">
				{convertToRupiah(rowData.totAngNonAir)}
			</TableCell>
			<TableCell align="right">
				{convertToRupiah(rowData.totTagihan)}
			</TableCell>
			<TableCell align="right">
				{rowData.rataAir.toLocaleString()}
			</TableCell>
			<TableCell align="right">
				{rowData.rataPakai.toLocaleString()}
			</TableCell>
		</TableRow>
	);
};

export default IkhtisarGolonganRowBuilder;
