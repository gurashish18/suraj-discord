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
			flexDirection={"row"}
			height={"480px"}
			p={2}
			gap={2}
			sx={{ backgroundColor: isDarkMode ? "#000000" : "#FFFFFF" }}
		>
			<Stack
				flex={0.5}
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
						fontSize: "60px",
						fontWeight: 600,
						lineHeight: "75.9px",
						color: isDarkMode ? "#9FB2B2" : "#728181",
					}}
				>
					I was born to develop <br /> stuff and tell stories!!!
				</Typography>
			</Stack>
			<Stack
				flex={0.5}
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
							height: "70px",
							width: "70px",
						}}
					>
						<YoutubeLogo size={40} color={isDarkMode ? "#9FB2B2" : "#728181"} />
					</IconButton>
					<Button text={"Subscribe"} />
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Youtube;
