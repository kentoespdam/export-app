import { SelectType } from "@helpers/common.interface";
import { filterToRequest, dataToBody } from "@helpers/fetch.helper";
import DownloadOutlined from "@mui/icons-material/DownloadOutlined";
import LoopOutlined from "@mui/icons-material/LoopOutlined";
import TuneOutlined from "@mui/icons-material/TuneOutlined";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { GridToolbarContainer } from "@mui/x-data-grid/components";
import { EReqMethod } from "@services/fetch.service";
import { useDetailSaldoStore } from "@storage/detailsaldo.store";
import { useFilterDialogStore } from "@storage/filter.dialog.store";
import FilterChip from "@template/filter/filter.chip";
import FilterDialog from "@template/filter/filter.dialog";
import { useEffect, useState } from "react";
import { IDetailSaldoRequest } from "./detailsaldo.column";
import FetchService from "@services/fetch.service";
import { AlertColor } from "@mui/material/Alert";
import Notif from "@template/notif";

const detailSaldoTypes: SelectType[] = [
	{ id: "periode", label: "Periode", type: "text" },
	// { id: "fromPeriode", label: "From Periode", type: "text" },
	// { id: "toPeriode", label: "To Periode", type: "text" },
	{ id: "tglBukti", label: "Tgl Bukti", type: "text" },
	{ id: "nosamw", label: "No Sambung", type: "text" },
	{ id: "nama", label: "Nama", type: "text" },
	{ id: "alamat", label: "Alamat", type: "text" },
	{ id: "kodeGolongan", label: "Kode Golongan", type: "golongan" },
	{ id: "statSambung", label: "Stat Sambung", type: "text" },
	{ id: "unit", label: "Unit", type: "unit" },
	{ id: "satker", label: "Satker", type: "cabang" },
	// { id: "tagihan", label: "Tagihan", type: "text" },
	// { id: "statRekening", label: "Stat Rekening", type: "text" },
];

const DetailSaldoToolbar = () => {
	const { filterOptions, toggleOpen, setTitle, setFilterOptions } =
		useFilterDialogStore();
	const { detSaldoRequest, toggleLoading, setRequest, setPage } =
		useDetailSaldoStore();

	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState(null);
	const [severity, setSeverity] = useState<AlertColor>("info");

	useEffect(() => {
		setTitle("Filter Detail Saldo");
		setFilterOptions(detailSaldoTypes);
	}, []);

	const findHandler = async () => {
		const abortController = new AbortController();
		const fromFilter: IDetailSaldoRequest = filterToRequest(filterOptions);
		const detSaldoReq = {
			...fromFilter,
			pos: 0,
			limit: detSaldoRequest.limit,
			sortBy: detSaldoRequest.sortBy,
			sorDir: detSaldoRequest.sortDir,
		};

		toggleLoading();

		const request = await FetchService.requestGenerator({
			method: EReqMethod.POST,
			externalApi: false,
			body: dataToBody(detSaldoReq),
			url: "/api/detailsaldo",
			signal: abortController.signal,
		});

		if (!request.ok) {
			toggleLoading();
			setMessage((await request.json()).errorMessage);
			setSeverity("error");
			setOpen(true);
			return;
		}

		const result = await request.json();
		toggleLoading();
		setRequest(detSaldoReq);

		if (result.contents.length === 0) {
			setPage(null);
			return;
		}

		setPage(result);
		return () => abortController.abort();
	};

	const downloadHandler = () => {
		const abortController = new AbortController();
		const fromFilter: IDetailSaldoRequest = filterToRequest(filterOptions);
		const detSaldoReq = {
			...fromFilter,
			pos: 0,
			limit: detSaldoRequest.limit,
			sortBy: detSaldoRequest.sortBy,
			sorDir: detSaldoRequest.sortDir,
		};
		toggleLoading();

		try {
			let filename = "";
			FetchService.requestGenerator({
				method: EReqMethod.POST,
				externalApi: false,
				url: "/api/detailsaldo/export",
				body: dataToBody(detSaldoReq),
				signal: abortController.signal,
			})
				.then(async (res) => {
					if (!res.ok) {
						toggleLoading();
						setMessage((await res.json()).errorMessage);
						setSeverity("error");
						setOpen(true);
						return;
					}

					const headers: Headers = res.headers;
					filename = (
						headers.get("Content-Disposition") || ""
					).replace("attachment; filename=", "");
					
					return res.blob();
				})
				.then((blob) => {
					if (blob === undefined)
						throw new Error("Failed getting file");
					const url = window.URL.createObjectURL(blob);
					const a = document.createElement("a");
					a.href = url;
					a.download = filename;
					document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
					a.click();
					a.remove();
				})
				.catch((e) => {
					toggleLoading();
					console.log(e);
				})
				.finally(() => {
					toggleLoading();
				});
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<GridToolbarContainer sx={{ m: 1 }}>
			<Grid container direction="row" spacing={1}>
				<Grid item xs={12} sx={{ mb: 1 }}>
					<Typography variant="h4">Data Detail Saldo</Typography>
					<Divider />
				</Grid>
				<Grid item lg={12}>
					<Button
						variant="outlined"
						size="small"
						startIcon={<TuneOutlined />}
						sx={{ mr: 1 }}
						onClick={toggleOpen}
					>
						Filter
					</Button>
					<Button
						startIcon={<LoopOutlined />}
						variant="outlined"
						size="small"
						sx={{ mr: 1 }}
						onClick={findHandler}
					>
						FIND
					</Button>
					<Button
						startIcon={<DownloadOutlined />}
						variant="outlined"
						size="small"
						sx={{ mr: 1 }}
						onClick={downloadHandler}
					>
						Excel
					</Button>
				</Grid>
				<Grid item lg={12}>
					<FilterChip />
				</Grid>
				<Grid item lg={12}>
					<Divider />
				</Grid>
			</Grid>
			<FilterDialog />
			<Notif
				open={open}
				setOpen={setOpen}
				message={message}
				severity={severity}
			/>
		</GridToolbarContainer>
	);
};

export default DetailSaldoToolbar;
