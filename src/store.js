/** @format */

import { configureStore } from "@reduxjs/toolkit";
import switchModeSlice from "./features/switchMode";

export const store = configureStore({
	reducer: {
		isDarkMode: switchModeSlice,
	},
});
