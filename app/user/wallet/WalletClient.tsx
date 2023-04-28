'use client';
import React, { useCallback, useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';

const WalletClient = () => {
	const [showM, setShowM] = useState(true);

	const toggleOpen = useCallback(() => {
		setShowM((value) => !value);
	}, []);

	return (
		<div className="relative h-full pb-20 overflow-y-auto">
			<div className="bg-white px-4 py-8 rounded-md h-auto flex  justify-between">
				<div className="space-y-2">
					<p className="text-base font-normal capitalize">Balance</p>
					<div className="flex items-center justify-center gap-2">
						<h2 className="text-3xl px-1 font-bold">
							{showM ? '0.00' : 'XX.XXX'}
						</h2>
						<div onClick={toggleOpen}>
							<AiOutlineEye size={20} />
						</div>
					</div>
				</div>

				<div>
					<button>Deposit</button>
					<button>Withdraw</button>
				</div>
			</div>

			<div className="mt-5">
				<h3 className="text-slate-600 font-medium text-lg mb-3">
					Transactions
				</h3>

				<div className="bg-white h-auto overflow-hidden rounded p-2">
					No transactions
				</div>
			</div>
		</div>
	);
};

export default WalletClient;
