import useModal from '@/app/hooks/useModal';
import useMultiStepForm from '@/app/hooks/useMultiStepForm';
import { useRouter } from 'next/router';
import React from 'react';

const WelcomeModal = () => {
	const router = useRouter();
	const modal = useModal();
	const steps = useMultiStepForm([]);

	const bodyContent = <div></div>;

	return <div>index</div>;
};

export default WelcomeModal;
