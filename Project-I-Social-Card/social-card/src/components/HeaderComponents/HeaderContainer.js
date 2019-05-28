import React from "react";
import "./Header.css";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";
import ImageThumbnail from "./ImageThumbnail";

function HeaderContainer() {
	return (
		<div className="headerContainer">
			<div className="logo">
				<ImageThumbnail />
			</div>
			<div>
				<HeaderTitle />
				<HeaderContent />
			</div>
		</div>
	);
}

export default HeaderContainer;
