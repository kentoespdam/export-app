export interface IStatusSambung {
	statusSambung: string;
	uraian: string;
}

export const statusSambungList: IStatusSambung[] = [
	{ statusSambung: "00", uraian: "Input Data Registrasi Sambungan Baru" },
	{ statusSambung: "10", uraian: "Registrasi Sambungan Baru" },
	{ statusSambung: "11", uraian: "Penetapan RAB" },
	{ statusSambung: "12", uraian: "BPPI" },
	{ statusSambung: "13", uraian: "Bayar Sambungan Baru" },
	{ statusSambung: "14", uraian: "Proses Aktivasi Sambungan Baru" },
	{ statusSambung: "20", uraian: "Tutup Sementara" },
	{ statusSambung: "21", uraian: "Registrasi Buka Kembali" },
	{ statusSambung: "22", uraian: "Proses Aktifasi Buka Kembali" },
	{ statusSambung: "30", uraian: "Aktif" },
	{ statusSambung: "31", uraian: "Aktif (Lebih Bayar)" },
	{ statusSambung: "40", uraian: "Tutup Tetap" },
	{ statusSambung: "41", uraian: "Registrasi BKPB" },
	{ statusSambung: "42", uraian: "Bayar Registrasi BKPB" },
	{ statusSambung: "43", uraian: "Proses BKPB" },
	{ statusSambung: "44", uraian: "Proses Aktifasi BKPB" },
	{ statusSambung: "50", uraian: "Tutup Loket" },
	{ statusSambung: "61", uraian: "Registrasi Balik Nama" },
	{ statusSambung: "62", uraian: "Proses Balik Nama" },
	{ statusSambung: "70", uraian: "Lebih Bayar" },
	{ statusSambung: "80", uraian: "Registrasi Penggantian Meter" },
	{ statusSambung: "81", uraian: "Proses Aktivasi Penggantian Meter" },
	{ statusSambung: "99", uraian: "Tidak Lolos" },
];
