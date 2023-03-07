import React, { useState } from 'react';

function Input() {
	const [text, setText] = useState('');
	return (
		<div>
			<h1>{text}</h1>
			<input
				onChange={(e) => {
					setText(e.target.value);
				}}
				type='text'
			/>
		</div>
	);
}

export default Input;
