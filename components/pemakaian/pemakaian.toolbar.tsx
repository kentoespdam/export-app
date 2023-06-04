import { filterToRequest, dataToBody } from "@helpers/fetch.helper";
import DownloadOutlined from "@mui/icons-material/DownloadOutlined";
import LoopOutlined from "@mui/icons-material/LoopOutlined";
import TuneOutlined from "@mui/icons-material/TuneOutlined";
import { AlertColor } from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { GridToolbarContainer } from "@mui/x-data-grid/components";
import { IRekairTypes } from "@rekair/rekair.column";
import { EReqMethod } from "@services/fetch.service";
import { useFilterDialogStore } from "@storage/filter.dialog.store";
import { useEffect, useState } from "react";
import { usePemakaianStore } from "../../storage/pemakaian.store";
import FetchService from "@services/fetch.service";
import FilterChip from "@template/filter/filter.chip";
import FilterDialog from "@template/filter/filter.dialog";
import Notif from "@template/notif";

const PemakaianToolbar = () => {
	const { filterOptions, toggleOpen, setTitle, setFilterOptions } =
		useFilterDialogStore();
	const {
		formReq,
		toggleLoading,
		toggleLoadingTotal,
		setRequest,
		setPage,
		setTotal,
	} = usePemakaianStore();

	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState(null);
	const [severity, setSeverity] = useState<AlertColor>("info");

	useEffect(() => {
		setTitle("Filter Rekair");

		for (const [key, value] of Object.entries(formReq)) {
			const i = IRekairTypes.map((e) => e.id).indexOf(key);
			if (i !== -1) IRekairTypes[i].value = value;
		}

		setFilterOptions(IRekairTypes);
	}, []);

	async function findHandler() {
		const abortController = new AbortController();
		const fromFilter = filterToRequest(filterOptions);
		const frmReq = {
			...fromFilter,
			pos: 0,
			limit: 10,
			sortBy: formReq.sortBy,
			sorDir: formReq.sortDir,
		};

		toggleLoading();
		toggleLoadingTotal();

		const request = await FetchService.requestGenerator({
			method: EReqMethod.POST,
			externalApi: false,
			body: dataToBody(frmReq),
			url: "/api/pemakaian",
			signal: abortController.signal,
		});

		if (!request.ok) {
			toggleLoading();
			toggleLoadingTotal();
			setMessage((await request.json()).errorMessage);
			setSeverity("error");
			setOpen(true);
			return;
		}

		const result = await request.json();
		toggleLoading();
		setRequest(frmReq);

		if (result.contents.length === 0) {
			toggleLoadingTotal();
			setPage(null);
			setTotal(0);
			return;
		}

		setPage(result);
		const resultTotal = await FetchService.requestGenerator({
			method: EReqMethod.POST,
			externalApi: false,
			body: dataToBody(frmReq),
			url: "/api/pemakaian/total",
			signal: abortController.signal,
		});

		const requestTotal = await resultTotal.json();
		toggleLoadingTotal();
		setTotal(requestTotal.total);
		return () => abortController.abort();
	}

	async function downloadHandler() {
		const abortController = new AbortController();
		const fromFilter = filterToRequest(filterOptions);
		const frmReq = {
			...fromFilter,
			pos: 0,
			limit: formReq.limit,
			sortBy: formReq.sortBy,
			sorDir: formReq.sortDir,
		};
		toggleLoading();

		try {
			let filename = "";
			FetchService.requestGenerator({
				method: EReqMethod.POST,
				externalApi: false,
				url: "/api/pemakaian/export",
				body: dataToBody(frmReq),
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
	}

	return (
		<GridToolbarContainer sx={{ m: 1 }}>
			<Grid container direction="row" spacing={1}>
				<Grid item xs={12} sx={{ mb: 1 }}>
					<Typography variant="h4">Data Pemakaian</Typography>
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

export default PemakaianToolbar;
