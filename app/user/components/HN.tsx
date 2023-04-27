'use client';

import { useCallback, useEffect, useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import useModal from '@/app/hooks/useModal';

const HN = ({ user }: any) => {
	const [isOpens, setIsOpen] = useState(false);
	const { onOpen } = useModal();

	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value);
	}, []);
	const modal = useModal();

	useEffect(() => {
		if (user.isVerified === 0) {
			onOpen();
		}
	}, [user.isVerified, onOpen]);
	return (
		<div>
			<Header
				firstName={user.firstName}
				avatar={user.avatar}
				isOpen={toggleOpen}
			/>
			<Nav
				isOpen={isOpens}
				onClose={() => setIsOpen(false)}
			/>
		</div>
	);
};

export default HN;
