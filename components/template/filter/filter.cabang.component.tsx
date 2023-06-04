import AddOutlined from "@mui/icons-material/AddOutlined";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Tooltip from "@mui/material/Tooltip";
import { cabangList } from "@services/cabang.list";
import { IFilterComponent } from "./filter.dialog";

const FilterCabangComponent = (props: IFilterComponent) => {
	const { searchValue, setSearchValue, addFilterHandler } = props;

	const handleChange = (event: SelectChangeEvent) => {
		setSearchValue(event.target.value);
	};
	return (
		<FormControl fullWidth>
			<InputLabel id="demo-simple-select-label">Cabang</InputLabel>
			<Select
				labelId="cabang"
				id="cabang"
				value={String(searchValue)}
				label="Cabang"
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
				{cabangList.map((item) => (
					<MenuItem key={item.kodeCabang} value={item.kodeCabang}>
						[{item.kodeCabang}] {item.namaCabang}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default FilterCabangComponent;
