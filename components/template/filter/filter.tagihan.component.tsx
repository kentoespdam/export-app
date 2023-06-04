import AddOutlined from "@mui/icons-material/AddOutlined";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Tooltip from "@mui/material/Tooltip";
import { IFilterComponent } from "./filter.dialog";

const FilterTagihanComponent = (props: IFilterComponent) => {
	const { searchValue, setSearchValue, addFilterHandler } = props;

	const handleChange = (event: SelectChangeEvent) => {
		setSearchValue(event.target.value);
	};
	return (
		<FormControl fullWidth>
			<InputLabel>Tagihan</InputLabel>
			<Select
				labelId="Tagihan"
				id="statBayar"
				value={String(searchValue)}
				label="Tagihan"
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
				<MenuItem key={0} value="0">
					Lunas
				</MenuItem>
				<MenuItem key={1} value="1">
					Belum Bayar
				</MenuItem>
			</Select>
		</FormControl>
	);
};

export default FilterTagihanComponent;
