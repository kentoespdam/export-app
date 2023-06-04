import { pipeline } from "@helpers/pipeline.helper";
import FetchService, { EReqMethod } from "@services/fetch.service";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const searchUrl = new URLSearchParams(req.body).toString();
	

	const options = {
		method: EReqMethod.GET,
		externalApi: true,
		url: `/data-pelanggan?${searchUrl}`,
		token: String(req.cookies.xToken),
	};

	const request = await FetchService.requestGenerator(options);
	res.status(request.status);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	await pipeline<any, NextApiResponse>(request.body, res);
};

export default handler;
