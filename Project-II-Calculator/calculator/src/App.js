import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import Keypad from "./components/ButtonComponents/Keypad";

class App extends React.Component {
	state = { result: "0" };

	onClickFunction = button => {
		if (button === "=") {
			this.calculate();
		} else if (button === "clear") {
			this.reset();
		} else if (
			button === "*" ||
			button === "/" ||
			button === "+" ||
			button === "-"
		) {
			this.setState(state => ({ result: `${state.result}${button}` }));
		} else if (button === "0") {
			if (this.state.result === "0") {
				this.setState(state => ({ result: button }));
			} else {
				this.setState(state => ({ result: `${state.result}${button}` }));
			}
		} else {
			if (this.state.result === "0") {
				this.setState(state => ({ result: button }));
			} else {
				this.setState(state => ({ result: `${state.result}${button}` }));
			}
		}
	};

	calculate = () => {
		try {
			this.setState({
				result: (eval(this.state.result) || "0") + ""
			});
		} catch (e) {
			this.setState({
				result: "error"
			});
		}
	};

	reset = () => {
		this.setState({
			result: "0"
		});
	};

	render() {
		return (
			<div className="calculator">
				<div className="calculatorTop">
					<CalculatorDisplay result={this.state.result} />
				</div>
				<Keypad onClickFunction={this.onClickFunction} />
			</div>
		);
	}
}

// const App = () => {
// 	const mathSymbols = ["÷", "×", "−", "+", "="];
// 	const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];
// 	return (
// 		<div className="calculator">
// 			<div className="calculatorTop">
// 				<CalculatorDisplay displayStyle="display" text="0" />
// 			</div>
// 			<div className="calculatorBottom">
// 				<div className="calculatorLeft">
// 					<ActionButton buttonStyle="clear" text="clear" />
// 					<div className="numbersOneToNine">
// 						{numbers.map(el => (
// 							<NumberButton buttonStyle="number" text={el} />
// 						))}
// 					</div>
// 					<ActionButton buttonStyle="zero" text="0" />
// 				</div>
// 				<div className="calculatorRight">
// 					{mathSymbols.map(el => (
// 						<MathButton buttonStyle="math" text={el} />
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

export default App;
