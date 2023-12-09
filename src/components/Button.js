/** @format */

import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const PrimaryButton = ({ text }) => {
	const isDarkMode = useSelector((state) => state.isDarkMode.darkMode);
	return (
		<Button
			sx={{
				border: "none",
				backgroundColor: "#FF2323",
				color: isDarkMode ? "#ffffff" : "#0D0D0D",
				fontSize: { lg: "26px", md: "22px", sm: "20px", xs: "18px" },
				fontWeight: 600,
				borderRadius: "25px",
				width: "225px",
				padding: {
					lg: "13px 0px 13px 0px",
					md: "11px 0px 11px 0px",
					sm: "9px 0px 9px 0px",
					xs: "7px 0px 7px 0px",
				},
				cursor: "pointer",
				textTransform: "none",
			}}
		>
			{text}
		</Button>
	);
};

export default PrimaryButton;
