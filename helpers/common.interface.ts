export type SelectType = {
	id: string;
	label: string;
	type: string;
	value?: unknown;
};

export interface IPageRequest {
	pos: number;
	limit: number;
	sortBy?: string | null;
	sortDir?: string | null;
}

export interface IPages<T> extends IPageRequest {
	contents: T[];
}

export interface ISatker {
	satker: string;
	nama: string;
}

export interface IUnit {
	unit: string;
	nama: string;
	satker: ISatker;
}

export interface ITotal {
	tota: number;
}
