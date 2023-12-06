/** @format */

import { Stack, Typography } from "@mui/material";
import React from "react";
import Button from "./Button";

const Article = () => {
	return (
		<Stack height={"100%"} width={"100%"}>
			<Stack
				height={"320px"}
				width={"100%"}
				sx={{ backgroundColor: "#282828", borderRadius: "25px" }}
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
						color: "#9FB2B2",
					}}
				>
					Article Name
				</Typography>
				<Typography
					sx={{
						fontSize: "26px",
						fontWeight: 500,
						lineHeight: "32.89px",
						color: "#5D5D5C",
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
