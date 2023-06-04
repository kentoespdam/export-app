import DownloadOutlined from "@mui/icons-material/DownloadOutlined";
import LoopOutlined from "@mui/icons-material/LoopOutlined";
import TuneOutlined from "@mui/icons-material/TuneOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { dataToBody, filterToRequest } from "@helpers/fetch.helper";
import { AlertColor } from "@mui/material";
import { EReqMethod } from "@services/fetch.service";
import { useBillingStore } from "@storage/billing.store";
import { useFilterDialogStore } from "@storage/filter.dialog.store";
import { useState, useEffect } from "react";
import { IBillingTypes, IFinalDrd } from "./billing.column";
import FetchService from "@services/fetch.service";
import FilterChip from "@template/filter/filter.chip";
import FilterDialog from "@template/filter/filter.dialog";
import Notif from "@template/notif";

const BillingFilterComponent = () => {
	const { filterOptions, toggleOpen, setTitle, setFilterOptions } =
		useFilterDialogStore();
	const { toggleLoading, setRequest, setPage } = useBillingStore((state) => ({
		toggleLoading: state.toggleLoading,
		setRequest: state.setRequest,
		setPage: state.setPage,
	}));

	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState(null);
	const [severity, setSeverity] = useState<AlertColor>("info");

	useEffect(() => {
		setTitle("Filter Billing");
		setFilterOptions(IBillingTypes);
	}, []);

	async function findHandler() {
		const abortController = new AbortController();
		const fromFilter = filterToRequest(filterOptions);
		const frmReq = {
			...fromFilter,
		};

		toggleLoading();

		const request = await FetchService.requestGenerator({
			method: EReqMethod.POST,
			externalApi: false,
			body: dataToBody(frmReq),
			url: "/api/billing",
			signal: abortController.signal,
		});

		if (!request.ok) {
			toggleLoading();
			setMessage((await request.json()).errorMessage);
			setSeverity("error");
			setOpen(true);
			return;
		}

		const result: IFinalDrd = await request.json();
		toggleLoading();
		setRequest(frmReq);

		setPage(result);
		return () => abortController.abort();
	}

	async function downloadHandler() {
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
				url: "/api/billing/export",
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
	}

	return (
		<Box>
			<Paper elevation={2} sx={{ p: 1, mb: 1 }}>
				<Grid container direction="row" spacing={1}>
					<Grid item xs={12} sx={{ mb: 1 }}>
						<Typography variant="h4">Data Billing</Typography>
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
			</Paper>
			<Notif
				open={open}
				setOpen={setOpen}
				message={message}
				severity={severity}
			/>
		</Box>
	);
};

export default BillingFilterComponent;
