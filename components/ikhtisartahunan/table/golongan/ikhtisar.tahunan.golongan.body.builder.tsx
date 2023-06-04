import { convertToRupiah } from "@helpers/object.formatter";
import { IIkhtisarPerTahun } from "@ikhtisartahunan/ikhtisar.tahunan.column";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { bulanList } from "@services/bulan.list";
import { IGolongan } from "@services/golongan.list";
import { useIkhtisarTahunanStore, useIkhtisarTahunanLaporanStore } from "@storage/ikhtisar.tahunan.store";

const reduceJumlah = (
	page: IIkhtisarPerTahun[] | null,
	kodeGolongan: string,
	find: string
) => {
	let total = 0;
	if (page === undefined || page === null) return total;
	page.forEach((data) => {
		total += data.golonganDataList.reduce((result, item) => {
			if (item.kodeGolongan !== kodeGolongan) return result;
			switch (find) {
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
	bulan: number,
	kodeGolongan: string,
	find: string
) => {
	// console.log(bulan, find);
	const filter = page?.filter((item) => item.bulan === bulan)[0];

	if (filter === undefined) return 0;

	return filter.golonganDataList.reduce((result, item) => {
		if (item.kodeGolongan !== kodeGolongan) return result;

		switch (find) {
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
};

interface IIkhtisarTahunanGolonganBodyBuilderProps {
	golongan: IGolongan;
	kodeGolongan: string;
}

const IkhtisarTahunanGolonganBodyBuilder = ({
	golongan,
	kodeGolongan,
}: IIkhtisarTahunanGolonganBodyBuilderProps) => {
	const page = useIkhtisarTahunanStore((state) => state.page);
	const jnsLap = useIkhtisarTahunanLaporanStore((state) => state.jnsLap);

	if (golongan.kodeGolongan !== kodeGolongan) return null;
	const jumlah = reduceJumlah(page, kodeGolongan, jnsLap);

	if (jnsLap !== "rekap")
		return (
			<TableRow>
				<TableCell>{golongan.golongan}</TableCell>
				<TableCell align="right">
					{jnsLap === "jmlTag"
						? convertToRupiah(jumlah)
						: jumlah.toLocaleString()}
				</TableCell>
				{bulanList.map((bulan, index) => {
					const total = reduceTotal(
						page,
						bulan.idxBulan,
						kodeGolongan,
						jnsLap
					);
					return (
						<TableCell key={index} align="right">
							{jnsLap === "jmlTag"
								? convertToRupiah(total)
								: total.toLocaleString()}
						</TableCell>
					);
				})}
			</TableRow>
		);

	const jmlRek = reduceJumlah(page, kodeGolongan, "jmlRek");
	const jmlPakai = reduceJumlah(page, kodeGolongan, "volPakai");
	const jmlTag = reduceJumlah(page, kodeGolongan, "jmlTag");
	const jmlAir = reduceJumlah(page, kodeGolongan, "jmlAir");
	const jmlAdm = reduceJumlah(page, kodeGolongan, "jmlAdm");
	const jmlDanaMeter = reduceJumlah(page, kodeGolongan, "jmlDanaMeter");
	const jmlAngs = reduceJumlah(page, kodeGolongan, "jmlAngs");
	const rataAir = jmlAir > 0 ? jmlAir / jmlPakai : 0;
	const rataPakai = jmlPakai > 0 ? jmlPakai / jmlRek : 0;

	return (
		<TableRow>
			<TableCell>{golongan.golongan}</TableCell>
			<TableCell align="right">{jmlRek.toLocaleString()}</TableCell>
			<TableCell align="right">{jmlPakai.toLocaleString()}</TableCell>
			<TableCell align="right">{convertToRupiah(jmlTag)}</TableCell>
			<TableCell align="right">{jmlAir.toLocaleString()}</TableCell>
			<TableCell align="right">{convertToRupiah(jmlAdm)}</TableCell>
			<TableCell align="right">{convertToRupiah(jmlDanaMeter)}</TableCell>
			<TableCell align="right">{convertToRupiah(0)}</TableCell>
			<TableCell align="right">{convertToRupiah(jmlAngs)}</TableCell>
			<TableCell align="right">{convertToRupiah(rataAir)}</TableCell>
			<TableCell align="right">{rataPakai.toLocaleString()}</TableCell>
		</TableRow>
	);
};

export default IkhtisarTahunanGolonganBodyBuilder;
