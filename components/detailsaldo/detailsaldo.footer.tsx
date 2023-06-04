import { dataToBody } from "@helpers/fetch.helper";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import { EReqMethod } from "@services/fetch.service";
import { useDetailSaldoStore } from "@storage/detailsaldo.store";
import FetchService from "@services/fetch.service";

const DetailSaldoFooter = () => {
	const { detSaldoRequest, toggleLoading, setPage, setRequest } =
		useDetailSaldoStore((state) => ({
			toggleLoading: state.toggleLoading,
			detSaldoRequest: state.detSaldoRequest,
			setPage: state.setPage,
			setRequest: state.setRequest,
		}));

	const prevNext = async (act: "prev" | "next") => {
		const abortController = new AbortController();
		let newPos;
		if (act === "prev") {
			if (detSaldoRequest.pos === 0) return;
			newPos = detSaldoRequest.pos - 1 - detSaldoRequest.limit;
		} else {
			if (detSaldoRequest.pos === 0)
				newPos = detSaldoRequest.pos + detSaldoRequest.limit + 1;
			else newPos = detSaldoRequest.pos + detSaldoRequest.limit;
		}

		const formReq = {
			...detSaldoRequest,
			pos: newPos,
		};

		toggleLoading();
		const request = await FetchService.requestGenerator({
			method: EReqMethod.POST,
			externalApi: false,
			body: dataToBody(formReq),
			url: "/api/detailsaldo",
			signal: abortController.signal,
		});

		if (request.status === 401) {
			toggleLoading();
			return;
		}

		const result = await request.json();
		toggleLoading();
		setRequest(formReq);

		if (result.contents.length === 0) {
			setPage(null);
			return;
		}

		setPage(result);
		return () => abortController.abort();
	};
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "end",
			}}>
			<ButtonGroup
				disableElevation
				variant="contained"
				aria-label="Disabled elevation buttons">
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

export default DetailSaldoFooter;
