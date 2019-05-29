import React from "react";
import "./Button.css";

const MathButton = props => {
	return (
		<button
			onClick={e => props.onClickFunction(props.name)}
			className={props.buttonStyle}
		>
			{props.text}
		</button>
	);
};

export default MathButton;
