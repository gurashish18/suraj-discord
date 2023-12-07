/** @format */

import React from "react";
import { useSelector } from "react-redux";

const Button = ({ text }) => {
	const isDarkMode = useSelector((state) => state.isDarkMode.darkMode);
	return (
		<button
			style={{
				border: "none",
				backgroundColor: "#FF2323",
				color: isDarkMode ? "#ffffff" : "#0D0D0D",
				fontSize: "26px",
				fontWeight: 600,
				borderRadius: "25px",
				width: "225px",
				padding: "13px 0px 13px 0px",
				cursor: "pointer",
			}}
		>
			{text}
		</button>
	);
};

export default Button;
