import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { styled } from "@mui/material/styles";
import { useLainnyaJenisLaporanStore } from "@storage/billing.store";

const FormBox = styled(Box)(({ theme }) => ({
	width: "100%",
	height: "100%",
	padding: 10,
	border: `1px solid ${theme.palette.grey[200]}`,
}));

const LainnyaJenisLaporan = () => {
	const { jnsLap, setRadio } = useLainnyaJenisLaporanStore((state) => ({
		jnsLap: state.jnsLap,
		setRadio: state.setRadio,
	}));

	return (
		<FormBox>
			<fieldset>
				<legend>Jenis Laporan</legend>

				<RadioGroup
					row
					aria-labelledby="jenisLaporan"
					name="jenisLaporanGroup"
					value={jnsLap}
					onChange={(e) => setRadio(e.target.value)}
				>
					<FormControlLabel
						value="jmlTag"
						control={<Radio />}
						label="Jumlah Tagihan"
					/>
					<FormControlLabel
						value="volPakai"
						control={<Radio />}
						label="Volume Pemakaian"
					/>
					<FormControlLabel
						value="jmlAktif"
						control={<Radio />}
						label="Jumlah Pelanggan Aktif"
					/>
					<FormControlLabel
						value="jmlPasif"
						control={<Radio />}
						label="Jumlah Pelanggan Pasif"
					/>
					<FormControlLabel
						value="jmlAktifPasif"
						control={<Radio />}
						label="Jumlah Pelanggan"
					/>
				</RadioGroup>
			</fieldset>
		</FormBox>
	);
};

export default LainnyaJenisLaporan;
