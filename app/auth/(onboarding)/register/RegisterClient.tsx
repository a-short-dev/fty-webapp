'use client';
import Button from '@/app/components/button/Button';
import FormInput from '@/app/components/input/FormIputs';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const RegisterClient = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			firstName: '',
			lastName: '',
			phone: '',
			email: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		axios
			.post('/api/register', data)
			.then((res) => {
				if (res.data?.user.email) {
					toast.success('Registered!');
					return router.push('/');
				} else {
					toast.error('An error occured, Contact support');
				}
			})
			.catch((error) => {
				toast.error(error.message || 'An error occurred');
			})
			.finally(() => {
				setIsLoading(false);
			});
	};
	return (
		<div className="w-full min-h-screen flex justify-center items-center p-4  bg-zinc-50">
			<div className="w-[670px] bg-white rounded-xl overflow-hidden relative shadow">
				<div className="w-full relative  flex flex-wrap flex-col items-center p-8 sm:p-16 bg-purple-300">
					<h1 className="text-3xl font-bold text-white">Create Account</h1>
				</div>
				<form className="mt-4 w-full flex flex-col gap-8 justify-between p-4 sm:p-16">
					<FormInput
						id="firstName"
						type="text"
						label="First name"
						disabled={isLoading}
						register={register}
						errors={errors}
						required
					/>
					<FormInput
						id="lastName"
						type="text"
						label="Last name"
						disabled={isLoading}
						register={register}
						errors={errors}
						required
					/>
					<FormInput
						id="email"
						type="email"
						label="Email"
						disabled={isLoading}
						register={register}
						errors={errors}
						required
					/>
					<FormInput
						id="phone"
						type="tel"
						label="phone"
						disabled={isLoading}
						register={register}
						errors={errors}
						required
					/>
					<FormInput
						id="password"
						type="password"
						label="Password"
						disabled={isLoading}
						register={register}
						errors={errors}
						required
					/>
					<Button
						label="Sign up"
						disabled={isLoading}
						onClick={handleSubmit(onSubmit)}
						isLodading={isLoading}
					/>

					<div className="flex items-center justify-center gap-0.5 text-base">
						<p className="text-gray-500">Have an account?</p>
						<Link
							className="text-purple-400"
							href="/"
						>
							Log In
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RegisterClient;
