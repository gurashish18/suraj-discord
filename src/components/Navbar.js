/** @format */

import "./Navbar.css";
import { Typography, IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { List, Sun } from "@phosphor-icons/react/dist/ssr";
import { toggleDarkMode } from "../features/switchMode";
import { useState } from "react";

const Navbar = () => {
	const isDarkMode = useSelector((state) => state.isDarkMode.darkMode);
	const dispatch = useDispatch();
	const [showNavbar, setShowNavbar] = useState(false);

	const handleShowNavbar = () => {
		setShowNavbar(!showNavbar);
	};
	return (
		<nav
			className="navbar"
			style={{ backgroundColor: isDarkMode ? "#000000" : "#ffffff" }}
		>
			<div className="container">
				<div className="logo">
					<Typography
						sx={{
							fontWeight: 600,
							fontSize: { lg: "36px", md: "34px", sm: "32px", xs: "30px" },
							color: isDarkMode ? "#ffffff" : "#0D0D0D",
							lineHeight: "45.54px",
						}}
					>
						Suraj Van Verma
					</Typography>
				</div>
				<div className="menu-icon" onClick={handleShowNavbar}>
					<List size={40} color={"#FF2323"} />
				</div>
				<div
					className={`nav-elements  ${showNavbar && "active"}`}
					style={{ backgroundColor: isDarkMode ? "#000000" : "#ffffff" }}
				>
					<ul>
						<li>
							<Typography
								sx={{
									color: isDarkMode ? "#ffffff" : "#0D0D0D",
									fontWeight: 500,
									fontSize: { lg: "30px", md: "28px", sm: "26px", xs: "24px" },
									lineHeight: "37.59px",
								}}
							>
								Me
							</Typography>
						</li>
						<li>
							<Typography
								sx={{
									color: isDarkMode ? "#ffffff" : "#0D0D0D",
									fontWeight: 500,
									fontSize: { lg: "30px", md: "28px", sm: "26px", xs: "24px" },
									lineHeight: "37.59px",
								}}
							>
								My Story
							</Typography>
						</li>
						<li>
							<Typography
								sx={{
									color: isDarkMode ? "#ffffff" : "#0D0D0D",
									fontWeight: 500,
									fontSize: { lg: "30px", md: "28px", sm: "26px", xs: "24px" },
									lineHeight: "37.59px",
								}}
							>
								NewsLetter
							</Typography>
						</li>
						<li>
							<Typography
								sx={{
									color: isDarkMode ? "#ffffff" : "#0D0D0D",
									fontWeight: 500,
									fontSize: { lg: "30px", md: "28px", sm: "26px", xs: "24px" },
									lineHeight: "37.59px",
								}}
							>
								Contact
							</Typography>
						</li>
						<li>
							<IconButton
								disableRipple={true}
								onClick={() => dispatch(toggleDarkMode())}
							>
								<Sun size={40} color={"#FF2323"} />
							</IconButton>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
