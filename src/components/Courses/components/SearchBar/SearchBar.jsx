import React from 'react';
import { Button } from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input.jsx';

import './SearchBar.css';

const SearchBar = ({ value, onChange, onClick }) => {
	return (
		<form className='search'>
			<div className='search-input'>
				<Input
					placeholder='Enter course name...'
					value={value}
					onChange={onChange}
				/>
			</div>
			<Button onClick={onClick} text='Search' />
		</form>
	);
};

export default SearchBar;
