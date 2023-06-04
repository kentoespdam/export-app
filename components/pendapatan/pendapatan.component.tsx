"use client";
import { usePendapatanStore } from "@storage/pendapatan.store";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { IPendapatan, PendapatanColumn } from "./pendapatan.column";
import PendapatanToolbar from "./pendapatan.toolbar";
import PendapatanTotal from "./pendapatan.total";

const PendapatanComponent = () => {
	const { isLoading, rows } = usePendapatanStore((state) => ({
		isLoading: state.isLoading,
		rows: state.rows,
	}));

	return (
		<>
			<Box sx={{ width: "100%", mb: 1 }}>
				<PendapatanTotal />
			</Box>
			<Box sx={{ minHeight: "100vh" }}>
				<Paper elevation={2} sx={{ height: 700, width: "100%", p: 2 }}>
					<DataGrid
						getRowId={(row: IPendapatan) =>
							`${row.kodeGolongan}${row.kodeLokasi}`
						}
						columns={PendapatanColumn}
						rows={rows}
						pageSize={10}
						rowsPerPageOptions={[10, 25, 50, 100]}
						loading={isLoading}
						keepNonExistentRowsSelected
						components={{
							Toolbar: PendapatanToolbar,
						}}
					/>
				</Paper>
			</Box>
		</>
	);
};

export default PendapatanComponent;
