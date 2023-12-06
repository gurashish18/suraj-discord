/** @format */

import { Stack, Typography, TextField } from "@mui/material";
import React from "react";
import Button from "../components/Button";

const NewsLetter = () => {
	return (
		<Stack
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
			height={"90vh"}
			p={2}
			gap={2}
			sx={{ backgroundColor: "#000000" }}
		>
			<Stack maxWidth={"80%"}>
				<Stack>
					<Typography
						sx={{
							fontSize: "60px",
							fontWeight: 600,
							lineHeight: "75.9px",
							color: "#9FB2B2",
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
							backgroundColor: "#171717",
							color: "#727272",
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
