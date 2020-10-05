import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba SearchBoxStyles tc'
				type='search'
				placeholder='search robots'
				onChange={searchChange}
			/>	
		</div>
	);
}

export default SearchBox;