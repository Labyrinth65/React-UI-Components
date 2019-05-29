import React from "react";
import "./Display.css";

// const CalculatorDisplay = props => {
// 	return <div className={props.displayStyle}>{props.text}</div>;
// };

class CalculatorDisplay extends React.Component {
	render() {
		let { result } = this.props;
		return (
			<div className="display">
				<p>{result}</p>
			</div>
		);
	}
}

export default CalculatorDisplay;
