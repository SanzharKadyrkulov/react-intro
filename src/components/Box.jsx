import React from 'react';

function Box(props) {
	const boxStyle = {
		backgroundColor: '#000',
		width: props.width,
		height: props.height,
	};

	return (
		<div
			onClick={() => {
				console.log('click');
			}}
			style={boxStyle}
		>
			<input
				onChange={(e) => {
					console.log(e.target.value);
				}}
				type='text'
			/>
		</div>
	);
}

export default Box;
