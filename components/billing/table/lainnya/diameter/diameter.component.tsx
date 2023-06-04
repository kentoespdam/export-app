import StripedTableStyle from "@helpers/striped.table.style";
import LainnyaDiameterHead from "./diameter.head";
import LainnyaDiameterFooter from "./diameter.footer";
import LainnyaDiameterBody from "./diameter.body";

const LainnyaDiameterComponent = () => {
	return (
		<StripedTableStyle>
			<LainnyaDiameterHead />
			<LainnyaDiameterBody />
			<LainnyaDiameterFooter />
		</StripedTableStyle>
	);
};

export default LainnyaDiameterComponent;
