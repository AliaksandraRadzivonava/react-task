import React from 'react';

import './Textarea.css';

const Textarea = ({ value, onChange, placeholder, label }) => {
	return (
		<>
			<label>{label}</label>
			<textarea placeholder={placeholder} value={value} onChange={onChange} />
		</>
	);
};

export default Textarea;
