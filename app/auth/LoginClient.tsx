'use client';

import FormInput from '../components/input/FormIputs';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

import { useRouter } from 'next/navigation';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import Button from '../components/button/Button';

const LoginClient = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		signIn('credentials', {
			...data,
			redirect: false,
		}).then((callback) => {
			setIsLoading(false);

			if (callback?.ok) {
				toast.success('Logged in');
				//add router to dashboard
				router.push('/user/dashboard');
			}

			if (callback?.error) {
				toast.error(callback.error);
			}
		});
	};
	return (
		<>
			<div className="w-full min-h-screen flex justify-center items-center p-4  bg-zinc-50">
				<div className="w-[670px] bg-white rounded-xl overflow-hidden relative shadow">
					<div className="w-full relative  flex flex-wrap flex-col items-center p-8 sm:p-16 bg-purple-300">
						<h1 className="text-3xl font-bold text-white">SIGN IN</h1>
					</div>
					<form className="mt-4 w-full flex flex-col gap-8 justify-between p-4 sm:p-16">
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
							id="password"
							type="password"
							label="Password"
							disabled={isLoading}
							register={register}
							errors={errors}
							required
						/>

						<Button
							label="Log In"
							disabled={isLoading}
							onClick={handleSubmit(onSubmit)}
							isLodading={isLoading}
						/>

						<div className="flex items-center justify-center gap-0.5 text-base">
							<p className="text-gray-500">Don&apos;t have an account?</p>
							<Link
								className="text-purple-400"
								href="/auth/register"
							>
								Sign up
							</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default LoginClient;
