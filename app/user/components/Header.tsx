'use client';
import MenuItem from '@/app/components/MenuItem';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState, useCallback } from 'react';
import { AiOutlineBell, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { signOut } from 'next-auth/react';
interface HeaderProps {
	firstName?: string | null | undefined;
	avatar?: string | null | undefined;
	isOpen: () => void;
}

const Header = ({ firstName, avatar, isOpen }: HeaderProps) => {
	const router = useRouter();
	const [isMenuOpen, setisMenuOpen] = useState(false);

	const toggleOpen = useCallback(() => {
		setisMenuOpen((value) => !value);
	}, []);

	return (
		<div
			className="
			fixed 
			z-40 
			transition 
			top-0 
			w-full 
			bg-white 
			shadow"
		>
			<div className="flex items-center justify-between px-5 py-3">
				<div className="flex items-center transition gap-2 cursor-pointer">
					<div onClick={isOpen}>
						<AiOutlineMenu size={24} />
					</div>
					<h3 className="font-medium text-lg">Hi,{firstName || 'User'}</h3>
				</div>
				<div className="flex items-center gap-2">
					<div className="relative cursor-pointer">
						<AiOutlineBell
							size={20}
							className="relative cursor-pointer"
						/>
					</div>
					<div
						onClick={toggleOpen}
						className="
						rounded-full 
						w-10 
						h-10 
						border 
						px-2 
						relative 
						cursor-pointer"
					>
						<Image
							src={avatar || '/next.svg'}
							fill
							alt=""
							priority
						/>
						{isMenuOpen && (
							<div
								className="
								absolute 
								rounded-xl 
								shadow-md
								w-[40vw]
								md:w-[250px]
								bg-white 
								overflow-hidden 
								right-0 
								top-12 
								text-sm
								"
							>
								<div className="flex flex-col cursor-pointer">
									<MenuItem
										label="My profile"
										onClick={() => router.push('/user/profile')}
									/>
									<MenuItem
										label="Log out"
										onClick={() => signOut()}
									/>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
