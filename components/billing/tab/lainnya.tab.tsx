import LainnyaComponent from "@billing/table/lainnya/lainnya.component";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useLainnyaStore } from "@storage/billing.store";

const LainnyaTab = () => {
	const { tabIndex, setLainnyaTabIndex } = useLainnyaStore((state) => ({
		tabIndex: state.tabIndex,
		setLainnyaTabIndex: state.setLainnyaTabIndex,
	}));

	const handleChange = (event: React.SyntheticEvent, newValue: number) =>
		setLainnyaTabIndex(newValue);

	return (
		<Paper elevation={2} sx={{ height: "100%", width: "100%", p: 1 }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs
					aria-label="After Posting"
					onChange={handleChange}
					value={tabIndex}
				>
					<Tab label="Berdasarkan Diamter WM" />
					<Tab label="Berdasarkan Gol. Pelanggan" />
				</Tabs>
			</Box>

			<LainnyaComponent />
		</Paper>
	);
};

export default LainnyaTab;
