'use client';
import useModal from '@/app/hooks/useModal';
import useMultiStepForm from '@/app/hooks/useMultiStepForm';
import React, { useState } from 'react';
import {
	FieldErrors,
	FieldValues,
	UseFormRegister,
	useForm,
} from 'react-hook-form';
import FormInput from '../../input/FormIputs';
import Modal from '../../Modal';
import useLoanModal from '@/app/hooks/useModal/useLoanModal';

interface FormProps {
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
}

const LoanApplicationModal = () => {
	const modal = useLoanModal();
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		formState: { errors },
	} = useForm<FieldValues>();

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
		<StepOne
			key="stepOne"
			register={register}
			errors={errors}
		/>,
	]);

	function handleNext() {
		() => next;
	}

	return (
		<Modal
			disabled={isLoading}
			isOpen={modal.isOpen}
			title="Loan Application"
			actionLabel="Continue"
			onClose={modal.onClose}
			onClick={handleNext}
			body={step}
		/>
	);
};

//Rename later
function StepOne({ register, errors }: FormProps) {
	return (
		<div>
			<form className="flex flex-col gap-4">
				<FormInput
					id="amount"
					type="text"
					label="amount"
					register={register}
					errors={errors}
				/>

				<FormInput
					id="purpose"
					type="text"
					label="purpsose"
					register={register}
					errors={errors}
				/>

				<FormInput
					id="duration"
					label="duration"
					type="date"
					register={register}
					errors={errors}
				/>
			</form>
		</div>
	);
}

interface loanDetailProps {
	amount: number;
	purpose: string;
	duration: string;
	interest: string;
	total: string;
}

function StepTwo(props: loanDetailProps) {
	const { amount, purpose, duration, interest, total } = props;
	return (
		<div>
			<div>
				<p>Amount</p>: <span>{amount || '10,000.00'}</span>
			</div>

			<div>
				<p>Purpose</p>: <span>{purpose || 'Feeding'}</span>
			</div>

			<div>
				<p>duration</p>: <span>{duration || '1 week'}</span>
			</div>

			<div>
				<p>Interest</p>: <span>{interest || '0.85'}</span>
			</div>

			<div>
				<p>Total Amount</p>: <span>{total || '0.85'}</span>
			</div>
		</div>
	);
}

export default LoanApplicationModal;
