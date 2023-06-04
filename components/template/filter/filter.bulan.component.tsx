import AddOutlined from "@mui/icons-material/AddOutlined";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Tooltip from "@mui/material/Tooltip";
import { bulanList } from "@services/bulan.list";
import { IFilterComponent } from "./filter.dialog";

const FilterBulanComponent = (props: IFilterComponent) => {
	const { searchValue, setSearchValue, addFilterHandler } = props;

	const handleChange = (event: SelectChangeEvent) => {
		setSearchValue(event.target.value);
	};
	return (
		<FormControl fullWidth>
			<InputLabel>Bulan</InputLabel>
			<Select
				labelId="Bulan"
				id="bulan"
				value={searchValue === null ? "1" : String(searchValue)}
				label="Bulan"
				onChange={handleChange}
				endAdornment={
					<InputAdornment
						position="end"
						component="div"
						onClick={addFilterHandler}
					>
						<Tooltip title="Add Filter">
							<IconButton
								color="primary"
								aria-labelledby="searchInput"
							>
								<AddOutlined />
							</IconButton>
						</Tooltip>
					</InputAdornment>
				}
			>
				{bulanList.map((bulan) => (
					<MenuItem key={bulan.idxBulan} value={bulan.idxBulan}>
						{bulan.nama}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default FilterBulanComponent;
