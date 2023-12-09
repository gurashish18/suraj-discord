/** @format */

import { Stack, Typography, IconButton } from "@mui/material";
import React from "react";
import SocialLink from "../components/SocialLink";
import WhatsApp from "../assets/whatsapp.png";
import Discord from "../assets/discord.png";
import Youtube from "../assets/youtube.png";
import Background1 from "../assets/background1.jpg";
import Background2 from "../assets/Background2.jpg";
import Background3 from "../assets/background3.jpg";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { useSelector } from "react-redux";

const Social = () => {
	const isDarkMode = useSelector((state) => state.isDarkMode.darkMode);
	return (
		<Stack
			display={"flex"}
			flexDirection={{ lg: "row", md: "column", sm: "column", xs: "column" }}
			height={{ lg: "880px", md: "980px", sm: "1080px", xs: "1180px" }}
			p={2}
			gap={2}
			sx={{ backgroundColor: isDarkMode ? "#000000" : "#FFFFFF" }}
		>
			<Stack
				flex={{ lg: 0.7, md: 0.7, sm: 0.7, xs: 0.7 }}
				display={"flex"}
				height={"100%"}
				width={"100%"}
				sx={{
					backgroundColor: isDarkMode ? "#171717" : "#F6F6F6",
					borderRadius: "25px",
				}}
				p={4}
			>
				<Stack
					display={"flex"}
					flexDirection={"row"}
					alignItems={"flex-start"}
					justifyContent={"space-between"}
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
						We are building <br />
						<span
							style={{
								fontSize: { lg: "80px", md: "70px" },
								fontWeight: 700,
							}}
						>
							GradYard
						</span>
					</Typography>
					<IconButton
						p={2}
						sx={{
							backgroundColor: isDarkMode ? "#262626" : "#D9D9D9",
							borderRadius: "50px",
							height: { lg: "70px", md: "65px", sm: "60px", xs: "55px" },
							width: { lg: "70px", md: "65px", sm: "60px", xs: "55px" },
						}}
					>
						<ArrowUpRight
							size={{ lg: 40, md: 30, sm: 20, xs: 10 }}
							color={"#FF2323"}
						/>
					</IconButton>
				</Stack>
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
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book.
				</Typography>
				<Stack
					marginTop={"20px"}
					height={"100%"}
					width={"100%"}
					sx={{
						backgroundColor: isDarkMode ? "#282828" : "#D7D7D7",
						borderRadius: "25px",
					}}
				></Stack>
			</Stack>
			<Stack
				flex={{ lg: 0.3, md: 0.3, sm: 0.3, xs: 0.3 }}
				display={"flex"}
				flexDirection={{ lg: "column", md: "row", sm: "column", xs: "column" }}
				height={"100%"}
				width={"100%"}
				gap={4}
			>
				<SocialLink
					title={"Join GradYard"}
					subtitle={"@bythebug"}
					icon={WhatsApp}
					bgImage={Background1}
				/>
				<SocialLink
					title={"Join GradYard"}
					subtitle={"@gradyard"}
					icon={Discord}
					bgImage={Background2}
				/>
				<SocialLink
					title={"Subscribe"}
					subtitle={"@bythebug"}
					icon={Youtube}
					bgImage={Background3}
				/>
			</Stack>
		</Stack>
	);
};

export default Social;
