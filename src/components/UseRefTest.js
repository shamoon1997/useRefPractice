import React, { useEffect, useRef, useState } from 'react';

function UseRefTest() {
	const countObject = useRef(0);
	const [state, setState] = useState(false);
	let counter = 0;
	const incrementCount = () => {
		countObject.current++;
		console.log(countObject.current);
	};
	useEffect(() => {
		counter++;
		// countObject.current++;
		console.log('useEffect called', counter);
	}, [state]);
	return (
		<div>
			<button onClick={incrementCount}>Increment</button>
			<p>The current count is {countObject.current}</p>
			<button onClick={() => setState(!state)}>Toggle State</button>
		</div>
	);
}

export default UseRefTest;
