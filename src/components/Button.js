/** @format */

import React from "react";

const Button = ({ text }) => {
	return (
		<button
			style={{
				border: "none",
				backgroundColor: "#FF2323",
				color: "#ffffff",
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
