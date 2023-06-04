"use client";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { usePemakaianStore } from "@storage/pemakaian.store";
import { PemakaianColumn } from "./pemakaian.column";
import PemakaianToolbar from "./pemakaian.toolbar";
import PemakaianFooter from "./pemakaian.footer";

const PemakaianComponent = () => {
	const { isLoading, page } = usePemakaianStore();

	const rows = page === null ? [] : page.contents;

	return (
		<Box sx={{ minHeight: "100vh" }}>
			<Paper elevation={2} sx={{ height: 700, width: "100%", p: 2 }}>
				<DataGrid
					getRowId={(row) => `${row.nosamw}`}
					columns={PemakaianColumn}
					rows={rows}
					loading={isLoading}
					components={{
						Toolbar: PemakaianToolbar,
						Footer: PemakaianFooter,
					}}
				/>
			</Paper>
		</Box>
	);
};

export default PemakaianComponent;
