export enum EReqMethod {
	GET = "GET",
	POST = "POST",
	PUT = "PUT",
	OPTIONS = "OPTIONS",
	DELETE = "DELETE",
}

export interface IFetchRequest {
	method: EReqMethod;
	externalApi: boolean;
	url?: string;
	auth?: boolean;
	token?: string;
	body?: object;
	signal?: AbortSignal;
}

export type IApiResponse = {
	code: number;
	status: string;
	token?: string;
	type?: string;
	error?: string;
};

class FetchService {
	public optionGenerator(req: IFetchRequest) {
		const headers: Record<string, string> = {
			"Content-Type": "application/json",
		};

		if (req.token !== undefined)
			headers.Authorization = `Bearer ${req.token}`;

		if (req.method === EReqMethod.GET || req.method === EReqMethod.DELETE) {
			return {
				method: req.method,
				headers: headers,
				signal: req.signal,
			};
		}

		return {
			method: req.method,
			headers: headers,
			signal: req.signal,
			body: JSON.stringify(req.body),
		};
	}

	private uriGenerator(req: IFetchRequest): string {
		if (req.auth) return `${process.env.API_AUTH}${req.url}`;

		if (req.externalApi) return `${process.env.API_URL}${req.url}`;

		return `${req.url}`;
	}

	public async requestGenerator(req: IFetchRequest) {
		const option = this.optionGenerator(req);
		const uri = this.uriGenerator(req);
		// if (req.externalApi === true) console.log(uri);
		const request = await fetch(uri, option);
		return request;
	}
}

export default new FetchService();
