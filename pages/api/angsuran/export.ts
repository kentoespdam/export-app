import { NextApiRequest, NextApiResponse } from "next";
import { pipeline } from "@helpers/pipeline.helper";
import { EReqMethod } from "@services/fetch.service";
import FetchService from "@services/fetch.service";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const query = new URLSearchParams(req.body).toString();
	const request = await FetchService.requestGenerator({
		method: EReqMethod.GET,
		externalApi: true,
		url: `/after-posting/angsuran/export?${query}`,
		// token: ,
	});

	if (request.status !== 200) {
		const pesan = await request.text();
		res.status(request.status).send(pesan);
	}

	const contentDisposition = request.headers.get("content-disposition") || "";
	const contentLength = request.headers.get("content-length") || 0;

	res.setHeader("content-disposition", contentDisposition);
	res.setHeader("access-control-expose-headers", "Content-Disposition");
	res.setHeader("content-type", "application/octet-stream");
	res.setHeader("content-length", contentLength);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	await pipeline<any, NextApiResponse>(request.body, res);
};

export default handler;
