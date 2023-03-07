import React, { useState } from 'react';

function Counter() {
	// let counter = 0;
	const [counter, setCounter] = useState(0);

	return (
		<div>
			<h1>{counter}</h1>
			<button
				onClick={() => {
					// counter++;
					setCounter(counter + 1);
					console.log(counter);
				}}
			>
				+
			</button>
			<button
				onClick={() => {
					// counter--;
					setCounter(counter - 1);
				}}
			>
				-
			</button>
		</div>
	);
}

export default Counter;
