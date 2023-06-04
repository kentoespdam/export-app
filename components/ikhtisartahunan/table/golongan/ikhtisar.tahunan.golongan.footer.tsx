import { convertToRupiah } from "@helpers/object.formatter";
import { IIkhtisarPerTahun } from "@ikhtisartahunan/ikhtisar.tahunan.column";
import TableCell from "@mui/material/TableCell";
import TableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import { bulanList } from "@services/bulan.list";
import { useIkhtisarTahunanStore, useIkhtisarTahunanLaporanStore } from "@storage/ikhtisar.tahunan.store";

const reduceJumlah = (page: IIkhtisarPerTahun[] | null, jnsLap: string) => {
	let total = 0;

	if (page === null) return total;

	page.forEach((data) => {
		total += data.golonganDataList.reduce((result, item) => {
			switch (jnsLap) {
				case "jmlTag":
					result += item.totTagihan;
					break;
				case "volPakai":
					result += item.totPakai;
					break;
				case "jmlRek":
					result += item.totRekening;
					break;
				case "jmlAir":
					result += item.totAir;
					break;
				case "jmlAdm":
					result += item.totAdm;
					break;
				case "jmlDanaMeter":
					result += item.totDanaMeter;
					break;
				case "jmlAngs":
					result += item.totAngsuran;
					break;
				default:
					result += item.totTagihan;
			}
			return result;
		}, 0);
	});

	return total;
};

const reduceTotal = (
	page: IIkhtisarPerTahun[] | null,
	jnsLap: string,
	idxBulan: number
) => {
	let total = 0;

	if (page === null) return total;

	const filter = page.filter((item) => item.bulan === idxBulan)[0];
	if (filter === undefined) return total;

	total += filter.golonganDataList.reduce((result, item) => {
		switch (jnsLap) {
			case "jmlTag":
				result += item.totTagihan;
				break;
			case "volPakai":
				result += item.totPakai;
				break;
			case "jmlRek":
				result += item.totRekening;
				break;
			default:
				result += item.totTagihan;
		}
		return result;
	}, 0);
	return total;
};

const IkhtisarTahunanGolonganFooter = () => {
	const page = useIkhtisarTahunanStore((state) => state.page);
	const jnsLap = useIkhtisarTahunanLaporanStore((state) => state.jnsLap);

	const jumlah = reduceJumlah(page, jnsLap);

	if (jnsLap !== "rekap")
		return (
			<TableFooter>
				<TableRow>
					<TableCell variant="body">Total</TableCell>
					<TableCell variant="body" align="right">
						{jnsLap === "jmlTag"
							? convertToRupiah(jumlah)
							: jumlah.toLocaleString()}
					</TableCell>
					{bulanList.map((bulan) => {
						// const total = reduceTotal(rows, index + 1, jnsLap);
						const total = reduceTotal(page, jnsLap, bulan.idxBulan);
						return (
							<TableCell
								variant="body"
								key={bulan.idxBulan}
								align="right">
								{jnsLap === "jmlTag"
									? convertToRupiah(total)
									: total.toLocaleString()}
							</TableCell>
						);
					})}
				</TableRow>
			</TableFooter>
		);

	const jmlRek = reduceJumlah(page, "jmlRek");
	const volPakai = reduceJumlah(page, "volPakai");
	const jmlTag = reduceJumlah(page, "jmlTag");
	const jmlAir = reduceJumlah(page, "jmlAir");
	const jmlAdm = reduceJumlah(page, "jmlAdm");
	const jmlDanaMeter = reduceJumlah(page, "jmlDanaMeter");
	const jmlAngs = reduceJumlah(page, "jmlAngs");
	const rataAir = jmlAir > 0 ? jmlAir / volPakai : 0;
	const rataPakai = volPakai > 0 ? volPakai / jmlRek : 0;

	return (
		<TableFooter>
			<TableRow>
				<TableCell variant="body">Total</TableCell>
				<TableCell variant="body" align="right">
					{jmlRek.toLocaleString()}
				</TableCell>
				<TableCell variant="body" align="right">
					{volPakai.toLocaleString()}
				</TableCell>
				<TableCell variant="body" align="right">
					{convertToRupiah(jmlTag)}
				</TableCell>
				<TableCell variant="body" align="right">
					{convertToRupiah(jmlAir)}
				</TableCell>
				<TableCell variant="body" align="right">
					{convertToRupiah(jmlAdm)}
				</TableCell>
				<TableCell variant="body" align="right">
					{convertToRupiah(jmlDanaMeter)}
				</TableCell>
				<TableCell variant="body" align="right">
					{convertToRupiah(0)}
				</TableCell>
				<TableCell variant="body" align="right">
					{convertToRupiah(jmlAngs)}
				</TableCell>
				<TableCell variant="body" align="right">
					{convertToRupiah(rataAir)}
				</TableCell>
				<TableCell variant="body" align="right">
					{rataPakai.toFixed(0)}
				</TableCell>
			</TableRow>
		</TableFooter>
	);
};

export default IkhtisarTahunanGolonganFooter;
