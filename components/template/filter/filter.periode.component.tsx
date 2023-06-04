import periodeHelper from "@helpers/periode.helper";
import AddOutlined from "@mui/icons-material/AddOutlined";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Tooltip from "@mui/material/Tooltip";
import { IFilterComponent } from "./filter.dialog";

const FilterPeriodeComponent = (props: IFilterComponent) => {
	const { searchValue, setSearchValue, addFilterHandler } = props;

	const handleChange = (event: SelectChangeEvent) => {
		setSearchValue(event.target.value);
	};
	const listPeriode = periodeHelper.getListPeriode();

	return (
		<FormControl fullWidth>
			<InputLabel id="demo-simple-select-label">Periode</InputLabel>
			<Select
				labelId="periode"
				id="periode"
				value={String(searchValue)}
				label="Periode"
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
				{listPeriode.map((item) => (
					<MenuItem key={item.periode} value={item.periode}>
						{item.periode}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default FilterPeriodeComponent;
