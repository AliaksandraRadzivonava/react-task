import React, { useState, useEffect } from 'react';
import { Button } from '../../common/Button/Button';
import Input from '../../common/Input/Input.jsx';
import Textarea from '../../common/Textarea/Textarea';
import Author from './components/Author/Author';
import { mockedAuthorsList, mockedCoursesList } from '../../App.jsx';

import './CreateCourse.css';

const newCourse = {
	id: '',
	title: '',
	description: '',
	creationDate: '',
	duration: 0,
	authors: [],
};

const CreateCourse = () => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState('');
	// const [course, setCourse] = useState(newCourse);
	const [newAuthor, setNewAuthor] = useState({});
	const [authorsList, setAutorsList] = useState([]);

	const addAuthor = (elem) => {
		authorsList.push(elem);
		let index = allAuthors.indexOf(elem);

		if (index !== -1) {
			allAuthors.splice(index, 1);
		}
		console.log(authorsList);
		console.log(allAuthors);
	};

	const deleteAuthor = (elem) => {
		authorsList.push(elem);
		let index = allAuthors.indexOf(elem);

		if (index !== -1) {
			allAuthors.splice(index, 1);
		}
		console.log(authorsList);
		console.log(allAuthors);
	};

	const allAuthors = mockedAuthorsList.map((elem) => {
		return (
			<Author
				text='Add author'
				onClick={() => addAuthor(elem)}
				nameAuthor={elem.name}
			/>
		);
	});

	const addNewAuthor = (name, e) => {
		const newAuthor = {
			name: name,
			id: '123',
		};
		mockedAuthorsList.push(newAuthor);
	};

	const authors = () => {
		authorsList.map((elem) => {
			return (
				<Author text='Delete author' onChange={null} nameAuthor={elem.name} />
			);
		});
	};

	function durationFormat(duration) {
		const minutes = Number(duration);
		return Math.floor(minutes / 60) + ':' + (minutes % 60);
	}

	return (
		<div className='form'>
			<div className='form-title'>
				<div>
					<Input
						label='Title'
						placeholder='Enter title...'
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					/>
				</div>
				<Button onClick={null} text='Create course' />
			</div>
			<div className='form-description'>
				<Textarea
					label='Description'
					placeholder='Enter description...'
					value={description}
					onChange={(e) => {
						setDescription(e.target.value);
					}}
				/>
			</div>
			<div className='form-information'>
				<div className='form-information_elem'>
					<h3>Add authors</h3>
					<div className='input'>
						<Input
							label='Author name'
							placeholder='Enter author name...'
							value={author}
							onChange={(e) => {
								setAuthor(e.target.value);
							}}
						/>
					</div>
					<Button onClick={() => addNewAuthor(author)} text='Create author' />
				</div>
				<div className='form-information_authors'>
					<h3 className='form-information_elem'>Authors</h3>
					{allAuthors}
				</div>
				<div className='form-information_elem'>
					<h3>Duration</h3>
					<div className='input'>
						<Input
							label='Duration'
							placeholder='Enter duration in minutes...'
							value={duration}
							onChange={(e) => {
								setDuration(e.target.value);
							}}
						/>
					</div>
					<p className='form-information_durations'>
						Duration: <b>{durationFormat(duration)}</b> hours
					</p>
				</div>
				<div className='form-information_authors'>
					<h3 className='form-information_elem'>Course Authors</h3>
					{authors.length === 0 ? <p>Author list is empty</p> : authors}
				</div>
			</div>
		</div>
	);
};

export default CreateCourse;
