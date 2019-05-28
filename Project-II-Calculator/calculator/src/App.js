import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import MathButton from "./components/ButtonComponents/MathButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

const App = () => {
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
							<NumberButton buttonStyle="number" text="7" />
							<NumberButton buttonStyle="number" text="8" />
							<NumberButton buttonStyle="number" text="9" />
						</div>
						<div className="secondRow">
							<NumberButton buttonStyle="number" text="4" />
							<NumberButton buttonStyle="number" text="5" />
							<NumberButton buttonStyle="number" text="6" />
						</div>
						<div className="thirdRow">
							<NumberButton buttonStyle="number" text="1" />
							<NumberButton buttonStyle="number" text="2" />
							<NumberButton buttonStyle="number" text="3" />
						</div>
					</div>
					<ActionButton buttonStyle="zero" text="0" />
				</div>
				<div className="calculatorRight">
					<MathButton buttonStyle="math" text="÷" />
					<MathButton buttonStyle="math" text="x" />
					<MathButton buttonStyle="math" text="-" />
					<MathButton buttonStyle="math" text="+" />
					<MathButton buttonStyle="math" text="=" />
				</div>
			</div>
		</div>
	);
};

export default App;
