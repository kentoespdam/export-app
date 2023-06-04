import StripedTableStyle from "@helpers/striped.table.style";
import LainnyaWilayahBody from "./wilayah.body";
import LainnyaWilayahFooter from "./wilayah.footer";
import LainnyaWilayahHead from "./wilayah.head";

const LainnyaWilayahComponent = () => {
	return (
		<StripedTableStyle>
			<LainnyaWilayahHead />
			<LainnyaWilayahBody />
			<LainnyaWilayahFooter />
		</StripedTableStyle>
	);
};

export default LainnyaWilayahComponent;
