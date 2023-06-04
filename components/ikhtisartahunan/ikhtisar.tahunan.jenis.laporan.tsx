import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { styled } from "@mui/material/styles";
import { useIkhtisarTahunanLaporanStore } from "@storage/ikhtisar.tahunan.store";

const FormBox = styled(Box)(({ theme }) => ({
	width: "100%",
	height: "100%",
	padding: 10,
	border: `1px solid ${theme.palette.grey[200]}`,
}));

const IkhtisarTahunanJenisLaporan = () => {
	const { jnsLap, setRadio } = useIkhtisarTahunanLaporanStore();

	return (
		<FormBox>
			<fieldset>
				<legend>Jenis Laporan</legend>

				<RadioGroup
					row
					aria-labelledby="jenisLaporan"
					name="jenisLaporanGroup"
					value={jnsLap}
					onChange={(e) => setRadio(e.target.value)}>
					<FormControlLabel
						value="jmlTag"
						control={<Radio />}
						label="Jumlah Tagihan"
					/>
					<FormControlLabel
						value="volPakai"
						control={<Radio />}
						label="Jumlah Pemakaian"
					/>
					<FormControlLabel
						value="jmlRek"
						control={<Radio />}
						label="Jumlah Rek. Terbit"
					/>
					<FormControlLabel
						value="rekap"
						control={<Radio />}
						label="Rekap Jumlah Tagihan, Pemakaian & Rek. Terbit"
					/>
				</RadioGroup>
			</fieldset>
		</FormBox>
	);
};

export default IkhtisarTahunanJenisLaporan;
