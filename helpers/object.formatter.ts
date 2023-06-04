export const convertToRupiah = (uang: number) => {
	const formatter = new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
	});

	return formatter.format(uang);
};

export const listFormat = (list: []) => {
	const f = new Intl.ListFormat("en", {});
	return f.format(list);
};

export const dateToStringFormat = (date: Date) => {
	const tahun = date.getFullYear();
	const bulan = date.getMonth() + 1;
	const bulanString = bulan < 10 ? `0${bulan}` : bulan;
	const tanggal = date.getDate();
	const tanggalString = tanggal < 10 ? `0${tanggal}` : tanggal;

	return `${tahun}-${bulanString}-${tanggalString}`;
};
