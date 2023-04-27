'use client';

import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';

const HN = ({ user }: any) => {
	const [isOpen, setIsOpen] = useState(false);

	function toggleNav() {
		setIsOpen(true);
		console.log('hi');
	}
	return (
		<div>
			<Header
				firstName={user.firstName}
				avatar={user.avatar}
				isOpen={toggleNav}
			/>
			<Nav
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			/>
		</div>
	);
};

export default HN;
