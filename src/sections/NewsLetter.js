/** @format */

import { Stack, Typography } from "@mui/material";
import React from "react";
import Button from "../components/Button";
import { useSelector } from "react-redux";

const NewsLetter = () => {
	const isDarkMode = useSelector((state) => state.isDarkMode.darkMode);
	return (
		<Stack
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
			height={"90vh"}
			p={2}
			gap={2}
			sx={{ backgroundColor: isDarkMode ? "#000000" : "#FFFFFF" }}
		>
			<Stack maxWidth={"80%"}>
				<Stack>
					<Typography
						sx={{
							fontSize: "60px",
							fontWeight: 600,
							lineHeight: "75.9px",
							color: isDarkMode ? "#9FB2B2" : "#728181",
							textAlign: "center",
						}}
					>
						Stay informed with our <br /> weekly newsletter
					</Typography>
				</Stack>
				<Stack
					display={"flex"}
					flexDirection={"row"}
					alignItems={"center"}
					justifyContent={"center"}
					gap={4}
					marginTop={"40px"}
				>
					<input
						placeholder="Joe@hotmail.com"
						type={"email"}
						style={{
							border: "none",
							backgroundColor: isDarkMode ? "#171717" : "#F6F6F6",
							color: isDarkMode ? "#727272" : "#5D5D5C",
							borderRadius: "8px",
							padding: "12px",
							fontSize: "26px",
							fontWeight: 500,
							lineHeight: "32.89px",
						}}
					/>
					<Button text={"Subscribe"} />
				</Stack>
			</Stack>
		</Stack>
	);
};

export default NewsLetter;
