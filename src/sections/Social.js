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

const Social = () => {
	return (
		<Stack
			display={"flex"}
			flexDirection={"row"}
			height={"880px"}
			p={2}
			gap={2}
			sx={{ backgroundColor: "#000000" }}
		>
			<Stack
				flex={0.7}
				display={"flex"}
				height={"100%"}
				width={"100%"}
				sx={{ backgroundColor: "#171717", borderRadius: "25px" }}
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
							fontSize: "60px",
							fontWeight: 600,
							lineHeight: "75.9px",
							color: "#9FB2B2",
						}}
					>
						We are building <br />
						<span
							style={{
								fontSize: "80px",
								fontWeight: 700,
								lineHeight: "101.2px",
							}}
						>
							GradYard
						</span>
					</Typography>
					<IconButton
						p={2}
						sx={{
							backgroundColor: "#262626",
							borderRadius: "50px",
							height: "70px",
							width: "70px",
						}}
					>
						<ArrowUpRight size={40} color={"#FF2323"} />
					</IconButton>
				</Stack>
				<Typography
					marginTop={"20px"}
					sx={{
						fontSize: "26px",
						fontWeight: 500,
						lineHeight: "32.89px",
						color: "#5D5D5C",
					}}
				>
					Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
					<br />
					industry. Lorem Ipsum has been the industry's standard dummy text{" "}
					<br /> ever since the 1500s, when an unknown printer took a galley of{" "}
					<br />
					type and scrambled it to make a type specimen book.
				</Typography>
				<Stack
					marginTop={"20px"}
					height={"100%"}
					width={"100%"}
					sx={{ backgroundColor: "#282828", borderRadius: "25px" }}
				></Stack>
			</Stack>
			<Stack flex={0.3} display={"flex"} height={"100%"} width={"100%"} gap={4}>
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
