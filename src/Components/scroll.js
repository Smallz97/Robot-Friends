import React from 'react';

const Scroll = (props) => {
	return (
		<div>
			{props.children}
		</div>
	);
}

// style={{ overflowY: 'scroll', border: '5px solid black', height: '600px' }}. Put this in the opening <div> tag in the return method.

export default Scroll;