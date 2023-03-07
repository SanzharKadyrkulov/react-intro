import Title from './components/Title';
import Box from './components/Box.jsx';
import Counter from './components/Counter';
import Input from './components/Input';
import Colors from './components/Colors';

const arr = ['potatoes', 'cucumber', 'apple'];

function App() {
	const text = 'hello react';
	return (
		<div>
			{/* <h1
				style={{
					color: 'red',
					fontSize: '60px',
				}}
			>
				{text}
			</h1> */}
			{/* <Title text={'hello'} />
			<Title text={'world'} /> */}
			{/* {arr.map((item) => {
				return <Title text={item} />;
			})} */}
			{/* <Box width={500} height={150} /> */}
			{/* <Counter /> */}
			{/* <Input /> */}
			<Colors />
		</div>
	);
}

export default App;
