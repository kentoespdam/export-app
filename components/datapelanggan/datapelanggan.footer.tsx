import { dataToBody } from "@helpers/fetch.helper";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import { EReqMethod } from "@services/fetch.service";
import { useDataPelangganStore } from "@storage/datapelanggan.store";
import FetchService from "@services/fetch.service";

const DataPelangganFooter = () => {
	const { formReq, setRequest, toggleLoading, setPage } =
		useDataPelangganStore();

	const prevNext = async (act: "prev" | "next") => {
		const abortController = new AbortController();
		let newPos;
		if (act === "prev") {
			if (formReq.pos === 0) return;
			newPos = formReq.pos - 1 - formReq.limit;
		} else {
			if (formReq.pos === 0) newPos = formReq.pos + formReq.limit + 1;
			else newPos = formReq.pos + formReq.limit;
		}

		const angReq = {
			...formReq,
			pos: newPos,
		};

		toggleLoading();

		const request = await FetchService.requestGenerator({
			method: EReqMethod.POST,
			externalApi: false,
			body: dataToBody(angReq),
			url: "/api/datapelanggan",
			signal: abortController.signal,
		});

		if (request.status === 401) {
			toggleLoading();
			return;
		}

		const result = await request.json();
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
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "end",
			}}
		>
			<ButtonGroup
				disableElevation
				variant="contained"
				aria-label="Disabled elevation buttons"
			>
				<IconButton onClick={() => prevNext("prev")}>
					<ArrowBack />
				</IconButton>
				<IconButton onClick={() => prevNext("next")}>
					<ArrowForward />
				</IconButton>
			</ButtonGroup>
		</Box>
	);
};

export default DataPelangganFooter;
