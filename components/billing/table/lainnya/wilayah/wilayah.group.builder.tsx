import { ICabang } from "@services/cabang.list";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { IUnitGolonganData } from "@billing/interface/unit.golongan.data";
import LainnyaWilayahRowBuilder from "./wilayah.row.builder";

type LainnyaWilayahGroupBuilderProps = {
	cabang: ICabang;
	rows: IUnitGolonganData[];
};

const LainnyaWilayahGroupBuilder = (props: LainnyaWilayahGroupBuilderProps) => {
	const { cabang, rows } = props;
	let totCol = 14;
	if (rows !== undefined) totCol = rows[0].golonganDataList.length + 2;

	return (
		<>
			<TableRow>
				<TableCell
					colSpan={totCol}
					sx={{ background: "#686565", color: "white" }}
				>
					Cabang {cabang.namaCabang}
				</TableCell>
			</TableRow>

			{rows.map((row, index) =>
				cabang.kodeCabang !== row.satker ? null : (
					<LainnyaWilayahRowBuilder key={index} row={row} />
				)
			)}
		</>
	);
};

export default LainnyaWilayahGroupBuilder;
