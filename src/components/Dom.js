import React, { useRef } from 'react';

function Dom() {
	const nameRef = useRef('');
	const handleClick = () => {
		nameRef.current.style.width = '100px';
		nameRef.current.style.backgroundColor = 'Red';
	};
	return (
		<div>
			<input type="text" name="" id="" ref={nameRef} />
			<button onClick={handleClick}>Click me </button>
		</div>
	);
}

export default Dom;
