/** @format */

import { Stack } from "@mui/material";
import React from "react";
import Article from "../components/Article";

const Articles = () => {
	return (
		<Stack
			display={"flex"}
			flexDirection={"row"}
			p={2}
			gap={2}
			sx={{ backgroundColor: "#000000" }}
		>
			<Stack
				flex={0.5}
				display={"flex"}
				flexDirection={"column"}
				justifyContent={"space-between"}
				height={"100%"}
				width={"100%"}
				sx={{ backgroundColor: "#171717", borderRadius: "25px" }}
				p={4}
			>
				<Article />
			</Stack>
			<Stack
				flex={0.5}
				display={"flex"}
				flexDirection={"column"}
				justifyContent={"space-between"}
				height={"100%"}
				width={"100%"}
				sx={{ backgroundColor: "#171717", borderRadius: "25px" }}
				p={4}
			>
				<Article />
			</Stack>
		</Stack>
	);
};

export default Articles;
