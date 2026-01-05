import React, { useState } from 'react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Search } from 'lucide-react';
import Image from 'next/image';
import { Chat } from '@/types/chat';

interface NewMessagePopupProps {
    children: React.ReactNode;
    chats: Chat[];
    onSelectChat: (id: number) => void;
}

const NewMessagePopup = ({ children, chats, onSelectChat }: NewMessagePopupProps) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [open, setOpen] = useState(false);

    const filteredChats = chats.filter(chat => 
        chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        chat.message.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSelect = (id: number) => {
        onSelectChat(id);
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
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
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full h-9 bg-white border border-[#E5E7EB] rounded-lg pl-9 pr-3 text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1E9A80]"
                        />
                        <Search className="w-4 h-4 text-[#9CA3AF] absolute left-3 top-1/2 -translate-y-1/2" />
                     </div>
                </div>

                <div className="flex-1 overflow-y-auto -mx-1 px-1 space-y-1">
                    {filteredChats.length > 0 ? (
                        filteredChats.map((chat) => (
                            <button
                                key={chat.id}
                                onClick={() => handleSelect(chat.id)}
                                className="w-full flex items-center gap-3 p-2 hover:bg-[#F3F4F6] rounded-xl transition-colors group text-left"
                            >
                                <div className="relative w-8 h-8 shrink-0">
                                    <Image
                                        src={chat.avatar}
                                        alt={chat.name}
                                        fill
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <span className="text-sm font-medium text-[#111625] truncate block">
                                        {chat.name}
                                    </span>
                                    <span className="text-xs text-[#6B7280] truncate block">
                                        {chat.message}
                                    </span>
                                </div>
                            </button>
                        ))
                    ) : (
                        <div className="flex items-center justify-center p-4">
                            <span className="text-sm text-[#9CA3AF]">No users found</span>
                        </div>
                    )}
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default NewMessagePopup;
