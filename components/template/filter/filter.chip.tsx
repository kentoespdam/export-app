import { SelectType } from "@helpers/common.interface";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import { useFilterDialogStore } from "@storage/filter.dialog.store";

interface ChipComponentProps {
	id: string;
	value: unknown;
	removeFilter: (id: string) => void;
}

const ChipComponent = (props: ChipComponentProps) => {
	const { id, value, removeFilter } = props;

	return (
		<Chip
			key={id}
			label={`${id}: ${value}`}
			variant="outlined"
			sx={{ mb: 1, mr: 1 }}
			onDelete={() => removeFilter(id)}
		/>
	);
};

export interface FilterChipProps {
	filter: Record<string, unknown>;
	selectTypes: Record<string, unknown>[];
	addFilter: (act: unknown, val: unknown) => void;
}

const FilterChip = () => {
	const { filterOptions, setFilterOptions } = useFilterDialogStore(
		(state) => ({
			filterOptions: state.filterOptions,
			setFilterOptions: state.setFilterOptions,
		})
	);

	const removeFilter = (id: string) => {
		const index = filterOptions.map((item) => item.id).indexOf(id);

		filterOptions[index].value = null;
		setFilterOptions(filterOptions);
	};

	return (
		<Grid container component="div" sx={{ maxWidth: "100%" }}>
			{filterOptions.map((item: SelectType) => {
				if (
					item.value === "" ||
					item.value === null ||
					item.value === undefined
				)
					return null;

				if (typeof item.value === "number" && item.value > 0)
					return (
						<ChipComponent
							key={item.id}
							id={item.id}
							value={item.value}
							removeFilter={removeFilter}
						/>
					);

				return (
					<ChipComponent
						key={item.id}
						id={item.id}
						value={item.value}
						removeFilter={removeFilter}
					/>
				);
			})}
		</Grid>
	);
};

export default FilterChip;

export const findAction = (key: string, arrData: Record<string, unknown>[]) => {
	const filter = arrData.filter((val) => val.id === key)[0];
	return filter.action;
};
