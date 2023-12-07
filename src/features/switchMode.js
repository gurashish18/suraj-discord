/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	darkMode: true,
};

export const switchModeSlice = createSlice({
	name: "darkMode",
	initialState,
	reducers: {
		toggleDarkMode(state, action) {
			state.darkMode = !state.darkMode;
		},
	},
});

export const { toggleDarkMode } = switchModeSlice.actions;

export default switchModeSlice.reducer;
