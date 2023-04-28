import ClientOnly from '@/app/components/ClientOnly';
import React from 'react';
import WalletClient from './WalletClient';

export default function page() {
	return (
		<ClientOnly>
			<WalletClient />
		</ClientOnly>
	);
}
