import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const LainnyaDiameterHead = () => {
	return (
		<TableHead>
			<TableRow>
				<TableCell align="center" rowSpan={2}>
					Wilayah
				</TableCell>
				<TableCell align="center" colSpan={8}>
					Rekap Masing-Masing Ukuran
				</TableCell>
				<TableCell align="center" rowSpan={2}>
					Jumlah
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell align="center"> 0,50&quot; </TableCell>
				<TableCell align="center"> 0,75&quot; </TableCell>
				<TableCell align="center"> 1,00&quot; </TableCell>
				<TableCell align="center"> 1,50&quot; </TableCell>
				<TableCell align="center"> 2,00&quot; </TableCell>
				<TableCell align="center"> 3,00&quot; </TableCell>
				<TableCell align="center"> 4,00&quot; </TableCell>
				<TableCell align="center"> 6,00&quot; </TableCell>
			</TableRow>
		</TableHead>
	);
};

export default LainnyaDiameterHead;
