import { createTheme, Theme } from "@mui/material/styles";
import { create } from "zustand";

const theme = createTheme();
interface IThemeStore {
	theme: Theme;
}

export const useThemeStore = create<IThemeStore>((set) => ({
	theme: theme,
}));
