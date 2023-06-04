"use client";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { useDrdStore } from "@storage/drd.store";
import { DrdColumn } from "./drd.column";
import DrdToolbar from "./drd.toolbar";

const DrdComponent = () => {
	const { isLoading, page } = useDrdStore((state) => ({
		isLoading: state.isLoading,
		page: state.page,
	}));
	const rows = page === null ? [] : page;

	return (
		<>
			<Box sx={{ minHeight: "100vh" }}>
				<Paper elevation={2} sx={{ height: 700, width: "100%", p: 2 }}>
					<DataGrid
						getRowId={(row) => `${row.kodeGolongan}${row.tagihan}`}
						columns={DrdColumn}
						rows={rows}
						loading={isLoading}
						components={{
							Toolbar: DrdToolbar,
							// 	Footer: DetailSaldoFooter,
						}}
					/>
				</Paper>
			</Box>
		</>
	);
};

export default DrdComponent;
