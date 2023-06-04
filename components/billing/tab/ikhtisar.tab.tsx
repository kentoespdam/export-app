import IkhtisarComponent from "@billing/table/ikhtisar/ikhtisar.component";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useIkhtisarTabStore } from "@storage/billing.store";

const IkhtisarTab = () => {
	const { tabIndex, setIkhtisarTabIndex } = useIkhtisarTabStore((state) => ({
		tabIndex: state.tabIndex,
		setIkhtisarTabIndex: state.setIkhtisarTabIndex,
	}));

	return (
		<Paper elevation={2} sx={{ p: 1, height: "100%" }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs
					aria-label="After Posting"
					onChange={(e, v) => setIkhtisarTabIndex(v)}
					value={tabIndex}
				>
					<Tab label="Golongan Pelanggan" />
					<Tab label="Wilayah/Lokasi" />
					<Tab label="Satker" />
				</Tabs>
			</Box>

			<Box sx={{ mt: 1, height: "100%" }}>
				<IkhtisarComponent />
			</Box>
		</Paper>
	);
};

export default IkhtisarTab;
