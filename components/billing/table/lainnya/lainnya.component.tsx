import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import { useLainnyaStore } from "@storage/billing.store";
import LainnyaDiameterComponent from "./diameter/diameter.component";
import LainnyaJenisLaporan from "./lainnya.jenis.laporan";
import LainnyaWilayahComponent from "./wilayah/wilayah.component";

const LainnyaComponent = () => {
	const tabIndex = useLainnyaStore((state) => state.tabIndex);

	return (
		<Paper elevation={1} sx={{ p: 1, height: "100%" }}>
			<LainnyaJenisLaporan />

			<Box sx={{ pt: 1, height: "100%" }}>
				<TableContainer
					component={Box}
					sx={{ width: "100%", height: "100%" }}
				>
					{tabIndex === 0 ? (
						<LainnyaDiameterComponent />
					) : (
						<LainnyaWilayahComponent />
					)}
				</TableContainer>
			</Box>
		</Paper>
	);
};

export default LainnyaComponent;
