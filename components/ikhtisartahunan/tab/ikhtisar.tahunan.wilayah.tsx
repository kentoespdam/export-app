import StripedTableStyle from "@helpers/striped.table.style";
import IkhtisarTahunanHead from "@ikhtisartahunan/table/ikhtisar.tahunan.head";
import IkhtisarTahunanWilayahBody from "@ikhtisartahunan/table/wilayah/ikhtisar.tahunan.body";
import IkhtisarTahunanWilayahFooter from "@ikhtisartahunan/table/wilayah/ikhtisar.tahunan.wilayah.footer";

const IkhtisarTabWilayah = () => {

	return (
		<StripedTableStyle>
			<IkhtisarTahunanHead berdasar="Wilayah" />
			<IkhtisarTahunanWilayahBody />
			<IkhtisarTahunanWilayahFooter />
		</StripedTableStyle>
	);
};

export default IkhtisarTabWilayah;
