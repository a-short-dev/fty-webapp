import ClientOnly from '@/app/components/ClientOnly';
import React from 'react';
import SettingsClient from './SettingsClient';

export default function page() {
	return (
		<ClientOnly>
			<SettingsClient />
		</ClientOnly>
	);
}
