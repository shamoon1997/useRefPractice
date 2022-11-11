import React, { useState, useRef, useEffect } from 'react';

function PrevValue() {
	const prevValue = useRef('');
	const [currentValue, setCurrentValue] = useState();
	useEffect(() => {
		prevValue.current = currentValue;
		console.log(prevValue.current);
	}, [currentValue]);
	return (
		<div>
			<input
				type="text"
				name=""
				id=""
				onChange={(e) => setCurrentValue(e.target.value)}
			/>
			<p>The current Value is {currentValue}</p>
			<p>The previous value is {prevValue.current}</p>
		</div>
	);
}

export default PrevValue;
