import Link from 'next/link';
import { IconType } from 'react-icons';

interface NavLinkProps {
	label: string;
	icon?: IconType;
	link: string;
	selected?: boolean;
}

const Navlinks = ({ label, icon: Icon, link, selected }: NavLinkProps) => {
	return (
		<Link href={link}>
			<div
				className="
                peer
                flex
                items-center
                font-normal
                text-3xl
                gap-2.5
                cursor-pointer
                "
			>
				{Icon && <Icon size={24} />}
				<div className="text-right text-purple-400">{label}</div>
			</div>
		</Link>
	);
};

export default Navlinks;
