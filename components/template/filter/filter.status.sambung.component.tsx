import AddOutlined from "@mui/icons-material/AddOutlined";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Tooltip from "@mui/material/Tooltip";
import { statusSambungList } from "@services/statusSambung.list";
import { IFilterComponent } from "./filter.dialog";

const FilterStatusSambungComponent = (props: IFilterComponent) => {
	const { searchValue, setSearchValue, addFilterHandler } = props;

	const handleChange = (event: SelectChangeEvent) => {
		setSearchValue(event.target.value);
	};
	return (
		<FormControl fullWidth>
			<InputLabel id="demo-simple-select-label">
				Status Sambung
			</InputLabel>
			<Select
				labelId="statusSambung"
				id="statusSambung"
				value={String(searchValue)}
				label="Status Sambung"
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
				{statusSambungList.map((item) => (
					<MenuItem
						key={item.statusSambung}
						value={item.statusSambung}
					>
						[{item.statusSambung}] {item.uraian}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default FilterStatusSambungComponent;
