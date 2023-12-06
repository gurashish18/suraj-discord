/** @format */

import React from "react";
import Articles from "../sections/Articles";
import Interest from "../sections/Interest";
import Me from "../sections/Me";
import MyStory from "../sections/MyStory";
import Social from "../sections/Social";
import Youtube from "../sections/Youtube";

const Main = () => {
	return (
		<>
			<Me />
			<MyStory />
			<Interest />
			<Youtube />
			<Social />
			<Articles />
		</>
	);
};

export default Main;
