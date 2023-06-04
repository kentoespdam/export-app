import StripedTableStyle from "@helpers/striped.table.style";
import Box from "@mui/material/Box";
import TableContainer from "@mui/material/TableContainer";
import { useIkhtisarTabStore } from "@storage/billing.store";
import IkhtisarGolonganBody from "./golongan/golongan.body";
import IkhtisarFooter from "./ikhtisar.footer";
import IkhtisarHead from "./ikhtisar.head";
import IkhtisarSatkerBody from "./satker/satker.body";
import IkhtisarWilayahBody from "./wilayah/wilayah.body";

const IkhtisarBodyBuilder = () => {
	const tabIndex = useIkhtisarTabStore((state) => state.tabIndex);
	switch (tabIndex) {
		case 0:
			return <IkhtisarGolonganBody />;
		case 1:
			return <IkhtisarWilayahBody />;
		case 2:
			return <IkhtisarSatkerBody />;
		default:
			return <IkhtisarGolonganBody />;
	}
};

const IkhtisarComponent = () => {
	return (
		<TableContainer component={Box} sx={{ width: "100%", height: "100%" }}>
			<StripedTableStyle>
				<IkhtisarHead />
				<IkhtisarBodyBuilder />
				<IkhtisarFooter />
			</StripedTableStyle>
		</TableContainer>
	);
};

export default IkhtisarComponent;
