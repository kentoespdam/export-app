import { SelectType } from "./common.interface";

export const dataToBody = (data: Record<string, unknown> | undefined) => {
	if (data === undefined) return;
	const newData = Object.entries(data).filter((v) => {
		if (!v[1]) return null;
		if (typeof v[1] === "number" && v[1] >= 0) return v;
		return v;
	});

	return Object.fromEntries(new Map(newData));
};

export const filterToRequest = (filter: SelectType[]) => {
	const result = filter.map((item) => {
		if (
			item.value === "" ||
			item.value === null ||
			item.value === undefined
		)
			return [null, null];
		return [item.id, item.value];
	});

	const arrResult = Array.from(result).filter((n) => n[0]);
	const objResult =
		arrResult.length > 0 ? Object.fromEntries(arrResult) : null;
	return objResult;
};
