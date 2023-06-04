import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Dayjs } from "dayjs";
import { useRef, useState, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Tooltip from "@mui/material/Tooltip";
import AddOutlined from "@mui/icons-material/AddOutlined";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { IFilterComponent } from "./filter.dialog";

const FilterTglComponent = (props: IFilterComponent) => {
	const { setSearchValue, addFilterHandler } = props;
	const toTglRef = useRef<HTMLInputElement>(null);
	const [value, setValue] = useState<Dayjs | null>(null);

	useEffect(() => {
		setSearchValue(String(toTglRef.current?.value));
	}, [value]);

	return (
		<Box sx={{ display: "flex", alignItems: "flex-end" }}>
			<FormControl fullWidth>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<MobileDatePicker
						label="Tanggal"
						inputFormat="YYYY-MM-DD"
						value={value}
						inputRef={toTglRef}
						onChange={(newValue) => {
							setValue(newValue);
						}}
						renderInput={(params) => <TextField {...params} />}
					/>
				</LocalizationProvider>
			</FormControl>
			<Tooltip title="Add Filter" sx={{ height: 56 }}>
				<Button
					variant="outlined"
					color="primary"
					aria-labelledby="searchInput"
					onClick={addFilterHandler}
				>
					<AddOutlined />
				</Button>
			</Tooltip>
		</Box>
	);
};

export default FilterTglComponent;
