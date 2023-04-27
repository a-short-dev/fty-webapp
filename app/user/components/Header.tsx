import Image from 'next/image';
import React from 'react';
import { AiOutlineBell, AiOutlineMenu } from 'react-icons/ai';

interface HeaderProps {
	firstName?: string | null | undefined;
	avatar?: string | null | undefined;
	isOpen: () => void;
}

const Header = ({ firstName, avatar, isOpen }: HeaderProps) => {
	return (
		<div className="fixed z-40 transition top-0 w-full bg-white shadow">
			<div className="flex items-center justify-between px-5 py-3">
				<div
					onClick={isOpen}
					className="flex items-center gap-2 cursor-pointer"
				>
					<AiOutlineMenu size={20} />
					<h3 className="font-medium text-lg">Hi,{firstName || 'User'}</h3>
				</div>
				<div className="flex items-center gap-2">
					<div className="relative cursor-pointer">
						<AiOutlineBell
							size={20}
							className="relative cursor-pointer"
						/>
					</div>
					<div className=" rounded-full w-10 h-10 border px-2 relative">
						<Image
							src={avatar || '/next.svg'}
							fill
							alt=""
							priority
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
