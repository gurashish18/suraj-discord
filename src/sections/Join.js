/** @format */

import { Stack, Typography, IconButton } from "@mui/material";
import {
	DiscordLogo,
	LinkedinLogo,
	YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";
import Button from "../components/Button";
import { useSelector } from "react-redux";

const Options = ["Linkedin", "University fair", "Senior"];

const Join = () => {
	const isDarkMode = useSelector((state) => state.isDarkMode.darkMode);
	const [selectedOption, setSelectedOption] = useState("");
	const handleInputChange = (event) => {
		setSelectedOption(event.target.value);
	};
	return (
		<Stack
			width={"100%"}
			display={"flex"}
			flexDirection={"row"}
			height={"100vh"}
			p={4}
			sx={{ backgroundColor: isDarkMode ? "#171717" : "#F6F6F6" }}
		>
			<Stack width={"100%"}>
				<Typography
					sx={{
						fontSize: { lg: "50px", md: "45px", sm: "40px", xs: "35px" },
						fontWeight: 600,
						lineHeight: {
							lg: "59.6px",
							md: "50.9px",
							sm: "45.9px",
							xs: "40.9px",
						},
						color: isDarkMode ? "#9FB2B2" : "#728181",
					}}
				>
					Join GradYard
					<br />
					<span
						style={{
							fontSize: { lg: "60px", md: "55px", sm: "50px", xs: "45px" },
							lineHeight: {
								lg: "59.6px",
								md: "50.9px",
								sm: "45.9px",
								xs: "40.9px",
							},
						}}
					>
						As Volunteer
					</span>
				</Typography>
				<Stack gap={4} marginTop={"40px"} marginBottom={"40px"}>
					<input
						placeholder="Full Name"
						type={"text"}
						style={{
							border: "none",
							backgroundColor: isDarkMode ? "#2B2B2B" : "#D4D4D4",
							color: isDarkMode ? "#727272" : "#727272",
							borderRadius: "8px",
							padding: "14px",
							fontSize: "26px",
							fontWeight: 500,
							lineHeight: "32.89px",
							maxWidth: "420px",
						}}
					/>
					<input
						placeholder="Email Id"
						type={"email"}
						style={{
							border: "none",
							backgroundColor: isDarkMode ? "#2B2B2B" : "#D4D4D4",
							color: isDarkMode ? "#727272" : "#727272",
							borderRadius: "8px",
							padding: "14px",
							fontSize: "26px",
							fontWeight: 500,
							lineHeight: "32.89px",
							maxWidth: "420px",
						}}
					/>
					<input
						placeholder="Contact Number"
						type={"text"}
						style={{
							border: "none",
							backgroundColor: isDarkMode ? "#2B2B2B" : "#D4D4D4",
							color: isDarkMode ? "#727272" : "#727272",
							borderRadius: "8px",
							padding: "14px",
							fontSize: "26px",
							fontWeight: 500,
							lineHeight: "32.89px",
							maxWidth: "420px",
						}}
					/>
					<select
						style={{
							border: "none",
							backgroundColor: isDarkMode ? "#2B2B2B" : "#D4D4D4",
							color: isDarkMode ? "#727272" : "#727272",
							borderRadius: "8px",
							padding: "14px",
							fontSize: "26px",
							fontWeight: 500,
							lineHeight: "32.89px",
							maxWidth: "420px",
						}}
						value={selectedOption}
						onChange={handleInputChange}
					>
						<option value="" disabled>
							How did you find me
						</option>

						{Options.map((option) => (
							<option style={{ padding: "5px" }} key={option} value={option}>
								{option}
							</option>
						))}
					</select>
				</Stack>
				<Stack
					display={"flex"}
					flexDirection={{ lg: "row", md: "row", sm: "column", xs: "column" }}
					alignItems={"center"}
					justifyContent={"space-between"}
					gap={2}
				>
					<Button text={"Send Request"} />
					<Stack gap={4} display={"flex"} flexDirection={"row"}>
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
							<YoutubeLogo
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
							<DiscordLogo
								size={40}
								color={isDarkMode ? "#9FB2B2" : "#728181"}
							/>
						</IconButton>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Join;
