import React, { useState, useRef, useEffect } from 'react';

function Input() {
	const [name, setName] = useState('');
	const renderCount = useRef(1);
	useEffect(() => {
		renderCount.current++;
		console.log(renderCount.current);
	});
	return (
		<div>
			<input
				type="text"
				name=""
				id=""
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<p>I am rendered {renderCount.current} times</p>
		</div>
	);
}

export default Input;
