import React from 'react';

import './Input.css';

const Input = ({ value, onChange, placeholder, label }) => {
	return (
		<>
			<label>{label}</label>
			<input
				type='text'
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</>
	);
};

export default Input;
