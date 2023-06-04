import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { golonganList } from "@services/golongan.list";
import { useBillingStore } from "@storage/billing.store";

const LainnyaWilayahHead = () => {
	const rows = useBillingStore((state) => state.page?.unitGolonganDataList);
	let totGol = 12;
	if (rows !== undefined) totGol = rows[0].golonganDataList.length;

	return (
		<TableHead>
			<TableRow>
				<TableCell align="center" rowSpan={2}>
					Wilayah
				</TableCell>
				<TableCell align="center" colSpan={totGol === 12 ? 2 : 4}>
					Kelompok I
				</TableCell>
				<TableCell align="center" colSpan={totGol === 12 ? 6 : 12}>
					Kelompok II
				</TableCell>
				<TableCell align="center" colSpan={totGol === 12 ? 4 : 8}>
					Kelompok III
				</TableCell>
				<TableCell rowSpan={2}>Jumlah</TableCell>
			</TableRow>
			<TableRow>
				{golonganList
					.sort((a, b) =>
						a.kodeSubGolongan
							.substring(0, 1)
							.localeCompare(b.kodeSubGolongan.substring(0, 1))
					)
					.map((item, index) =>
						index <= totGol - 1 ? (
							<TableCell key={item.kodeGolongan}>
								{item.golongan}
							</TableCell>
						) : null
					)}
			</TableRow>
		</TableHead>
	);
};

export default LainnyaWilayahHead;
