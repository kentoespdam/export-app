import StripedTableStyle from "@helpers/striped.table.style";
import IkhtisarTahunanGolonganBody from "@ikhtisartahunan/table/golongan/ikhtisar.tahunan.golongan.body";
import IkhtisarTahunanGolonganFooter from "@ikhtisartahunan/table/golongan/ikhtisar.tahunan.golongan.footer";
import IkhtisarTahunanHead from "@ikhtisartahunan/table/ikhtisar.tahunan.head";

const IkhtisarTabGolongan = () => {
	return (
		<StripedTableStyle>
			<IkhtisarTahunanHead berdasar="Golongan" />
			<IkhtisarTahunanGolonganBody />
			<IkhtisarTahunanGolonganFooter />
		</StripedTableStyle>
	);
};

export default IkhtisarTabGolongan;
