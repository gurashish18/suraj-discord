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
				<Stack>
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
						Lorem Ipsum is simply <br /> dummy text of the printing <br />
						and typesetting industry.
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
						}}
					>
						Lorem Ipsum is simply dummy text of the printing and <br />{" "}
						typesetting industry. Lorem Ipsum has been the industry's <br />{" "}
						standard dummy text ever since the 1500s
					</Typography>
				</Stack>
				<Stack
					display={"flex"}
					flexDirection={"row"}
					alignItems={"center"}
					gap={2}
					marginTop={{ lg: "0px", md: "20px" }}
				>
					<Button text={"Contact Me"} />
					<IconButton
						p={2}
						sx={{
							backgroundColor: isDarkMode ? "#262626" : "#D9D9D9",
							borderRadius: "50px",
							height: "70px",
							width: "70px",
						}}
					>
						<LinkedinLogo
							size={40}
							color={isDarkMode ? "#9FB2B2" : "#728181"}
						/>
					</IconButton>
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
					<IconButton
						p={2}
						sx={{
							backgroundColor: isDarkMode ? "#262626" : "#D9D9D9",
							borderRadius: "50px",
							height: "70px",
							width: "70px",
						}}
					>
						<DiscordLogo size={40} color={isDarkMode ? "#9FB2B2" : "#728181"} />
					</IconButton>
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
			></Stack>
		</Stack>
	);
};

export default Me;
