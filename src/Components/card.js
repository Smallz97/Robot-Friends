import React from 'react';

const Card = ({name, email, id, username}) => {
	return (
		<div className='tc bg-orange dib br3 pa3 ma2 grow bw2 shadow-5'>
			<h1>{username}</h1>
			<img src={`https://robohash.org/${id}?200*200`} alt='robots' />
			<div>
				<h2 className=''>{name}</h2>
				<p className=''>{email}</p>
			</div>
		</div>
	);
}


export default Card;

// <Card /> is the template for cards to be created.
// <Card /> creates a component with properties from the attributes specified in the <CardList />. 
// The attributes assigned to each <Card /> component in <CardList /> would define the properties of the given <Card /> component.