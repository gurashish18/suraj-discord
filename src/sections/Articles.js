/** @format */

import { Stack } from "@mui/material";
import React from "react";
import Article from "../components/Article";
import { useSelector } from "react-redux";

const Articles = () => {
	const isDarkMode = useSelector((state) => state.isDarkMode.darkMode);
	return (
		<Stack
			display={"flex"}
			flexDirection={{ lg: "row", md: "row", sm: "column", xs: "column" }}
			p={2}
			gap={2}
			sx={{ backgroundColor: isDarkMode ? "#000000" : "#ffffff" }}
		>
			<Stack
				flex={0.5}
				display={"flex"}
				flexDirection={"column"}
				justifyContent={"space-between"}
				height={"100%"}
				width={"100%"}
				sx={{
					backgroundColor: isDarkMode ? "#171717" : "#F6F6F6",
					borderRadius: "25px",
				}}
				p={4}
			>
				<Article
					title={"Graduate School Resources"}
					description={
						"I've created this guide to help you navigate the complex process of graduate admissions. With insights gained from experts, this guide aims to demystify the process and provide a clear understanding of what to expect."
					}
				/>
			</Stack>
			<Stack
				flex={0.5}
				display={"flex"}
				flexDirection={"column"}
				justifyContent={"space-between"}
				height={"100%"}
				width={"100%"}
				sx={{
					backgroundColor: isDarkMode ? "#171717" : "#F6F6F6",
					borderRadius: "25px",
				}}
				p={4}
			>
				<Article
					title={"International Internship Resources"}
					description={
						"Below is a list of various research internship programs avialble across different countries. These programs offer students the chance to engage in cutting-edge research in a variety of fields."
					}
				/>
			</Stack>
		</Stack>
	);
};

export default Articles;
