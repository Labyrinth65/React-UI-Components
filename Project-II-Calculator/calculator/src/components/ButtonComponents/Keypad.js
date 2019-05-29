import React from "react";
import "./Button.css";
import ActionButton from "./ActionButton";
import MathButton from "./MathButton";
import NumberButton from "./NumberButton";

const mathSymbols = [
	{ name: "/", text: "÷" },
	{ name: "*", text: "×" },
	{ name: "-", text: "−" },
	{ name: "+", text: "+" },
	{ name: "=", text: "=" }
];
const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];

class Keypad extends React.Component {
	render() {
		return (
			<div className="calculatorBottom">
				<div className="calculatorLeft">
					<ActionButton
						name="clear"
						buttonStyle="clear"
						text="clear"
						onClickFunction={this.props.onClickFunction}
					/>
					<div className="numbersOneToNine">
						{numbers.map(el => (
							<NumberButton
								key={el}
								buttonStyle="number"
								text={el}
								onClickFunction={this.props.onClickFunction}
							/>
						))}
					</div>
					<ActionButton
						name="0"
						buttonStyle="zero"
						text="0"
						onClickFunction={this.props.onClickFunction}
					/>
				</div>
				<div className="calculatorRight">
					{mathSymbols.map(el => (
						<MathButton
							key={el.name}
							name={el.name}
							buttonStyle="math"
							text={el.text}
							onClickFunction={this.props.onClickFunction}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Keypad;
