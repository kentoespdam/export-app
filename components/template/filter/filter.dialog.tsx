import { SelectType } from "@helpers/common.interface";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useFilterDialogStore } from "@storage/filter.dialog.store";
import { Dispatch, useState } from "react";
import FilterBulanComponent from "./filter.bulan.component";
import FilterCabangComponent from "./filter.cabang.component";
import FilterChip from "./filter.chip";
import FilterGolonganComponent from "./filter.golongan.component";
import FilterStatusSambungComponent from "./filter.status.sambung.component";
import FilterTextComponent from "./filter.text.component";
import FilterUnitComponent from "./filter.unit.component";
import FilterTglComponent from "./filter.tgl.component";
import FilterPeriodeComponent from "./filter.periode.component";
import FilterTagihanComponent from "./filter.tagihan.component";

export interface IFilterComponent {
	searchValue: unknown;
	setSearchValue: (value: unknown) => void;
	addFilterHandler: () => void;
}

interface IFilterValueBuilder {
	searchValue: unknown;
	setSearchValue: Dispatch<unknown>;
	addFilterHandler: () => void;
	type: string;
}

const FilterValueBuilder = (props: IFilterValueBuilder) => {
	const { searchValue, setSearchValue, addFilterHandler, type } = props;

	if (type === null) return null;
	switch (type) {
		case "text":
			return (
				<FilterTextComponent
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					addFilterHandler={addFilterHandler}
				/>
			);
		case "unit":
			return (
				<FilterUnitComponent
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					addFilterHandler={addFilterHandler}
				/>
			);
		case "golongan":
			return (
				<FilterGolonganComponent
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					addFilterHandler={addFilterHandler}
				/>
			);
		case "cabang":
			return (
				<FilterCabangComponent
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					addFilterHandler={addFilterHandler}
				/>
			);
		case "bulan":
			return (
				<FilterBulanComponent
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					addFilterHandler={addFilterHandler}
				/>
			);
		case "statusSambung":
			return (
				<FilterStatusSambungComponent
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					addFilterHandler={addFilterHandler}
				/>
			);
		case "tgl":
			return (
				<FilterTglComponent
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					addFilterHandler={addFilterHandler}
				/>
			);
		case "periode":
			return (
				<FilterPeriodeComponent
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					addFilterHandler={addFilterHandler}
				/>
			);
		case "tagihan":
			return (
				<FilterTagihanComponent
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					addFilterHandler={addFilterHandler}
				/>
			);
		default:
			return null;
	}
};

const FilterDialog = () => {
	const { title, isOpen, filterOptions, toggleOpen, setFilterKey } =
		useFilterDialogStore();

	const [searchType, setSearchType] = useState<SelectType | null>(null);
	const [searchValue, setSearchValue] = useState<unknown>(null);

	const searchHandler = (value: SelectType | null) => {
		setSearchValue(null);
		setSearchType(value);
		if (value === null) setFilterKey("");
		setFilterKey(String(value?.id));
	};

	const addFilterHandler = () => {
		const index = filterOptions
			.map((item) => item.id)
			.indexOf(String(searchType?.id));

		filterOptions[index].value = searchValue;

		setTimeout(() => {
			setSearchValue("");
			document.getElementById("searchType")?.focus();
		}, 500);
	};
	return (
		<Dialog open={isOpen} onClose={toggleOpen} maxWidth="xl" fullWidth>
			<DialogTitle>{title}</DialogTitle>
			<Divider />
			<DialogContent>
				<Grid container spacing={1}>
					<Grid item lg={4} sm={6} xs={12}>
						<Autocomplete
							id="searchType"
							options={filterOptions}
							openOnFocus
							selectOnFocus
							onChange={(e, newValue) => {
								searchHandler(newValue);
							}}
							renderInput={(params) => (
								<TextField {...params} label="Search Type" />
							)}
						/>
					</Grid>
					<Grid item lg={8} sm={6} xs={12}>
						<FilterValueBuilder
							searchValue={searchValue}
							setSearchValue={setSearchValue}
							addFilterHandler={addFilterHandler}
							type={String(searchType?.type)}
						/>
					</Grid>
					<Grid item lg={11} xs={8}>
						<FilterChip />
					</Grid>
					<Grid item lg={1} xs={4}>
						<Button variant="outlined" onClick={toggleOpen}>
							Close
						</Button>
					</Grid>
				</Grid>
			</DialogContent>
		</Dialog>
	);
};

export default FilterDialog;
