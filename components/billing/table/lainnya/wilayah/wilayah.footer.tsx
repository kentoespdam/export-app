import { IGolonganData } from "@billing/interface/golongan.data";
import { convertToRupiah } from "@helpers/object.formatter";
import TableCell from "@mui/material/TableCell";
import TableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import { golonganList } from "@services/golongan.list";
import { useBillingStore, useLainnyaJenisLaporanStore } from "@storage/billing.store";

const reduceTotalGolonganData = (
	rows: IGolonganData[],
	kodeGolongan: string,
	jnsLap: string
) => {
	return rows.reduce((result, row) => {
		if (row.kodeGolongan === kodeGolongan) {
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
		}
		return result;
	}, 0);
};

const LainnyaWilayahFooter = () => {
	const rows = useBillingStore((state) => state.page?.golonganDataList);
	const jnsLap = useLainnyaJenisLaporanStore((state) => state.jnsLap);

	if (rows === undefined) {
		return (
			<TableFooter>
				<TableRow>
					<TableCell variant="body">Total</TableCell>
				</TableRow>
			</TableFooter>
		);
	}

	const totGol = rows.length;
	let finalTotal = 0;

	return (
		<TableFooter>
			<TableRow>
				<TableCell variant="body">Total</TableCell>
				{golonganList
					.sort((a, b) =>
						a.kodeSubGolongan
							.substring(0, 1)
							.localeCompare(b.kodeSubGolongan.substring(0, 1))
					)
					.map((head, index) => {
						if (index < totGol) {
							const total = reduceTotalGolonganData(
								rows,
								head.kodeGolongan,
								jnsLap
							);
							finalTotal += total;
							return (
								<TableCell
									variant="body"
									key={index}
									align="right">
									{jnsLap === "jmlTag"
										? convertToRupiah(total)
										: total.toLocaleString()}
								</TableCell>
							);
						}
					})}
				<TableCell variant="body" align="right">
					{jnsLap === "jmlTag"
						? convertToRupiah(finalTotal)
						: finalTotal.toLocaleString()}
				</TableCell>
			</TableRow>
		</TableFooter>
	);
};

export default LainnyaWilayahFooter;