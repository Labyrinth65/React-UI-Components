import React from "react";
import "./Button.css";

const MathButton = props => {
	return <button className={props.buttonStyle}>{props.text}</button>;
};

export default MathButton;
