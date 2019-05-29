import React from "react";
import "./Button.css";

const ActionButton = props => {
	return (
		<button
			onClick={e => props.onClickFunction(props.text)}
			className={props.buttonStyle}
		>
			{props.text}
		</button>
	);
};

export default ActionButton;
