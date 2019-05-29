import React from "react";
import "./Button.css";

const NumberButton = props => {
	return (
		<button
			onClick={e => props.onClickFunction(props.text)}
			className={props.buttonStyle}
		>
			{props.text}
		</button>
	);
};

export default NumberButton;
