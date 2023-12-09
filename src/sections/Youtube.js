/** @format */

import { Stack, Typography, IconButton } from "@mui/material";
import { YoutubeLogo } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import Button from "../components/Button";
import { useSelector } from "react-redux";

const Youtube = () => {
	const isDarkMode = useSelector((state) => state.isDarkMode.darkMode);
	return (
		<Stack
			display={"flex"}
			flexDirection={{ lg: "row", md: "row", sm: "column", xs: "column" }}
			height={{ lg: "480px", md: "480px", sm: "540px", xs: "540px" }}
			p={2}
			gap={2}
			sx={{ backgroundColor: isDarkMode ? "#000000" : "#FFFFFF" }}
		>
			<Stack
				flex={{ lg: 0.5, md: 0.5, sm: 0.3, xs: 0.3 }}
				display={"flex"}
				alignItems={"center"}
				justifyContent={"center"}
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
					I was born to develop stuff and tell stories!!!
				</Typography>
			</Stack>
			<Stack
				flex={{ lg: 0.5, md: 0.5, sm: 0.7, xs: 0.7 }}
				display={"flex"}
				justifyContent={"flex-end"}
				height={"100%"}
				width={"100%"}
				sx={{
					backgroundColor: isDarkMode ? "#171717" : "#D7D7D7",
					borderRadius: "25px",
				}}
				p={4}
			>
				<Stack
					display={"flex"}
					flexDirection={"row"}
					alignItems={"center"}
					justifyContent={"space-between"}
				>
					<IconButton
						p={2}
						sx={{
							backgroundColor: isDarkMode ? "#262626" : "#D9D9D9",
							borderRadius: "50px",
							height: { lg: "70px", md: "65px", sm: "60px", xs: "55px" },
							width: { lg: "70px", md: "65px", sm: "60px", xs: "55px" },
						}}
					>
						<YoutubeLogo
							size={{ lg: 40, md: 30, sm: 20, xs: 10 }}
							color={isDarkMode ? "#9FB2B2" : "#728181"}
						/>
					</IconButton>
					<Button text={"Subscribe"} />
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Youtube;
