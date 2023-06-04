import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { cabangList } from "@services/cabang.list";
import { useIkhtisarTahunanStore } from "@storage/ikhtisar.tahunan.store";
import { IkhtisarTahunanWilayahBodyBuilder } from "./ikhtisar.tahunan.body.builder";

const IkhtisarTahunanWilayahBody = () => {
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
			{cabangList.map((cabang) => {
				if (formReq?.kodeCabang === undefined)
					return (
						<IkhtisarTahunanWilayahBodyBuilder
							key={cabang.kodeCabang}
							cabang={cabang}
							kodeCabang={cabang.kodeCabang}
						/>
					);

				return (
					<IkhtisarTahunanWilayahBodyBuilder
						key={cabang.kodeCabang}
						cabang={cabang}
						kodeCabang={String(formReq?.kodeCabang)}
					/>
				);
			})}
		</TableBody>
	);
};

export default IkhtisarTahunanWilayahBody;
