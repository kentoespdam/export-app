import AddOutlined from "@mui/icons-material/AddOutlined";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Tooltip from "@mui/material/Tooltip";
import { unitList } from "@services/unit.list";
import { IFilterComponent } from "./filter.dialog";

const FilterUnitComponent = (props: IFilterComponent) => {
	const { searchValue, setSearchValue, addFilterHandler } = props;

	const handleChange = (event: SelectChangeEvent) => {
		setSearchValue(event.target.value);
	};

	return (
		<FormControl fullWidth>
			<InputLabel id="demo-simple-select-label">Unit</InputLabel>
			<Select
				labelId="unit"
				id="unit"
				value={String(searchValue)}
				label="Unit"
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
				{unitList.map((item) => (
					<MenuItem key={item.unit} value={item.unit}>
						[{item.unit}] {item.namaUnit}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default FilterUnitComponent;
