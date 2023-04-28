'use client';
import Navlinks from '@/app/libs/navlink';
import { useCallback, useEffect, useState } from 'react';
import {
	AiOutlineClose,
	AiOutlineHome,
	AiOutlineLogout,
	AiOutlineSetting,
	AiOutlineWallet,
} from 'react-icons/ai';
import { signOut } from 'next-auth/react';

export const navMenu = [
	{
		label: 'Home',
		icon: AiOutlineHome,
		link: '/user/dashboard',
	},
	{
		label: 'Wallet',
		icon: AiOutlineWallet,
		link: '/user/wallet',
	},
	{
		label: 'Settings',
		icon: AiOutlineSetting,
		link: '/user/settings',
	},
];

interface NavProps {
	isOpen?: boolean;
	onClose: () => void;
	disabled?: boolean;
}
const Nav = ({ isOpen, onClose, disabled }: NavProps) => {
	const [showNav, setShowNav] = useState(isOpen);

	useEffect(() => {
		setShowNav(isOpen);
	}, [isOpen]);

	const handleClose = useCallback(() => {
		if (disabled) {
			return;
		}

		setShowNav(false);
		setTimeout(() => {
			onClose();
		}, 300);
	}, [onClose, disabled]);

	if (!isOpen) {
		return null;
	}
	return (
		<div
			className={`bg-gray-50 h-screen w-2/3 sm:w-1/3 fixed z-30 translate
			duration-300
			${showNav ? 'translate-y-0' : 'translate-y-full'}
			${showNav ? 'opacity-100' : 'opacity-0'} `}
		>
			<div
				className="
					pt-40
					flex
					flex-col
					gap-8
					pl-5
					relative"
			>
				<div
					onClick={handleClose}
					className="absolute top-20 right-2 cursor"
				>
					<AiOutlineClose size={24} />
				</div>
				{navMenu.map((link, i) => (
					<Navlinks
						key={i}
						label={link.label}
						icon={link.icon}
						link={link.link}
					/>
				))}

				<div
					onClick={() => signOut()}
					className="mt-72 flex items-center gap-2 cursor-pointer"
				>
					<AiOutlineLogout
						size={24}
						className="text-red-200"
					/>
					<p className="text-slate-500 text-xl font-bold">Say Bye</p>
				</div>
			</div>
		</div>
	);
};

export default Nav;
