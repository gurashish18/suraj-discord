/** @format */

import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import Story from "../components/Story";
import { useSelector } from "react-redux";

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
	const isDarkMode = useSelector((state) => state.isDarkMode.darkMode);
	return (
		<Stack
			display={"flex"}
			flexDirection={{ lg: "row", md: "row", sm: "column", xs: "column" }}
			height={{ lg: "480px", md: "580px", xs: "780px", sm: "820px" }}
			p={2}
			gap={2}
			sx={{ backgroundColor: isDarkMode ? "#000000" : "#FFFFFF" }}
		>
			<Stack
				flex={{ lg: 0.3, md: 0.3, sm: 0.2, xs: 0.2 }}
				display={"flex"}
				flexDirection={"column"}
				justifyContent={"space-between"}
				alignItems={{
					lg: "flex-start",
					md: "flex-start",
					sm: "center",
					xs: "center",
				}}
				height={"100%"}
				width={"100%"}
				sx={{
					backgroundColor: isDarkMode ? "#171717" : "#F6F6F6",
					borderRadius: "25px",
				}}
				p={4}
			>
				<Typography
					sx={{
						fontSize: { lg: "60px", md: "50px", sm: "40px", xs: "30px" },
						fontWeight: 600,
						lineHeight: {
							lg: "75.9px",
							md: "65.9px",
							sm: "55.9px",
							xs: "45.9px",
						},
						color: isDarkMode ? "#9FB2B2" : "#728181",
					}}
				>
					My Story
				</Typography>
				<Stack alignItems={{ lg: "flex-start", md: "center" }} display={"flex"}>
					{data.map((d) => (
						<IconButton>
							<Typography
								key={d.id}
								marginTop={"20px"}
								sx={{
									fontSize: { lg: "26px", md: "24px", sm: "22px", xs: "20px" },
									fontWeight: 500,
									lineHeight: {
										lg: "32.89px",
										md: "22.89px",
										sm: "22.89px",
										xs: "22.89px",
									},
									color: isDarkMode ? "#5D5D5C" : "#5D5D5C",
								}}
							>
								{d.title}
							</Typography>
						</IconButton>
					))}
				</Stack>
			</Stack>
			<Stack
				flex={{ lg: 0.7, md: 0.7, sm: 0.8, xs: 0.8 }}
				height={"100%"}
				width={"100%"}
				sx={{
					backgroundColor: isDarkMode ? "#171717" : "#F6F6F6",
					borderRadius: "25px",
				}}
				p={4}
			>
				<Story />
			</Stack>
		</Stack>
	);
};

export default MyStory;
