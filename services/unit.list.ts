export interface IUnit {
	unit: string;
	namaUnit: string;
	kodeCabang: string;
}

export const unitList: IUnit[] = [
	{ unit: "01", namaUnit: "Purwokerto 1", kodeCabang: "0200" },
	{ unit: "10", namaUnit: "Pos Pel.Baturaden", kodeCabang: "0200" },
	{ unit: "19", namaUnit: "Rempoah", kodeCabang: "0200" },
	{ unit: "02", namaUnit: "Gerilya Selatan", kodeCabang: "0300" },
	{ unit: "03", namaUnit: "Purwokerto 2", kodeCabang: "0300" },
	{ unit: "13", namaUnit: "Patikraja", kodeCabang: "0300" },
	{ unit: "17", namaUnit: "Teluk", kodeCabang: "0300" },
	{ unit: "18", namaUnit: "Tiara Permai", kodeCabang: "0300" },
	{ unit: "04", namaUnit: "Dukuhwaluh", kodeCabang: "0400" },
	{ unit: "05", namaUnit: "Banyumas", kodeCabang: "0400" },
	{ unit: "06", namaUnit: "Sokaraja", kodeCabang: "0400" },
	{ unit: "08", namaUnit: "Kalibagor", kodeCabang: "0400" },
	{ unit: "14", namaUnit: "Kemranjen", kodeCabang: "0400" },
	{ unit: "15", namaUnit: "Kembaran", kodeCabang: "0400" },
	{ unit: "16", namaUnit: "Sumbang", kodeCabang: "0400" },
	{ unit: "09", namaUnit: "Wangon", kodeCabang: "0500" },
	{ unit: "12", namaUnit: "Purwojati", kodeCabang: "0500" },
	{ unit: "07", namaUnit: "Ajibarang", kodeCabang: "0600" },
	{ unit: "11", namaUnit: "Cilongok", kodeCabang: "0600" },
].sort((a, b) => {
	if (a.namaUnit < b.namaUnit) return -1;
	if (a.namaUnit > b.namaUnit) return 1;
	return 0;
});
