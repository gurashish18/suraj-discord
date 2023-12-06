/** @format */

import { IconButton, Stack, Typography } from "@mui/material";
import { Sun } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const Header = () => {
	return (
		<Stack
			direction={"row"}
			alignItems={"center"}
			justifyContent={"space-between"}
			p={2}
			sx={{ backgroundColor: "#000000" }}
		>
			<Typography
				sx={{
					fontWeight: 600,
					fontSize: "36px",
					color: "#ffffff",
				}}
			>
				Suraj Van Verma
			</Typography>
			<Stack direction={"row"} spacing={3}>
				<IconButton disableRipple={true}>
					<Typography
						sx={{
							color: "#ffffff",
							fontWeight: 500,
							fontSize: "30px",
						}}
					>
						Me
					</Typography>
				</IconButton>
				<IconButton disableRipple={true}>
					<Typography
						sx={{
							color: "#ffffff",
							fontWeight: 500,
							fontSize: "30px",
						}}
					>
						My Story
					</Typography>
				</IconButton>
				<IconButton disableRipple={true}>
					<Typography
						sx={{
							color: "#ffffff",
							fontWeight: 500,
							fontSize: "30px",
						}}
					>
						News Letter
					</Typography>
				</IconButton>
				<IconButton disableRipple={true}>
					<Typography
						sx={{
							color: "#ffffff",
							fontWeight: 500,
							fontSize: "30px",
						}}
					>
						Contact
					</Typography>
				</IconButton>
				<IconButton disableRipple={true}>
					<Sun size={40} color={"#FF2323"} />
				</IconButton>
			</Stack>
		</Stack>
	);
};

export default Header;
