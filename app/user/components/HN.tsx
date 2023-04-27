'use client';

import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';

const HN = () => {
	const [isOpen, setIsOpen] = useState(false);

	function toggleNav() {
		setIsOpen(true);
		console.log('hi');
	}
	return (
		<div>
			<Header isOpen={toggleNav} />
			<Nav
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			/>
		</div>
	);
};

export default HN;
