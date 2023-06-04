"use client";
import Box from "@mui/material/Box";
import IkhtisarTahunanFilter from "./ikhtisar.tahunan.filter";
import IkhtisarTahunanTabComponent from "./ikhtisar.tahunan.tab";

const IkhtisarTahunanComponent = () => {
	return (
		<>
			<Box>
				<IkhtisarTahunanFilter />
				<IkhtisarTahunanTabComponent />
			</Box>
		</>
	);
};

export default IkhtisarTahunanComponent;
