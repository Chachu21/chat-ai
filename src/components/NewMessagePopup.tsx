import React, { useState } from 'react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Search } from 'lucide-react';
import Image from 'next/image';
import { Chat } from '@/types/chat';
import { Input } from './ui/input';

interface NewMessagePopupProps {
    children: React.ReactNode;
    chats: Chat[];
    onSelectChat: (id: number) => void;
}

const NewMessagePopup = ({ children, chats, onSelectChat }: NewMessagePopupProps) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [open, setOpen] = useState(false);

    const filteredChats = chats.filter(
        (chat) =>
            chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            chat.message.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSelect = (id: number) => {
        onSelectChat(id);
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>{children}</PopoverTrigger>
            <PopoverContent
                align="end"
                side="bottom"
                sideOffset={10}
                className="w-[273px] h-[440px] p-3 flex flex-col gap-4 bg-white border border-[#E8E5DF] shadow-[0px_0px_24px_rgba(0,0,0,0.06)] rounded-[16px] overflow-hidden"
            >
                <div className="space-y-4">
                    <h3 className="text-base font-semibold text-[#111625]">New Message</h3>
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Search name or email"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full h-8 bg-white border border-[#E5E7EB] rounded-[10px] pl-8 pr-3 text-sm placeholder:text-[#8B8B8B] placeholder:text-xs placeholder:text-leading-4"
                        />
                        <Search className="w-4 h-4 text-[#9CA3AF] absolute left-2 top-1/2 -translate-y-1/2" />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto -mx-1 px-1 space-y-1">
                    {filteredChats.length > 0 ? (
                        filteredChats.map((chat) => (
                            <button
                                key={chat.id}
                                onClick={() => handleSelect(chat.id)}
                                className="w-full flex items-center gap-2.5 px-2 py-1.5 hover:bg-[#F3F3EE] rounded-[8px] transition-colors group text-left"
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
