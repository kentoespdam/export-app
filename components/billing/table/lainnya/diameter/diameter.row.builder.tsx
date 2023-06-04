import { IUkmetData } from "@billing/interface/ukmet.data";
import { IUnitUkmetData } from "@billing/interface/unit.ukmet.data";
import { convertToRupiah } from "@helpers/object.formatter";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useLainnyaJenisLaporanStore } from "@storage/billing.store";

const totalReducer = (rows: IUkmetData[], jnsLap: string) => {
	return rows.reduce((result, row) => {
		switch (jnsLap) {
			case "jmlTag":
				result += row.totTagihan;
				break;
			case "volPakai":
				result += row.totPakai;
				break;
			case "jmlAktif":
				result += row.totAktif;
				break;
			case "jmlPasif":
				result += row.totPasif;
				break;
			case "jmlAktifPasif":
				result += row.totRekening;
				break;
		}
		return result;
	}, 0);
};

type LainnyaDiameterRowBuilderProps = {
	row: IUnitUkmetData;
};

const LainnyaDiameterRowBuilder = (props: LainnyaDiameterRowBuilderProps) => {
	const jnsLap = useLainnyaJenisLaporanStore((state) => state.jnsLap);
	const { row } = props;
	const total = totalReducer(row.ukmetDataList, jnsLap);

	return (
		<TableRow>
			<TableCell>{row.nama}</TableCell>
			{row.ukmetDataList.map((ukmetData, index) => {
				switch (jnsLap) {
					case "jmlTag":
						return (
							<TableCell align="right" key={index}>
								{convertToRupiah(ukmetData.totTagihan)}
							</TableCell>
						);
					case "volPakai":
						return (
							<TableCell align="right" key={index}>
								{ukmetData.totPakai.toLocaleString()}
							</TableCell>
						);
					case "jmlAktif":
						return (
							<TableCell align="right" key={index}>
								{ukmetData.totAktif.toLocaleString()}
							</TableCell>
						);
					case "jmlPasif":
						return (
							<TableCell align="right" key={index}>
								{ukmetData.totPasif.toLocaleString()}
							</TableCell>
						);
					case "jmlAktifPasif":
						return (
							<TableCell align="right" key={index}>
								{ukmetData.totRekening.toLocaleString()}
							</TableCell>
						);
					default:
						return (
							<TableCell align="right" key={index}>
								{convertToRupiah(ukmetData.totTagihan)}
							</TableCell>
						);
				}
			})}
			<TableCell align="right">
				{jnsLap === "jmlTag"
					? convertToRupiah(total)
					: total.toLocaleString()}
			</TableCell>
		</TableRow>
	);
};

export default LainnyaDiameterRowBuilder;
