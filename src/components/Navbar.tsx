'use client';

import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import TaskIcon from './icons/TaskIcon';
import SearchIcon from './icons/SearchIcon';
import { InputGroup, InputGroupAddon, InputGroupInput } from './ui/input-group';
import RingIcon from './icons/RingIcon';
import SettingIcon from './icons/SettingIcon';
import { Separator } from './ui/separator';
import ContactInfo from './ContactInfo';

const Navbar = () => {
    return (
        <header className="h-14 bg-white rounded-3xl py-3 flex items-center justify-between px-6 shrink-0">
            <div className="flex items-center gap-2">
                <TaskIcon />
                <span className="text-sm leading-5 font-medium text-[#111625]">Message</span>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                    <InputGroup className="w-[300px] bg-transparent border border-[#E8E5DF] rounded-[10px] h-8">
                        <InputGroupAddon align="inline-start" className="pl-4 pr-0">
                            <SearchIcon width={14} height={14} color="#8796AF" />
                        </InputGroupAddon>
                        <InputGroupInput
                            type="text"
                            placeholder="Search"
                            className="pl-3 pr-14 text-sm placeholder:text-[#8796AF]"
                        />
                        <InputGroupAddon
                            align="inline-end"
                            className="absolute right-3 py-1 px-[6px] rounded-[6px] bg-[#F3F3EE] text-[#404040]"
                        >
                            ⌘+K
                        </InputGroupAddon>
                    </InputGroup>

                    <button className="rounded-[8px] w-8 h-8 flex justify-center items-center bg-transparent border border-[#E8E5DF] p-2 text-[#6B7280] hover:bg-gray-50 transition-colors">
                        <RingIcon />
                    </button>
                    <button className="rounded-[8px] w-8 h-8 flex justify-center items-center bg-transparent border border-[#E8E5DF] p-2 text-[#6B7280] hover:bg-gray-50 transition-colors">
                        <SettingIcon />
                    </button>
                </div>

                <Separator orientation="vertical" className="!w-0 !h-5 border-l border-[#E8E5DF]" />

                <ContactInfo>
                    <button className="flex items-center gap-2 group cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors">
                        <div className="relative">
                            <Image
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jonas"
                                alt="User"
                                width={32}
                                height={32}
                                className="w-8 h-8 rounded-full object-cover"
                            />
                        </div>
                        <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </button>
                </ContactInfo>
            </div>
        </header>
    );
};

export default Navbar;
