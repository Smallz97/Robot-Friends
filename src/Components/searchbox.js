import React from 'react';

const Searchbox = ({searchChangeProp}) => {
	return (
		<div className='pa2'>
			<input
				className='pa3 ba b--green bg-lightest-blue tc' 
				type='search'
				placeholder={`Search NFT Collection's`}
				onChange={searchChangeProp}
			/>
		</div>
	);
}

export default Searchbox;


// <Searchbox /> component receives {searchChange} as a props. it's onChange attribute calls the {searchChange} when triggered.