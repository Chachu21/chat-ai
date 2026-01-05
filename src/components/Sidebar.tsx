import LogoPopover from './LogoPopover';
import ChatIcon from './icons/ChatIcon';
import CompassIcon from './icons/CompassIcon';
import FolderIcon from './icons/FolderIcon';
import HomeIcon from './icons/HomeIcon';
import Logo from './icons/Logo';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import StarFourIcon from './icons/StarFourIcon';
import ImagesSquareIcon from './icons/ImagesSquareIcon';

const navItems = [
    { icon: HomeIcon, label: 'Home', active: false },
    { icon: ChatIcon, label: 'Messages', active: true },
    { icon: CompassIcon, label: 'Explore', active: false },
    { icon: FolderIcon, label: 'Documents', active: false },
    { icon: ImagesSquareIcon, label: 'Gallery', active: false },
];

const Sidebar = () => {
    return (
        <aside className="w-19 h-screen bg-transparent flex flex-col items-center py-6 px-4 shrink-0">
            <div className="mb-10 cursor-pointer transform hover:scale-105 transition-transform">
                <LogoPopover>
                    <Logo />
                </LogoPopover>
            </div>

            <nav className="flex-1 flex flex-col gap-4">
                {navItems.map((item, index) => (
                    <button
                        key={index}
                        className={cn(
                            'rounded-[8px] transition-colors relative group w-11 h-11 flex justify-center items-center',
                            item.active
                                ? 'bg-[#F0FDF4] border-[1px] border-[#1E9A80]'
                                : 'bg-transparent hover:bg-gray-50 '
                        )}
                    >
                        <item.icon />

                        <span className="absolute left-10 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                            {item.label}
                        </span>
                    </button>
                ))}
            </nav>

            <div className="flex flex-col gap-6 mt-auto">
                <button className="p-3 text-[#6B7280] hover:bg-gray-50 rounded-[8px] transition-colors">
                    <StarFourIcon />
                </button>
                <button className="relative">
                    <Image
                        src="/images/profile-1.jpg"
                        alt="User"
                        width={44}
                        height={44}
                        className="w-11 h-11 rounded-full object-cover border-[1px] border-transparent hover:border-[#1E9A80] transition-colors"
                    />
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
