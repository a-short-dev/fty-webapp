import ClientOnly from '@/app/components/ClientOnly';
import React from 'react';
import ProfileClient from './ProfileClient';
import getCurrentUser from '@/app/actions/getCurrentUser';

const page = async () => {
	const currentUser = await getCurrentUser();

	return (
		<ClientOnly>
			<ProfileClient
				firstName={currentUser?.firstName}
				lastName={currentUser?.lastName}
				email={currentUser?.email}
				phone={currentUser?.phone}
				tier={currentUser?.isVerified}
			/>
		</ClientOnly>
	);
};

export default page;
