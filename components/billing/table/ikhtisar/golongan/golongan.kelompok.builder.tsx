import { IGolonganData } from "@billing/interface/golongan.data";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import IkhtisarGolonganRowBuilder from "./golongan.row.builder";

const sortByUrut = (a: IGolonganData, b: IGolonganData) => {
	const a1 = a.urut;
	const b1 = b.urut;
	if (a1 < b1) return -1;
	if (a1 > b1) return 1;

	return 0;
};

const kelompokToString = (kelompok: number) => {
	switch (kelompok) {
		case 1:
			return "Kelompok I";
		case 2:
			return "Kelompok II";
		case 3:
			return "Kelompok III";
	}
};

export type KonsolidasiKelompokBuilderProps = {
	kelompok: 1 | 2 | 3;
	rows: IGolonganData[] | undefined;
};

const IkhtisarGolonganKelompokBuilder = (
	props: KonsolidasiKelompokBuilderProps
) => {
	const { kelompok, rows } = props;

	return rows !== undefined ? (
		<>
			<TableRow>
				<TableCell
					colSpan={14}
					sx={{ background: "#686565", color: "white" }}>
					{kelompokToString(kelompok)}
				</TableCell>
			</TableRow>

			{rows.sort(sortByUrut).map((row, index) => {
				const kode = row.kodeSubGolongan.split("-");
				return Number(kode[0]) === kelompok ? (
					<IkhtisarGolonganRowBuilder key={index} rowData={row} />
				) : null;
			})}
		</>
	) : null;
};

export default IkhtisarGolonganKelompokBuilder;
