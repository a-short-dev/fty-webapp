'use client';
import Modal from '@/app/components/Modal';
import useModal from '@/app/hooks/useModal';
import useMultiStepForm from '@/app/hooks/useMultiStepForm';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const WelcomeModal = () => {
	const router = useRouter();
	const modal = useModal();
	const [isLoading, setIsLoading] = useState(false);
	const steps = useMultiStepForm([]);

	const bodyContent = (
		<div>
			<h6 className="text-lg font-medium text-slate-900">
				Thank you for singing up with us.
			</h6>{' '}
			<br />
			<p className="text-base font-normal">
				Before you can apply for a loan you need to give us some more
				information.
			</p>
			<p className="text-base font-normal">You need to have the following</p>
			<ul className="mt-2 text-base font-medium">
				<li>A valid BVN.</li>
				<li>Uilitiy bill for current address.</li>
				<li>Bank statement.</li>
				<li>Valid means of Identification.</li>
			</ul>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={modal.isOpen}
			title="Welcome"
			actionLabel="Continue"
			onClose={modal.onClose}
			onClick={handleClick}
			body={bodyContent}
		/>
	);

	function handleClick() {
		console.log('get next step');
	}
};

export default WelcomeModal;
