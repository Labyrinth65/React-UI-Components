import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import MathButton from "./components/ButtonComponents/MathButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

const App = () => {
	const mathSymbols = ["÷", "×", "−", "+", "="];
	const numbers = [[7, 8, 9], [4, 5, 6], [1, 2, 3]];
	return (
		<div className="calculator">
			<div className="calculatorTop">
				<CalculatorDisplay displayStyle="display" text="0" />
			</div>
			<div className="calculatorBottom">
				<div className="calculatorLeft">
					<ActionButton buttonStyle="clear" text="clear" />
					<div className="numbersOneToNine">
						<div className="firstRow">
							{numbers[0].map(el => (
								<NumberButton buttonStyle="number" text={el} />
							))}
						</div>
						<div className="secondRow">
							{numbers[1].map(el => (
								<NumberButton buttonStyle="number" text={el} />
							))}
						</div>
						<div className="thirdRow">
							{numbers[2].map(el => (
								<NumberButton buttonStyle="number" text={el} />
							))}
						</div>
					</div>
					<ActionButton buttonStyle="zero" text="0" />
				</div>
				<div className="calculatorRight">
					{mathSymbols.map(el => (
						<MathButton buttonStyle="math" text={el} />
					))}
				</div>
			</div>
		</div>
	);
};

//Old Code
{
	/* <NumberButton buttonStyle="number" text="7" />
  <NumberButton buttonStyle="number" text="8" />
  <NumberButton buttonStyle="number" text="9" /> */
}
{
	/* <NumberButton buttonStyle="number" text="4" />
  <NumberButton buttonStyle="number" text="5" />
  <NumberButton buttonStyle="number" text="6" /> */
}
{
	/* <NumberButton buttonStyle="number" text="1" />
  <NumberButton buttonStyle="number" text="2" />
  <NumberButton buttonStyle="number" text="3" /> */
}
{
	/* <MathButton buttonStyle="math" text="÷" />
  <MathButton buttonStyle="math" text="×" />
  <MathButton buttonStyle="math" text="−" />
  <MathButton buttonStyle="math" text="+" />
  <MathButton buttonStyle="math" text="=" /> */
}

export default App;
