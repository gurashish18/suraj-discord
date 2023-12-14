/** @format */

import { Stack, Typography } from "@mui/material";
import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

const Article = ({ title, description }) => {
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
						fontSize: { lg: "40px", md: "35px", sm: "30px", xs: "25px" },
						fontWeight: 600,
						lineHeight: "50.6px",
						color: isDarkMode ? "#9FB2B2" : "#728181",
					}}
				>
					{title}
				</Typography>
				<Typography
					sx={{
						fontSize: { lg: "26px", md: "24px", sm: "22px", xs: "20px" },
						fontWeight: 500,
						lineHeight: {
							lg: "32.89px",
							md: "30.89px",
							sm: "28.89px",
							xs: "26.89px",
						},
						color: isDarkMode ? "#5D5D5C" : "#5D5D5C",
						marginBottom: "20px",
					}}
				>
					{description}
				</Typography>
				<Button text={"Contact Me"} />
			</Stack>
		</Stack>
	);
};

export default Article;
