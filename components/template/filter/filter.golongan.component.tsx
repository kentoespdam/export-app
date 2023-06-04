import AddOutlined from "@mui/icons-material/AddOutlined";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Tooltip from "@mui/material/Tooltip";
import { golonganList } from "@services/golongan.list";
import { IFilterComponent } from "./filter.dialog";

const FilterGolonganComponent = (props: IFilterComponent) => {
	const { searchValue, setSearchValue, addFilterHandler } = props;

	const handleChange = (event: SelectChangeEvent) => {
		setSearchValue(event.target.value);
	};
	return (
		<FormControl fullWidth>
			<InputLabel id="demo-simple-select-label">Golongan</InputLabel>
			<Select
				labelId="golongan"
				id="golongan"
				value={String(searchValue)}
				label="Golongan"
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
				{golonganList.map((item) => (
					<MenuItem key={item.kodeGolongan} value={item.kodeGolongan}>
						[{item.kodeGolongan}] {item.golongan}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default FilterGolonganComponent;
