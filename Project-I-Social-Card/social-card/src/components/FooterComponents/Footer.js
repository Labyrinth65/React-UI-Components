import React from "react";
import "./Footer.css";

const Footer = () => (
	<footer>
		<icon className="comment">
			<i class="far fa-comment" />
			<div className="footerNumber"> </div>
		</icon>
		<icon>
			<i class="fas fa-sync" />
			<div className="footerNumber">6</div>
		</icon>
		<icon>
			<i class="far fa-heart" />
			<div className="footerNumber">4</div>
		</icon>
		<icon>
			<i class="far fa-envelope" />
			<div className="footerNumber"> </div>
		</icon>
	</footer>
);

export default Footer;
