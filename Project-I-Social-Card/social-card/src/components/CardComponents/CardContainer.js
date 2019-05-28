import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

// function CardContainer() {
// 	return (
// <div className="cardContainer">
// 	<div className="banner">
// 		<CardBanner />
// 	</div>
// 	<div className="cardText">
// 		<CardContent />
// 	</div>
// </div>
// 	);
// }

class CardContainer extends React.Component {
	handleClick() {
		window.location.href = "https://www.reactjs.org";
	}

	render() {
		return (
			<div
				className="cardContainer"
				onClick={this.handleClick}
				style={{ cursor: "pointer" }}
			>
				<div className="banner">
					<CardBanner />
				</div>
				<div className="cardText">
					<CardContent />
				</div>
			</div>
		);
	}
}

export default CardContainer;
