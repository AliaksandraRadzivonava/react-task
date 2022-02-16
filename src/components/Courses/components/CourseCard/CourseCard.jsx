import React from 'react';
import { Button } from '../../../../common/Button/Button';

import './CourseCard.css';

const CourseCard = ({
	onClick,
	title,
	description,
	authors,
	duration,
	creationDate,
}) => {
	return (
		<div className='courseCard'>
			<div className='courseCard-desctiption'>
				<h1 className='courseCard-desctiption_title'>{title}</h1>
				<p className='courseCard-desctiption_text'>{description}</p>
			</div>
			<div className='courseCard-infotmation'>
				<p className='courseCard-infotmation_elem'>
					<b>Authors: </b>
					{authors}
				</p>
				<p className='courseCard-infotmation_elem'>
					<b>Duration: </b>
					{duration}
				</p>
				<p className='courseCard-infotmation_elem'>
					<b>Created: </b>
					{creationDate}
				</p>
				<Button
					onClick={onClick}
					text='Show course'
					className='courseCard-infotmation_button'
				/>
			</div>
		</div>
	);
};

export default CourseCard;
