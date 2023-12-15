/** @format */

import { Link, Stack, Typography } from "@mui/material";
import React from "react";

const Developer = () => {
	return (
		<Stack
			p={2}
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
			sx={{
				backgroundColor: "#FF2323",
			}}
		>
			<Typography
				sx={{
					fontSize: { lg: "26px", md: "24px", sm: "22px", xs: "20px" },
					fontWeight: 500,
					lineHeight: {
						lg: "32.89px",
						md: "22.89px",
						sm: "22.89px",
						xs: "22.89px",
					},
					color: "#000000",
					textAlign: "justify",
				}}
			>
				Developed by{" "}
				<Link
					href="https://gurashish18.github.io/portfolio-me/"
					underline="none"
					target="_blank"
					color={"#ffffff"}
				>
					Gurashish
				</Link>
			</Typography>
		</Stack>
	);
};

export default Developer;
