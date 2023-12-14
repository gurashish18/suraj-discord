/** @format */

import { IconButton, Stack, Typography } from "@mui/material";
import {
	DiscordLogo,
	LinkedinLogo,
	YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import Suraj from "../assets/suraj.jpeg";

const Me = () => {
	const isDarkMode = useSelector((state) => state.isDarkMode.darkMode);
	return (
		<Stack
			display={"flex"}
			flexDirection={{ lg: "row", md: "column" }}
			height={{ lg: "620px" }}
			p={2}
			gap={2}
			sx={{ backgroundColor: isDarkMode ? "#000000" : "#ffffff" }}
		>
			<Stack
				flex={{ lg: 0.7, md: 0.6 }}
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
				<Stack maxWidth={{ lg: "80%", md: "90%", sm: "100%", xs: "100%" }}>
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
							textAlign: "justify",
						}}
					>
						Hi, I am Suraj, I create content on Internet related to research and
						tech.
					</Typography>
					<Typography
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
							textAlign: "justify",
						}}
					>
						Born in the bustling streets of India and currently living
						Montreal(Canada), my story echoes the colors of diversity and the
						rhythm of ambition. I am a graduated student of computer science at
						McGill University. This website is my digital canvase where i weave
						together stories of my life, research endeavours, and of course,
						some "khayali pulao"
					</Typography>
				</Stack>
				<Stack
					display={"flex"}
					flexDirection={{ lg: "row", md: "row", sm: "column", xs: "column" }}
					alignItems={"center"}
					gap={2}
					marginTop={{ lg: "0px", md: "20px", sm: "20px", xs: "20px" }}
				>
					<Button text={"Contact Me"} />
					<Stack
						display={"flex"}
						flexDirection={"row"}
						alignItems={"center"}
						gap={2}
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
							<LinkedinLogo
								size={{ lg: 40, md: 30, sm: 20, xs: 10 }}
								color={isDarkMode ? "#9FB2B2" : "#728181"}
							/>
						</IconButton>
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
						<IconButton
							p={2}
							sx={{
								backgroundColor: isDarkMode ? "#262626" : "#D9D9D9",
								borderRadius: "50px",
								height: { lg: "70px", md: "65px", sm: "60px", xs: "55px" },
								width: { lg: "70px", md: "65px", sm: "60px", xs: "55px" },
							}}
						>
							<DiscordLogo
								size={{ lg: 40, md: 30, sm: 20, xs: 10 }}
								color={isDarkMode ? "#9FB2B2" : "#728181"}
							/>
						</IconButton>
					</Stack>
				</Stack>
			</Stack>
			<Stack
				display={{ lg: "flex", md: "none" }}
				flex={{ lg: 0.3, md: 0.4 }}
				height={"100%"}
				width={"100%"}
				sx={{
					backgroundColor: isDarkMode ? "#171717" : "#D7D7D7",
					borderRadius: "25px",
				}}
			>
				<img
					src={Suraj}
					style={{ height: "100%", width: "100%", borderRadius: "25px" }}
					alt="Suraj picture"
				/>
			</Stack>
		</Stack>
	);
};

export default Me;
