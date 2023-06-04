import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { bulanList } from "@services/bulan.list";
import { useIkhtisarTahunanLaporanStore } from "@storage/ikhtisar.tahunan.store";

const IkhtisarTahunanHead = ({ berdasar }: { berdasar: string }) => {
	const jnsLap = useIkhtisarTahunanLaporanStore((state) => state.jnsLap);

	if (jnsLap !== "rekap")
		return (
			<TableHead>
				<TableRow>
					<TableCell rowSpan={2}>{berdasar}</TableCell>
					<TableCell rowSpan={2}>Jumlah</TableCell>
					<TableCell colSpan={12}>
						Rincian Jumlah Tagihan per Bulan
					</TableCell>
				</TableRow>
				<TableRow>
					{bulanList.map((bulan) => (
						<TableCell key={bulan.idxBulan}>{bulan.nama}</TableCell>
					))}
				</TableRow>
			</TableHead>
		);

	return (
		<TableHead>
			<TableRow>
				<TableCell variant="head" rowSpan={2}>
					{berdasar}
				</TableCell>
				<TableCell variant="head" rowSpan={2}>
					Jumlah <br />
					Lembar <br />
					Rekening
				</TableCell>
				<TableCell variant="head" rowSpan={2}>
					Jumlah <br />
					Pemakaian <br />
					(M3)
				</TableCell>
				<TableCell variant="head" rowSpan={2}>
					Jumlah <br />
					Tagihan <br />
					(Rp)
				</TableCell>
				<TableCell variant="head" colSpan={4} align="center">
					Rincian Tagian Rekening
				</TableCell>
				<TableCell variant="head" rowSpan={2}>
					Angsuran <br />
					(Rp)
				</TableCell>
				<TableCell variant="head" colSpan={2}>
					Rata-Rata
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Harga Air <br />
					(Rp)
				</TableCell>
				<TableCell>
					Administrasi <br />
					(Rp)
				</TableCell>
				<TableCell>
					Dana Meter <br />
					(Rp)
				</TableCell>
				<TableCell>
					BP Sbr Daya Air <br />
					(Rp)
				</TableCell>
				<TableCell>Harga Air</TableCell>
				<TableCell>Pakai</TableCell>
			</TableRow>
		</TableHead>
	);
};

export default IkhtisarTahunanHead;
