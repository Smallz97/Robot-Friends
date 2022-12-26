import	React from 'react';
import Card from './card';

const CardList = ({ robotProp }) => {
	// if (true) {
	// 	throw new Error('NOOOOO');
	// }
	return (
		<div>
			{
				robotProp.map((user, i) => {
					return (
						<Card 
							key={i}
							id={robotProp[i].id} 
							name={robotProp[i].name} 
							email={robotProp[i].email} 
							username={robotProp[i].username}
						/>
					);
				})
			}
		</div>
	);
}


export default CardList;

// <CardList assigns properties to Card from attributes of robotProp
// It creates a list of <Card /> components by iterating through the [robots], using it's key:value pairs to specify attributes for each <Card />.
// <CardList /> creates a list of <Card /> components using the key:value pairs of objects in the [robots] to assign specific attributes for each <Card />.
// It uses the map() method for iterating the [robots].
// Rather than returning multiple <Card /> components in the <App />, a single component <CardList /> is returned containing all the <Card /> components  created from [robots]..