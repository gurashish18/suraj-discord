/** @format */

import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import Story from "../components/Story";

const data = [
	{
		id: 1,
		title: "My School Life",
	},
	{
		id: 2,
		title: "My High School",
	},
	{
		id: 3,
		title: "As GDSC Lead",
	},
	{
		id: 4,
		title: "As Research Intern",
	},
];

const MyStory = () => {
	return (
		<Stack
			display={"flex"}
			flexDirection={"row"}
			height={"480px"}
			p={2}
			gap={2}
			sx={{ backgroundColor: "#000000" }}
		>
			<Stack
				flex={0.3}
				display={"flex"}
				flexDirection={"column"}
				justifyContent={"space-between"}
				height={"100%"}
				width={"100%"}
				sx={{ backgroundColor: "#171717", borderRadius: "25px" }}
				p={4}
			>
				<Typography
					sx={{
						fontSize: "60px",
						fontWeight: 600,
						lineHeight: "75.9px",
						color: "#9FB2B2",
					}}
				>
					My Story
				</Typography>
				<Stack alignItems={"flex-start"}>
					{data.map((d) => (
						<IconButton>
							<Typography
								key={d.id}
								marginTop={"20px"}
								sx={{
									fontSize: "26px",
									fontWeight: 500,
									lineHeight: "32.89px",
									color: "#5D5D5C",
								}}
							>
								{d.title}
							</Typography>
						</IconButton>
					))}
				</Stack>
			</Stack>
			<Stack
				flex={0.7}
				height={"100%"}
				width={"100%"}
				sx={{ backgroundColor: "#171717", borderRadius: "25px" }}
				p={4}
			>
				<Story />
			</Stack>
		</Stack>
	);
};

export default MyStory;
