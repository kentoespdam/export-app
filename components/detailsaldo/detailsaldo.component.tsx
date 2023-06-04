"use client";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { useDetailSaldoStore } from "@storage/detailsaldo.store";
import { IDetailSaldo, DetailSaldoColumn } from "./detailsaldo.column";
import DetailSaldoFooter from "./detailsaldo.footer";
import DetailSaldoToolbar from "./detailsaldo.toolbar";

const DetailSaldoComponent = () => {
	const { isLoading, page } = useDetailSaldoStore((state) => ({
		isLoading: state.isLoading,
		page: state.page,
	}));
	const rows: IDetailSaldo[] = page === null ? [] : page.contents;

	return (
		<>
			<Box sx={{ minHeight: "100vh" }}>
				<Paper elevation={2} sx={{ height: 700, width: "100%", p: 2 }}>
					<DataGrid
						getRowId={(row: IDetailSaldo) =>
							`${row.noSambung}${row.noblth}${row.periode}`
						}
						columns={DetailSaldoColumn}
						rows={rows}
						loading={isLoading}
						components={{
							Toolbar: DetailSaldoToolbar,
							Footer: DetailSaldoFooter,
						}}
					/>
				</Paper>
			</Box>
		</>
	);
};

export default DetailSaldoComponent;