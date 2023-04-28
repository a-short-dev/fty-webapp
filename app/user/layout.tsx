import React from 'react';
import getCurrentUser from '../actions/getCurrentUser';
import ClientOnly from '../components/ClientOnly';
import EmptyState from '../components/EmptyState';
import Header from './components/Header';
import Nav from './components/Nav';
import HN from './components/HN';
import useModal from '../hooks/useModal';
import WelcomeModal from '../components/modals/Onboarding/Welcome';
import LoanApplicationModal from '../components/modals/Loan';
import useWelcomeModal from '../hooks/useModal/useWelcomeModal';

interface Dash {
	children: React.ReactNode;
}
export default async function DashboardLyout({ children }: Dash) {
	const currentUser = await getCurrentUser();
	

	if (!currentUser) {
		return (
			<ClientOnly>
				<EmptyState
					title="Unauthorized"
					subtitle="Please login"
					showReset
				/>
			</ClientOnly>
		);
	}

	

	return (
		<div className="bg-gray-200 min-h-screen overflow-hidden">
			<HN user={currentUser} />
			<WelcomeModal />
			<LoanApplicationModal />
			<div className="relative top-16 px-5 py-10">{children}</div>
		</div>
	);
}
