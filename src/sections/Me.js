/** @format */

import { IconButton, Stack, Typography } from "@mui/material";
import {
	DiscordLogo,
	LinkedinLogo,
	YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";
import Button from "../components/Button";

const Me = () => {
	return (
		<Stack
			display={"flex"}
			flexDirection={"row"}
			height={"620px"}
			p={2}
			gap={2}
			sx={{ backgroundColor: "#000000" }}
		>
			<Stack
				flex={0.7}
				display={"flex"}
				flexDirection={"column"}
				justifyContent={"space-between"}
				height={"100%"}
				width={"100%"}
				sx={{ backgroundColor: "#171717", borderRadius: "25px" }}
				p={4}
			>
				<Stack>
					<Typography
						sx={{
							fontSize: "60px",
							fontWeight: 600,
							lineHeight: "75.9px",
							color: "#9FB2B2",
						}}
					>
						Lorem Ipsum is simply <br /> dummy text of the printing <br />
						and typesetting industry.
					</Typography>
					<Typography
						marginTop={"20px"}
						sx={{
							fontSize: "26px",
							fontWeight: 500,
							lineHeight: "32.89px",
							color: "#5D5D5C",
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
				>
					<Button text={"Contact Me"} />
					<IconButton
						p={2}
						sx={{
							backgroundColor: "#262626",
							borderRadius: "50px",
							height: "70px",
							width: "70px",
						}}
					>
						<LinkedinLogo size={40} color={"#9FB2B2"} />
					</IconButton>
					<IconButton
						p={2}
						sx={{
							backgroundColor: "#262626",
							borderRadius: "50px",
							height: "70px",
							width: "70px",
						}}
					>
						<YoutubeLogo size={40} color={"#9FB2B2"} />
					</IconButton>
					<IconButton
						p={2}
						sx={{
							backgroundColor: "#262626",
							borderRadius: "50px",
							height: "70px",
							width: "70px",
						}}
					>
						<DiscordLogo size={40} color={"#9FB2B2"} />
					</IconButton>
				</Stack>
			</Stack>
			<Stack
				flex={0.3}
				height={"100%"}
				width={"100%"}
				sx={{ backgroundColor: "#171717", borderRadius: "25px" }}
			>
				hi
			</Stack>
		</Stack>
	);
};

export default Me;
