import React, { useState } from 'react';
import { mockedAuthorsList, mockedCoursesList } from '../../App.jsx';
import { Button } from '../../common/Button/Button';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import CreateCourse from '../CreateCourse/CreateCourse.jsx';

import './Courses.css';

const Courses = () => {
	const [value, setValue] = useState('');
	const [isFormOpened, setIsFromOpened] = useState(false);

	const authorName = (list) => {
		const namesAuthor = list.map((elem) => {
			return mockedAuthorsList
				.filter((e) => e.id === elem)
				.map((e) => {
					return e.name;
				});
		});

		return namesAuthor.join(', ');
	};

	const filteredCourses = mockedCoursesList.filter((elem) => {
		const pred =
			elem.title.toLowerCase().includes(value.toLowerCase()) ||
			elem.id.toLowerCase().includes(value.toLowerCase());
		return pred;
	});

	const onClick = (event) => {
		event.preventDefault();
	};

	const durationFormat = (duration) => {
		const minutes = Number(duration);
		return Math.floor(minutes / 60) + ':' + (minutes % 60);
	};

	const coursesList = filteredCourses.map((item) => (
		<li className='courses-list-elem' key={item.id}>
			<CourseCard
				onClick={null}
				title={item.title}
				description={item.description}
				authors={authorName(item.authors)}
				duration={durationFormat(item.duration)}
				creationDate={new Date(item.creationDate).toLocaleDateString()}
			/>
		</li>
	));

	return !isFormOpened ? (
		<div className='courses'>
			<div className='courses-panel'>
				<SearchBar
					className='courses-panel_search'
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onClick={onClick}
				/>
				<Button text='Add new course' onClick={() => setIsFromOpened(true)} />
			</div>
			<ul className='courses-list'>{coursesList}</ul>
		</div>
	) : (
		<CreateCourse />
	);
};

export default Courses;
