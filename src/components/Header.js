/** @format */

import { IconButton, Stack, Typography } from "@mui/material";
import { Sun } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../features/switchMode";

const Header = () => {
	const isDarkMode = useSelector((state) => state.isDarkMode.darkMode);
	const dispatch = useDispatch();
	return (
		<Stack
			direction={"row"}
			alignItems={"center"}
			justifyContent={"space-between"}
			p={2}
			sx={{ backgroundColor: isDarkMode ? "#000000" : "#ffffff" }}
		>
			<Typography
				sx={{
					fontWeight: 600,
					fontSize: "36px",
					color: isDarkMode ? "#ffffff" : "#0D0D0D",
					lineHeight: "45.54px",
				}}
			>
				Suraj Van Verma
			</Typography>
			<Stack direction={"row"} spacing={3}>
				<IconButton disableRipple={true}>
					<Typography
						sx={{
							color: isDarkMode ? "#ffffff" : "#0D0D0D",
							fontWeight: 500,
							fontSize: "30px",
							lineHeight: "37.59px",
						}}
					>
						Me
					</Typography>
				</IconButton>
				<IconButton disableRipple={true}>
					<Typography
						sx={{
							color: isDarkMode ? "#ffffff" : "#0D0D0D",
							fontWeight: 500,
							fontSize: "30px",
							lineHeight: "37.59px",
						}}
					>
						My Story
					</Typography>
				</IconButton>
				<IconButton disableRipple={true}>
					<Typography
						sx={{
							color: isDarkMode ? "#ffffff" : "#0D0D0D",
							fontWeight: 500,
							fontSize: "30px",
							lineHeight: "37.59px",
						}}
					>
						News Letter
					</Typography>
				</IconButton>
				<IconButton disableRipple={true}>
					<Typography
						sx={{
							color: isDarkMode ? "#ffffff" : "#0D0D0D",
							fontWeight: 500,
							fontSize: "30px",
							lineHeight: "37.59px",
						}}
					>
						Contact
					</Typography>
				</IconButton>
				<IconButton
					disableRipple={true}
					onClick={() => dispatch(toggleDarkMode())}
				>
					<Sun size={40} color={"#FF2323"} />
				</IconButton>
			</Stack>
		</Stack>
	);
};

export default Header;
