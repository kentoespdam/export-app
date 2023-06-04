"use client";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { GridToolbarContainer } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material/Select";
import periodeHelper from "../../helpers/periode.helper";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoopOutlined from "@mui/icons-material/LoopOutlined";
import DownloadOutlined from "@mui/icons-material/DownloadDoneOutlined";
import dayjs from "dayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useRef, useState } from "react";
import {
	IPendapatanRequest,
	usePendapatanStore,
} from "@storage/pendapatan.store";
import FetchService, { EReqMethod } from "@services/fetch.service";
import Notif from "@template/notif";
import { AlertColor } from "@mui/material/Alert";

const PendapatanToolbar = () => {
	const periodeAwalRef = useRef<HTMLInputElement>(null);
	const periodeAkhirRef = useRef<HTMLInputElement>(null);
	const toTglRef = useRef<HTMLInputElement>(null);

	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState(null);
	const [severity, setSeverity] = useState<AlertColor>("info");

	const {
		toggleLoading,
		periodeAwal,
		setPeriodeAwal,
		periodeAkhir,
		setPeriodeAkhir,
		toTgl,
		setToTgl,
		setRows,
	} = usePendapatanStore();

	const handleChange = (e: SelectChangeEvent) => {
		switch (e.target.name) {
			case "periodeAwal":
				setPeriodeAwal(e.target.value);
				break;
			case "periodeAkhir":
				setPeriodeAkhir(e.target.value);
				break;
		}
	};

	const findPendapatan = async () => {
		toggleLoading();
		const data: IPendapatanRequest = {
			fromPeriode: String(periodeAwalRef.current?.value),
			toPeriode: String(periodeAkhirRef.current?.value),
			toTgl: String(toTglRef.current?.value),
		};

		if (parseInt(data.fromPeriode) > parseInt(data.toPeriode)) {
			alert(
				"periode awal harus lebih kecil / sama dengan periode akhir!!!"
			);
			return;
		}

		const abortController = new AbortController();
		const options = {
			method: EReqMethod.POST,
			externalApi: false,
			body: data,
			url: "/api/pendapatan",
			signal: abortController.signal,
		};

		const request = await FetchService.requestGenerator(options);

		if (!request.ok) {
			toggleLoading();
			setMessage((await request.json()).errorMessage);
			setSeverity("error");
			setOpen(true);
			return;
		}
		toggleLoading();

		const result = await request.json();
		setRows(result);
	};

	const downloadHandler = () => {
		const abortController = new AbortController();
		const data: IPendapatanRequest = {
			fromPeriode: String(periodeAwalRef.current?.value),
			toPeriode: String(periodeAkhirRef.current?.value),
			toTgl: String(toTglRef.current?.value),
		};
		toggleLoading();
		try {
			let filename = "";
			FetchService.requestGenerator({
				method: EReqMethod.POST,
				externalApi: false,
				url: "/api/pendapatan/export",
				body: data,
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
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<GridToolbarContainer sx={{ width: "100%" }}>
				<Grid
					container
					direction="row"
					justifyContent="flex-start"
					alignItems="center"
					spacing={1}
					sx={{ p: 1 }}
				>
					<Grid item lg={2} sm={3} xs={12}>
						<FormControl variant="outlined" fullWidth>
							<InputLabel htmlFor="periodeAwal">
								Periode Awal
							</InputLabel>
							<Select
								label="Periode Awal"
								labelId="periodeAwal"
								name="periodeAwal"
								size="small"
								inputRef={periodeAwalRef}
								value={periodeAwal}
								onChange={handleChange}
							>
								{periodeHelper.getListPeriode().map((item) => (
									<MenuItem
										key={item.periode}
										value={item.periode}
									>
										{item.periode}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid item lg={2} sm={3} xs={12}>
						<FormControl variant="outlined" fullWidth>
							<InputLabel htmlFor="periodeAkhir">
								Periode Akhir
							</InputLabel>
							<Select
								label="Periode Akhir"
								labelId="periodeAkhir"
								name="periodeAkhir"
								size="small"
								inputRef={periodeAkhirRef}
								value={periodeAkhir}
								onChange={handleChange}
							>
								{periodeHelper.getListPeriode().map((item) => (
									<MenuItem
										key={item.periode}
										value={item.periode}
									>
										{item.periode}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid item lg={2} sm={3} xs={12}>
						<FormControl variant="standard" fullWidth>
							<DesktopDatePicker
								label="Sampai Tanggal"
								inputFormat="YYYY-MM-DD"
								value={toTgl}
								onChange={(e) => setToTgl(dayjs(e))}
								inputRef={toTglRef}
								closeOnSelect
								renderInput={(params) => (
									<TextField size="small" {...params} />
								)}
							/>
						</FormControl>
					</Grid>
					<Grid item lg={3} xs={12} sx={{ mb: 1 }}>
						<Button
							startIcon={<LoopOutlined />}
							variant="outlined"
							size="small"
							sx={{ ml: 1 }}
							onClick={findPendapatan}
						>
							<Typography>FIND</Typography>
						</Button>

						<Button
							startIcon={<DownloadOutlined />}
							variant="outlined"
							size="small"
							sx={{ ml: 1 }}
							onClick={downloadHandler}
						>
							<Typography>Excel</Typography>
						</Button>
					</Grid>
				</Grid>
				<Notif
					open={open}
					setOpen={setOpen}
					message={message}
					severity={severity}
				/>
			</GridToolbarContainer>
			<Divider />
		</LocalizationProvider>
	);
};

export default PendapatanToolbar;
