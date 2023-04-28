'use client';
import Modal from '@/app/components/Modal';
import FormInput from '@/app/components/input/FormIputs';
import useWelcomeModal from '@/app/hooks/useModal/useWelcomeModal';
import useMultiStepForm from '@/app/hooks/useMultiStepForm';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import {
	FieldErrors,
	FieldValues,
	UseFormRegister,
	useForm,
} from 'react-hook-form';

interface FormProps {
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
}

const WelcomeModal = () => {
	const modal = useWelcomeModal();
	const router = useRouter();

	const {
		register,
		formState: { errors },
	} = useForm<FieldValues>();
	const [isLoading, setIsLoading] = useState(false);
	const {
		steps,
		goTo,
		currentStepIndex,
		next,
		isFirstStep,
		isLastStep,
		back,
		step,
	} = useMultiStepForm([
		<Welcome key="wel" />,
		<BvnVerifation
			key="bvn"
			errors={errors}
			register={register}
		/>,
	]);

	const bodyContent = (
		<div>
			<h6
				className="
				text-lg 
				font-medium 
				text-slate-900"
			>
				Thank you for singing up with us.
			</h6>
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
			onClick={next}
			body={step}
		/>
	);
};

function kycDocuments({ register, errors }: FormProps) {
	return (
		<div>
			<form>
				<FormInput
					id="bvn"
					type="text"
					label="bvn"
					register={register}
					errors={errors}
				/>
				<div className="flex mt-5 items-center gap-5">
					<FormInput
						id="date"
						label="Date"
						register={register}
						errors={errors}
					/>

					<FormInput
						id="month"
						label="Month"
						register={register}
						errors={errors}
					/>
					<FormInput
						id="year"
						label="Year"
						register={register}
						errors={errors}
					/>
				</div>
			</form>
		</div>
	);
}
function Welcome() {
	return (
		<div>
			<h6
				className="
		text-lg 
		font-medium 
		text-slate-900"
			>
				Thank you for singing up with us.
			</h6>
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
}

function BvnVerifation({ register, errors }: FormProps) {
	return (
		<div>
			<form>
				<FormInput
					id="bvn"
					type="text"
					label="bvn"
					register={register}
					errors={errors}
				/>
				<div className="flex mt-5 items-center gap-5">
					<FormInput
						id="date"
						label="Date"
						register={register}
						errors={errors}
					/>

					<FormInput
						id="month"
						label="Month"
						register={register}
						errors={errors}
					/>
					<FormInput
						id="year"
						label="Year"
						register={register}
						errors={errors}
					/>
				</div>
			</form>
		</div>
	);
}

export default WelcomeModal;
