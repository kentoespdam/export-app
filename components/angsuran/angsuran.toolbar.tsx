import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { GridToolbarContainer } from "@mui/x-data-grid/components";
import Button from "@mui/material/Button";
import LoopOutlined from "@mui/icons-material/LoopOutlined";
import DownloadOutlined from "@mui/icons-material/DownloadOutlined";
import TuneOutlined from "@mui/icons-material/TuneOutlined";
import { SelectType, IPages } from "@helpers/common.interface";
import { filterToRequest, dataToBody } from "@helpers/fetch.helper";
import { EReqMethod } from "@services/fetch.service";
import { useAngsuranStore } from "@storage/angsuran.store";
import { useFilterDialogStore } from "@storage/filter.dialog.store";
import FilterChip from "@template/filter/filter.chip";
import FilterDialog from "@template/filter/filter.dialog";
import { useEffect, useState } from "react";
import { IAngsuranRequest, IAngsuran } from "./angsuran.column";
import FetchService from "@services/fetch.service";
import { AlertColor } from "@mui/material/Alert";
import Notif from "@template/notif";

const angsuranSelectTypes: SelectType[] = [
	{ id: "noreg", label: "No. Registrasi", type: "text" },
	{ id: "nosamw", label: "No. sambung", type: "text" },
	{ id: "unit", label: "Unit", type: "unit" },
	{ id: "kodeGolongan", label: "golongan", type: "golongan" },
	{ id: "nama", label: "nama", type: "text" },
	{ id: "alamat", label: "alamat", type: "text" },
	{ id: "tglBayar", label: "tglBayar", type: "text" },
	{ id: "tglBukti", label: "tglBukti", type: "text" },
	{ id: "status", label: "status", type: "text" },
	{ id: "tagihan", label: "tagihan", type: "text" },
];

const AngsuranToolbar = () => {
	const { filterOptions, toggleOpen, setTitle, setFilterOptions } =
		useFilterDialogStore();
	const { angRequest, setRequest, toggleLoading, setPage } =
		useAngsuranStore();

	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState(null);
	const [severity, setSeverity] = useState<AlertColor>("info");

	useEffect(() => {
		setTitle("Filter Angsuran");
		setFilterOptions(angsuranSelectTypes);
	}, []);

	const findHandler = async () => {
		const abortController = new AbortController();
		const fromFilter: IAngsuranRequest = filterToRequest(filterOptions);
		const angReq = {
			...fromFilter,
			pos: 0,
			limit: angRequest.limit,
			sortBy: angRequest.sortBy,
			sortDir: angRequest.sortDir,
		};

		toggleLoading();
		const request = await FetchService.requestGenerator({
			method: EReqMethod.POST,
			externalApi: false,
			body: dataToBody(angReq),
			url: "/api/angsuran",
			signal: abortController.signal,
		});

		if (!request.ok) {
			toggleLoading();
			setMessage((await request.json()).errorMessage);
			setSeverity("error");
			setOpen(true);
			return;
		}

		const result: IPages<IAngsuran> = await request.json();
		toggleLoading();
		if (result.contents.length === 0) {
			setPage(null);
			setRequest(angReq);
			return;
		}

		setPage(result);
		setRequest(angReq);
		return () => abortController.abort();
	};

	const exportHandler = async () => {
		const abortController = new AbortController();
		const fromFilter = filterToRequest(filterOptions);
		const frmReq = {
			...fromFilter,
		};

		toggleLoading();
		try {
			let filename = "";
			FetchService.requestGenerator({
				method: EReqMethod.POST,
				externalApi: false,
				url: "/api/angsuran/export",
				body: dataToBody(frmReq),
				signal: abortController.signal,
			})
				.then((res) => {
					if (res.status === 401) {
						toggleLoading();
						throw new Error(res.statusText);
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
					<Typography variant="h4">Data Angsuran</Typography>
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
						onClick={exportHandler}
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

export default AngsuranToolbar;
