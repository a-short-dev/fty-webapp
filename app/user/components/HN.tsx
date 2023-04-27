'use client';

import React, {  useCallback, useRef, useState } from 'react';
import Header from './Header';
import Nav from './Nav';

const HN = ({ user }: any) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value);
	}, []);
	return (
		<div>
			<Header
			
				firstName={user.firstName}
				avatar={user.avatar}
				isOpen={toggleOpen}
			/>
			<Nav
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			/>
		</div>
	);
};

export default HN;
