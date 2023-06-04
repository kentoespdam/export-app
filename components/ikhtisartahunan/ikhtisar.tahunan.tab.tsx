import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import TableContainer from "@mui/material/TableContainer";
import Tabs from "@mui/material/Tabs";
import { ikhtisarTabHandler, useIkhtisarTabStore } from "@storage/ikhtisar.tahunan.store";
import IkhtisarTahunanJenisLaporan from "./ikhtisar.tahunan.jenis.laporan";

const IkhtisarTahunanTabComponent = () => {
	const { tabIndex, setTabIndex } = useIkhtisarTabStore((state) => ({
		tabIndex: state.tabIndex,
		setTabIndex: state.setTabIndex,
	}));

	return (
		<Paper
			elevation={2}
			sx={{ minHeight: 400, width: "100%", p: 1, mb: 1 }}
		>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs
					aria-label="Ikhtisar Tahunan"
					onChange={(e, v) => setTabIndex(v)}
					value={tabIndex}
				>
					<Tab label="Berdasarkan Wilayah" />
					<Tab label="Berdasarkan Golongan" />
				</Tabs>
			</Box>

			<IkhtisarTahunanJenisLaporan />

			<Box sx={{ mt: 1 }}>
				<TableContainer sx={{ minHeight: 300 }}>
					{ikhtisarTabHandler(tabIndex)}
				</TableContainer>
			</Box>
		</Paper>
	);
};

export default IkhtisarTahunanTabComponent;
