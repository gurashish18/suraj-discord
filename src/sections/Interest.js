/** @format */

import { Stack, Typography, IconButton } from "@mui/material";
import { ArrowDownLeft, ArrowDownRight } from "@phosphor-icons/react";
import React from "react";

const Interest = () => {
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
				flex={0.7}
				display={"flex"}
				alignItems={"center"}
				justifyContent={"space-evenly"}
				flexDirection={"row"}
				height={"100%"}
				width={"100%"}
				sx={{ backgroundColor: "#171717", borderRadius: "25px" }}
				p={4}
			>
				<IconButton
					p={2}
					sx={{
						backgroundColor: "#262626",
						borderRadius: "50px",
						height: "70px",
						width: "70px",
					}}
				>
					<ArrowDownLeft size={40} color={"#FF2323"} />
				</IconButton>
				<Typography
					sx={{
						fontSize: "40px",
						fontWeight: 500,
						lineHeight: "50.6px",
						color: "#FFFFFF",
					}}
				>
					<span style={{ fontweight: 700, color: "#9FB2B2" }}>
						I believe in{" "}
					</span>
					Lorem Ipsum is simply <br /> dummy text of the printing and <br />
					typesetting industry.
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
					<ArrowDownRight size={40} color={"#FF2323"} />
				</IconButton>
			</Stack>
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
						fontSize: "40px",
						fontWeight: 500,
						lineHeight: "50.6px",
						color: "#FFFFFF",
					}}
				>
					<span style={{ fontweight: 700, color: "#9FB2B2" }}>PS.</span>
					<br /> I am really interested <br /> in discussing books, <br />{" "}
					movies, philosophy <br /> and pets so if you like <br /> any one of
					those,
					<br /> we'll be good to go.
				</Typography>
			</Stack>
		</Stack>
	);
};

export default Interest;
