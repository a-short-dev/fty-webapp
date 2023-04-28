'use client';

import Image from 'next/image';
import React from 'react';

interface ProfileProps {
	firstName?: string | null | undefined;
	lastName?: string | null | undefined;
	phone?: string | null | undefined;
	email?: string | null | undefined;
	address?: string | null | undefined;
	avatar?: string | null | undefined;
	tier?: number | null | undefined;
	accountNo?: string | null | undefined;

	verification?: {
		isVerfified: number
		status: string;
	};
}
const ProfileClient = ({
	avatar,
	firstName,
	lastName,
	email,
	phone,
	address,
	verification,
	tier,
	accountNo,
}: ProfileProps) => {
	return (
		<div className="relative h-full pb-20 overflow-y-auto">
			<div className="bg-white flex flex-col items-center justify-center py-5 px-2 rounded-t-md ">
				<div
					className="
						rounded-full 
						w-20 
						h-20 
						border-2 
						p-2 
            object-center
						relative 
						cursor-pointer"
				>
					<Image
						src={avatar || '/next.svg'}
						fill
						alt=""
						priority
					/>
				</div>
			</div>

			<div className="bg-white text-right  flex flex-col py-2 px-5 border-t rounded-b-md">
				<div className="flex w-full  justify-between">
					<h6 className="text-base font-normal">Tier</h6>
					<h6 className="text-base font-normal">Account No</h6>
				</div>

				<div className="mt-2 flex w-full justify-between">
					<p className="text-sm font-medium">{tier || '0'}/4</p>
					<h6 className="text-sm font-medium">{accountNo || 'N/A'}</h6>
				</div>
			</div>

			<div className="mt-5 bg-white flex flex-col  py-5 px-2 rounded-md ">
				<div>
					<div className="flex p-2 justify-between">
						<p>First name</p>
						{firstName || ''}
					</div>
					<div className="border m-1" />
					<div className="flex p-2 justify-between">
						<p>Surname</p>
						{lastName || ''}
					</div>
					<div className="border m-1" />
					<div className="flex p-2 justify-between">
						<p>Phone name</p>
						{phone || ''}
					</div>
					<div className="border m-1" />
					<div className="flex p-2 justify-between">
						<p>Email</p>
						{email || ''}
					</div>
					<div className="border m-1" />
					<div className="flex p-2 justify-between">
						<p>Address</p>
						{address || ''}
					</div>
				</div>
			</div>

			<div className="mt-5 bg-white flex flex-col  py-5 px-2 rounded-md ">
				<div>
					<div className="flex p-2 justify-between">
						<p>Verification</p>
						{verification?.status || ''}
					</div>
					<div className="border m-1" />
					<div className="flex p-2 justify-between">
						<p>Teir</p>
						{tier || ''}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileClient;
