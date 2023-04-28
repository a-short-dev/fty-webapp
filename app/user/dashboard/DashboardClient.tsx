'use client';
import Button from '@/app/components/button/Button';
import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';

const DashboardClient = () => {
	return (
		<div className="relative h-auto overflow-y-auto">
			<div className="bg-white px-4 py-8 rounded-md h-auto flex  justify-between">
				<div className="space-y-2">
					<p className="text-base font-normal capitalize">Balance</p>
					<div className="flex items-center justify-center gap-2">
						<h2 className="text-3xl px-1 font-bold">0.00</h2>
						<AiOutlineEye size={20} />
					</div>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-2 mt-5">
				<div className="bg-gradient-to-t from-purple-800 to-purple-400  text-white px-4 py-8 rounded-md h-auto flex  justify-between">
					<div className="space-y-2">
						<p className="text-base font-normal capitalize">Active loans</p>
						<h2 className="text-3xl px-1 font-bold">0</h2>
					</div>
				</div>
				<div className="bg-red-200 px-4 py-8 rounded-md h-auto flex  justify-between">
					<div className="space-y-2">
						<p className="text-base font-normal capitalize">Due Loans</p>
						<h2 className="text-3xl px-1 font-bold">0</h2>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-2 mt-5">
				<div className="bg-purple-400 text-white rounded-md flex  items-center pl-5 h-16 cursor-pointer">
					<div onClick={handleLoan}>
						<p className="text-lg  font-bold capitalize">Apply</p>
					</div>
				</div>
				<div className="bg-red-200  rounded-md flex  items-center pl-5 h-16 cursor-pointer">
					<div>
						<p className="text-lg font-bold capitalize">Deposit</p>
					</div>
				</div>
			</div>

			<div className="mt-5">
				<h3 className="text-fuchsia-200 font-medium text-xl">Transactions</h3>

				<div className="bg-white h-auto overflow-hidden rounded p-2">
					No transactions
				</div>
			</div>
		</div>
	);
};

function handleLoan() {}

export default DashboardClient;
