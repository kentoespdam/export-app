import TableBody from "@mui/material/TableBody";
import { useBillingStore } from "@storage/billing.store";
import IkhtisarGolonganKelompokBuilder from "./golongan.kelompok.builder";

const IkhtisarGolonganBody = () => {
	const rows = useBillingStore((state) => state.page?.golonganDataList);

	return rows !== undefined ? (
		<TableBody>
			<IkhtisarGolonganKelompokBuilder kelompok={1} rows={rows} />
			<IkhtisarGolonganKelompokBuilder kelompok={2} rows={rows} />
			<IkhtisarGolonganKelompokBuilder kelompok={3} rows={rows} />
		</TableBody>
	) : null;
};

export default IkhtisarGolonganBody;
