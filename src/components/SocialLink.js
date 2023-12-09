/** @format */

import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const SocialLink = ({ title, subtitle, bgImage, icon }) => {
	return (
		<Stack
			flex={1}
			sx={{
				backgroundImage: `url(${bgImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				borderRadius: "25px",
			}}
		>
			<Stack
				width={"100%"}
				height={"100%"}
				display={"flex"}
				flexDirection={"row"}
				alignItems={"center"}
				justifyContent={"center"}
				p={2}
				gap={2}
			>
				<Box
					component="img"
					sx={{
						height: { lg: "100px", md: "80px", sm: "60px", xs: "40px" },
						width: { lg: "100px", md: "80px", sm: "60px", xs: "40px" },
					}}
					src={icon}
					alt="social-icon"
				/>
				<Stack display={"flex"}>
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
							color: "#9FB2B2",
						}}
					>
						{title}
					</Typography>
					<Typography
						sx={{
							fontSize: { lg: "24px", md: "22px", sm: "20px", xs: "18px" },
							fontWeight: 500,
							color: "#9FB2B2",
						}}
					>
						{subtitle}
					</Typography>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default SocialLink;
