import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { IPendapatan } from "./pendapatan.column";
import { usePendapatanStore } from "@storage/pendapatan.store";
import { convertToRupiah } from "@helpers/object.formatter";

interface ITotal {
	air: number;
	danaMeter: number;
}

const reduceTotal = (rows: IPendapatan[]) => {
	return rows.reduce(
		(result: { air: number; danaMeter: number }, arr) => {
			result.air += arr.air;
			result.danaMeter += arr.danaMeter;
			return result;
		},
		{ air: 0, danaMeter: 0 }
	);
};

const PendapatanTotal = () => {
	const rows = usePendapatanStore((state) => state.rows);
	const total: ITotal =
		rows === undefined ? { air: 0, danaMeter: 0 } : reduceTotal(rows);

	return (
		<Grid
			container
			spacing={2}
			sx={{ width: "100%", display: "flex", justifyContent: "center" }}
		>
			<Grid item xs={12} sx={{ mb: 1 }}>
				<Typography variant="h3" textAlign="center">
					Data Pendapatan
				</Typography>
				<Divider />
			</Grid>
			<Grid item xs={8} md={3}>
				<Paper elevation={2} sx={{ textAlign: "center", p: 1 }}>
					<Typography variant="subtitle2" gutterBottom>
						Pendapatan Air
					</Typography>
					<Typography variant="h5">
						{convertToRupiah(total.air)}
					</Typography>
				</Paper>
			</Grid>

			<Grid item xs={8} md={3}>
				<Paper elevation={2} sx={{ textAlign: "center", p: 1 }}>
					<Typography variant="subtitle2" gutterBottom>
						Pendapatan Dana Meter
					</Typography>
					<Typography variant="h5">
						{convertToRupiah(total.danaMeter)}
					</Typography>
				</Paper>
			</Grid>

			<Grid item xs={8} md={3}>
				<Paper elevation={2} sx={{ textAlign: "center", p: 1 }}>
					<Typography variant="subtitle2" gutterBottom>
						Pendapatan Air + Dana Meter
					</Typography>
					<Typography variant="h5">
						{convertToRupiah(total.air + total.danaMeter)}
					</Typography>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default PendapatanTotal;
