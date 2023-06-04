import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useIkhtisarTabStore } from "@storage/billing.store";

const IkhtisarHead = () => {
	const tabIndex = useIkhtisarTabStore((state) => state.tabIndex);

	return (
		<TableHead>
			<TableRow>
				<TableCell variant="head" align="center" rowSpan={2}>
					{tabIndex == 0 ? "Kelompok/Golongan" : "Wilayah"}
				</TableCell>
				<TableCell variant="head" align="center" colSpan={3}>
					Status Pelanggan
				</TableCell>
				<TableCell variant="head" align="center" rowSpan={2}>
					Jumlah <br />
					Pemakaian (M<sup>2</sup>)
				</TableCell>
				<TableCell variant="head" align="center" colSpan={4}>
					Rincian Tagihan Rekening
				</TableCell>
				<TableCell variant="head" align="center" rowSpan={2}>
					Angsuran Non Air <br />
					(Rp.)
				</TableCell>
				<TableCell variant="head" align="center" rowSpan={2}>
					Jumlah Tagihan <br />
					(Rp.)
				</TableCell>
				<TableCell variant="head" align="center" colSpan={4}>
					Rata-Rata
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell variant="head" align="center">
					Aktif
				</TableCell>
				<TableCell variant="head" align="center">
					Pasif
				</TableCell>
				<TableCell variant="head" align="center">
					Jumlah
				</TableCell>
				<TableCell variant="head" align="center">
					Harga Air <br />
					(Rp.)
				</TableCell>
				<TableCell variant="head" align="center">
					Beban MA <br />
					(Rp.)
				</TableCell>
				<TableCell variant="head" align="center">
					BP SDA <br />
					(Rp.)
				</TableCell>
				<TableCell variant="head" align="center">
					Angsuran Air <br />
					(Rp.)
				</TableCell>
				<TableCell variant="head" align="center">
					Harga Air
				</TableCell>
				<TableCell variant="head" align="center">
					Pakai
				</TableCell>
			</TableRow>
		</TableHead>
	);
};

export default IkhtisarHead;
