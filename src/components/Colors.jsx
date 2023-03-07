import React, { useState } from 'react';

function Colors() {
	let [color, setColor] = useState('red');
	const [width, setWidth] = useState(200);
	const [height, setHeight] = useState(200);
	return (
		<div>
			<div
				style={{ width: width, height: height, backgroundColor: color }}
			></div>
			<button onClick={() => setColor('red')}>red</button>
			<button onClick={() => setColor('blue')}>blue</button>
			<button onClick={() => setColor('green')}>green</button>
			<input
				onChange={(e) => setWidth(+e.target.value)}
				type='number'
				placeholder='Width'
			/>
			<input
				onChange={(e) => setHeight(+e.target.value)}
				type='number'
				placeholder='Height'
			/>
			<select onChange={(e) => setColor(e.target.value)}>
				<option value='orange'>Orange</option>
				<option value='#000000'>Black</option>
				<option value='yellow'>Yellow</option>
			</select>
		</div>
	);
}

export default Colors;
