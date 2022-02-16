import React from 'react';
import { Button } from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';

import './Header.css';

const Header = () => {
	return (
		<div className='header'>
			<Logo />
			<div className='header-title'>
				<p className='header-title_text'>Alex</p>
				<Button text='Logout' onClick={null} />
			</div>
		</div>
	);
};

export default Header;
