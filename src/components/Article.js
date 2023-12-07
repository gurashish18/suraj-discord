/** @format */

import { Stack, Typography } from "@mui/material";
import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

const Article = () => {
	const isDarkMode = useSelector((state) => state.isDarkMode.darkMode);
	return (
		<Stack height={"100%"} width={"100%"}>
			<Stack
				height={"320px"}
				width={"100%"}
				sx={{
					backgroundColor: isDarkMode ? "#282828" : "#D7D7D7",
					borderRadius: "25px",
				}}
			></Stack>
			<Stack
				sx={{
					marginTop: "20px",
				}}
			>
				<Typography
					sx={{
						fontSize: "40px",
						fontWeight: 600,
						lineHeight: "50.6px",
						color: isDarkMode ? "#9FB2B2" : "#728181",
					}}
				>
					Article Name
				</Typography>
				<Typography
					sx={{
						fontSize: "26px",
						fontWeight: 500,
						lineHeight: "32.89px",
						color: isDarkMode ? "#5D5D5C" : "#5D5D5C",
						marginBottom: "20px",
					}}
				>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s
				</Typography>
				<Button text={"Contact Me"} />
			</Stack>
		</Stack>
	);
};

export default Article;
