/** @format */

import { Stack, Typography, IconButton } from "@mui/material";
import { ArrowDownLeft, ArrowDownRight } from "@phosphor-icons/react";
import React from "react";
import { useSelector } from "react-redux";

const Interest = () => {
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
				flex={0.7}
				display={"flex"}
				alignItems={"center"}
				justifyContent={"space-evenly"}
				flexDirection={"row"}
				height={"100%"}
				width={"100%"}
				sx={{
					backgroundColor: isDarkMode ? "#171717" : "#F6F6F6",
					borderRadius: "25px",
				}}
				p={4}
			>
				<IconButton
					p={2}
					sx={{
						backgroundColor: isDarkMode ? "#262626" : "#CDCDCD",
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
						color: isDarkMode ? "#FFFFFF" : "#728181",
					}}
				>
					<span
						style={{
							fontweight: 700,
							color: isDarkMode ? "#9FB2B2" : "#5D5D5C",
						}}
					>
						I believe in{" "}
					</span>
					Lorem Ipsum is simply <br /> dummy text of the printing and <br />
					typesetting industry.
				</Typography>
				<IconButton
					p={2}
					sx={{
						backgroundColor: isDarkMode ? "#262626" : "#CDCDCD",
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
				sx={{
					backgroundColor: isDarkMode ? "#171717" : "#F6F6F6",
					borderRadius: "25px",
				}}
				p={4}
			>
				<Typography
					sx={{
						fontSize: "40px",
						fontWeight: 500,
						lineHeight: "50.6px",
						color: isDarkMode ? "#FFFFFF" : "#728181",
					}}
				>
					<span
						style={{
							fontweight: 700,
							color: isDarkMode ? "#9FB2B2" : "#5D5D5C",
						}}
					>
						PS.
					</span>
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
