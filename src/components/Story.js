/** @format */

import { Stack, Typography } from "@mui/material";
import React from "react";

const Story = () => {
	return (
		<Stack
			display={"flex"}
			flexDirection={"row"}
			gap={2}
			height={"100%"}
			width={"100%"}
		>
			<Stack
				flex={0.5}
				display={"flex"}
				height={"100%"}
				width={"100%"}
				justifyContent={"center"}
			>
				<Typography
					marginTop={"20px"}
					sx={{
						fontSize: "26px",
						fontWeight: 500,
						lineHeight: "32.89px",
						color: "#5D5D5C",
					}}
				>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s. Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's standard
					dummy text ever since the 1500s.
				</Typography>
			</Stack>
			<Stack
				flex={0.5}
				height={"100%"}
				width={"100%"}
				sx={{ backgroundColor: "#282828", borderRadius: "25px" }}
			></Stack>
		</Stack>
	);
};

export default Story;