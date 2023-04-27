

'use Client';

import useAddCustomerModal from '@/app/hooks/useAddCustomerModal';
import axios from 'axios';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import FormInput from '@/app/components/input/FormIputs';
import Modal from '@/app/components/Modal';
const AddCustomerModal = () => {
	const addCustomerModal = useAddCustomerModal();
	const [isLoading, setIsLoading] = useState(false);

	// use react hook form
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});
	//Form onSubmit function
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		const url = '/api/customer/';
		//send data using axios
		axios
			.post(url, data)
			.then(() => {
				addCustomerModal.onClose();
			})
			.then(() => {
				addCustomerModal.onClose();
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const modalBody = (
		<div className='flex flex-col'>
			<FormInput
				id='email'
				type='email'
				label='Email'
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
		</div>
	);
	return (
		<Modal
			disabled={isLoading}
			isOpen={addCustomerModal.isOpen}
			title='Add Customer'
			actionLabel='Continue'
			onClose={addCustomerModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={modalBody}
		/>
	);
};

export default AddCustomerModal;
