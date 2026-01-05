import React from 'react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Search } from 'lucide-react';
import Image from 'next/image';

interface NewMessagePopupProps {
    children: React.ReactNode;
}

const users = [
    { name: "Adrian Kurt", avatar: "Adrian" },
    { name: "Bianca Lofre", avatar: "Bianca" },
    { name: "Diana Sayu", avatar: "Diana" },
    { name: "Palmer Dian", avatar: "Palmer" },
    { name: "Sam Kohler", avatar: "Sam" },
    { name: "Yuki Tanaka", avatar: "Yuki" },
    { name: "Zender Lowre", avatar: "Zender" },
];

const NewMessagePopup = ({ children }: NewMessagePopupProps) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent
                align="end"
                side="bottom"
                sideOffset={10}
                className="w-[273px] h-[440px] p-3 flex flex-col gap-4 bg-white border border-[#E8E5DF] shadow-[0px_0px_24px_rgba(0,0,0,0.06)] rounded-[16px] overflow-hidden"
            >
                <div>
                     <h3 className="text-base font-semibold text-[#111625] mb-3">New Message</h3>
                     <div className="relative">
                        <input
                            type="text"
                            placeholder="Search name or email"
                            className="w-full h-9 bg-white border border-[#E5E7EB] rounded-lg pl-9 pr-3 text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1E9A80]"
                        />
                        <Search className="w-4 h-4 text-[#9CA3AF] absolute left-3 top-1/2 -translate-y-1/2" />
                     </div>
                </div>

                <div className="flex-1 overflow-y-auto -mx-1 px-1 space-y-1">
                    {users.map((user) => (
                        <button
                            key={user.name}
                            className="w-full flex items-center gap-3 p-2 hover:bg-[#F3F4F6] rounded-xl transition-colors group text-left"
                        >
                            <div className="relative w-8 h-8 shrink-0">
                                <Image
                                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.avatar}`}
                                    alt={user.name}
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <span className="text-sm font-medium text-[#111625] truncate">
                                {user.name}
                            </span>
                        </button>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default NewMessagePopup;
