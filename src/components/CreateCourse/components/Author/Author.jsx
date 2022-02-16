import React from 'react';
import { Button } from '../../../../common/Button/Button';

import './Author.css';

const Author = ({ nameAuthor, onClick, text }) => {
	return (
		<div className='author'>
			<p>{nameAuthor}</p>
			<Button onClick={onClick} text={text} />
		</div>
	);
};

export default Author;
