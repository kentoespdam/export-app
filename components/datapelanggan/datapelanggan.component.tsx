"use client";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { useDataPelangganStore } from "@storage/datapelanggan.store";
import { DataPelangganColumn, IDataPelanggan } from "./datapelanggan.column";
import DataPelangganFooter from "./datapelanggan.footer";
import DatapelangganToolbar from "./datapelanggan.toolbar";

const DataPelangganComponent = () => {
	const store = useDataPelangganStore();
	const rows = store.page === null ? [] : store.page.contents;

	return (
		<Box sx={{ minHeight: "100vh" }}>
			<Paper elevation={2} sx={{ height: 700, p: 2 }}>
				<DataGrid
					getRowId={(row: IDataPelanggan) => row.noreg}
					columns={DataPelangganColumn}
					rows={rows}
					loading={store.isLoading}
					components={{
						Toolbar: DatapelangganToolbar,
						Footer: DataPelangganFooter,
					}}
				/>
			</Paper>
		</Box>
	);
};

export default DataPelangganComponent;
