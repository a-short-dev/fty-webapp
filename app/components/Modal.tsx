'use Client';

import React, { useCallback, useEffect, useState } from 'react';
import { BsBagX } from 'react-icons/bs';
import Button from './button/Button';
import { AiOutlineClose } from 'react-icons/ai';

interface ModalProps {
	isOpen?: boolean;
	onClose: () => void;
	onClick: () => void;
	title?: string;
	body?: React.ReactElement;
	footer?: React.ReactElement;
	actionLabel: string;
	disabled?: boolean;
	secondaryAction?: () => void;
	secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	onClick,
	title,
	body,
	footer,
	actionLabel,
	disabled,
	secondaryAction,
	secondaryActionLabel,
}) => {
	const [showModal, setShowModal] = useState(isOpen);

	useEffect(() => {
		setShowModal(isOpen);
	}, [isOpen]);

	const handleClose = useCallback(() => {
		if (disabled) return;

		setShowModal(false);
		setTimeout(() => {
			onClose();
		}, 300);
	}, [disabled, onClose]);

	const handleSubmit = useCallback(() => {
		if (disabled) return;
		onClick();
	}, [disabled, onClick]);

	const handleSecondaryAction = useCallback(() => {
		if (disabled || !secondaryAction) {
			return;
		}
		secondaryAction();
	}, [disabled, secondaryAction]);

	if (!isOpen) {
		return null;
	}
	return (
		<>
			<div
				className="
					fixed 
					flex 
					justify-center 
					items-center 
					overflow-x-hidden 
					overflow-y-auto  
					inset-0 
					z-50 
					outline-none 
					focus:-outline-none 
					bg-neutral-800/70
				"
			>
				<div
					className="
						relative 
						w-full 
						md:w-4/6 
						lg:w-3/6 
						xl:w-2/5 
						my-6 
						mx-auto 
						h-auto
				"
				>
					{/**BODY */}
					<div
						className={`
							translate 
							duration-300 
							h-full 
							${showModal ? 'translate-y-0' : 'translate-y-full'} 
							${showModal ? 'opacity-100' : 'opacity-0'} 
						`}
					>
						<div
							className="
								translate 
								h-full 
								lg:h-auto 
								md:h-auto 
								border-0 
								rounded-lg 
								shadow-lg 
								relative 
								flex 
								flex-col 
								w-full 
								bg-white 
								outline-none 
								focus:outline-none
							"
						>
							<div
								className="
									flex 
									items-center 
									p-6 
									rounded-t 
									justify-center 
									relative b
									order-b-[1px]
							"
							>
								<button
									onClick={handleClose}
									className="
									p-1 border-0 hover:opacity-70 transition absolute right-9"
								>
									<AiOutlineClose size={18} />
								</button>
								<div className="text-lg font-semibold">{title}</div>
							</div>
							<div className="relative p-6 flex-auto">{body}</div>
							{/**Footer */}
							<div className="flex flex-col gap-2 p-6">
								<div className="flex flex-row itens-center gap-4 w-full">
									{secondaryAction && secondaryActionLabel && (
										<Button
											disabled={disabled}
											label={secondaryActionLabel}
											onClick={handleSecondaryAction}
										/>
									)}
									<Button
										disabled={disabled}
										label={actionLabel}
										onClick={handleSubmit}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
