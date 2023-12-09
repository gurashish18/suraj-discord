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
			flexDirection={{ lg: "row", md: "row", sm: "column", xs: "column" }}
			height={"520px"}
			p={2}
			gap={2}
			sx={{ backgroundColor: isDarkMode ? "#000000" : "#FFFFFF" }}
		>
			<Stack
				flex={{ lg: 0.6, md: 0.6, sm: 0.5, xs: 0.5 }}
				display={"flex"}
				alignItems={"center"}
				justifyContent={"space-between"}
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
						height: { lg: "70px", md: "65px", sm: "60px", xs: "55px" },
						width: { lg: "70px", md: "65px", sm: "60px", xs: "55px" },
					}}
				>
					<ArrowDownLeft
						size={{ lg: 40, md: 30, sm: 20, xs: 10 }}
						color={"#FF2323"}
					/>
				</IconButton>
				<Typography
					sx={{
						fontSize: { lg: "40px", md: "30px", sm: "20px", xs: "15px" },
						fontWeight: 500,
						lineHeight: {
							lg: "50.6px",
							md: "40.6px",
							sm: "30.6px",
							xs: "30.6px",
						},
						color: isDarkMode ? "#FFFFFF" : "#728181",
						textAlign: "center",
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
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry.
				</Typography>
				<IconButton
					p={2}
					sx={{
						backgroundColor: isDarkMode ? "#262626" : "#CDCDCD",
						borderRadius: "50px",
						height: { lg: "70px", md: "65px", sm: "60px", xs: "55px" },
						width: { lg: "70px", md: "65px", sm: "60px", xs: "55px" },
					}}
				>
					<ArrowDownRight
						size={{ lg: 40, md: 30, sm: 20, xs: 10 }}
						color={"#FF2323"}
					/>
				</IconButton>
			</Stack>
			<Stack
				flex={{ lg: 0.4, md: 0.4, sm: 0.5, xs: 0.5 }}
				display={"flex"}
				flexDirection={"column"}
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
						fontSize: { lg: "40px", md: "30px", sm: "20px", xs: "15px" },
						fontWeight: 500,
						lineHeight: {
							lg: "50.6px",
							md: "40.6px",
							sm: "30.6px",
							xs: "30.6px",
						},
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
					<br /> I am really interested in discussing books, movies, philosophy
					and pets so if you like any one of those, we'll be good to go.
				</Typography>
			</Stack>
		</Stack>
	);
};

export default Interest;
