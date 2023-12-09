/** @format */

import "./App.css";
import Header from "./components/Header";
import Main from "./pages/Main";
import { createMuiTheme, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";

const font = "'Be Vietnam Pro', sans-serif";
const theme = createMuiTheme({
	typography: {
		fontFamily: font,
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Navbar />
			<Main />
		</ThemeProvider>
	);
}

export default App;
