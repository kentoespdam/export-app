import { TableCell, TableRow } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import { golonganList } from "@services/golongan.list";
import { useIkhtisarTahunanStore } from "@storage/ikhtisar.tahunan.store";
import IkhtisarTahunanGolonganBodyBuilder from "./ikhtisar.tahunan.golongan.body.builder";

const IkhtisarTahunanGolonganBody = () => {
	const { isLoading, formReq } = useIkhtisarTahunanStore((state) => ({
		isLoading: state.isLoading,
		formReq: state.formReq,
	}));

	return isLoading ? (
		<TableBody>
			<TableRow>
				<TableCell colSpan={14} align="center">
					Sedang mengambil data....
				</TableCell>
			</TableRow>
		</TableBody>
	) : (
		<TableBody>
			{golonganList.map((golongan) => {
				if (formReq?.kodeCabang === undefined)
					return (
						<IkhtisarTahunanGolonganBodyBuilder
							key={golongan.kodeGolongan}
							golongan={golongan}
							kodeGolongan={golongan.kodeGolongan}
						/>
					);

				return (
					<IkhtisarTahunanGolonganBodyBuilder
						key={golongan.kodeGolongan}
						golongan={golongan}
						kodeGolongan={String(formReq?.kodeGolongan)}
					/>
				);
			})}
		</TableBody>
	);
};

export default IkhtisarTahunanGolonganBody;
