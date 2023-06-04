import { IPages } from "@helpers/common.interface";
import { dataToBody } from "@helpers/fetch.helper";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import { EReqMethod } from "@services/fetch.service";
import { useAngsuranStore } from "@storage/angsuran.store";
import { IAngsuran } from "./angsuran.column";
import FetchService from "@services/fetch.service";

const AngsuranFooter = () => {
	const { angRequest, setRequest, toggleLoading, setPage } =
		useAngsuranStore();

	const prevNext = async (act: "prev" | "next") => {
		const abortController = new AbortController();
		let newPos;
		if (act === "prev") {
			if (angRequest.pos === 0) return;
			newPos = angRequest.pos - 1 - angRequest.limit;
		} else {
			if (angRequest.pos === 0)
				newPos = angRequest.pos + angRequest.limit + 1;
			else newPos = angRequest.pos + angRequest.limit;
		}

		const angReq = {
			...angRequest,
			pos: newPos,
		};

		toggleLoading();
		const request = await FetchService.requestGenerator({
			method: EReqMethod.POST,
			externalApi: false,
			body: dataToBody(angReq),
			url: "/api/angsuran",
			signal: abortController.signal,
		});

		if (request.status === 401) {
			toggleLoading();
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

export default AngsuranFooter;
