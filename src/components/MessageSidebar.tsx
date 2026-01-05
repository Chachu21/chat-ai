import { useState } from 'react';
import { Archive, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import SearchIcon from './icons/SearchIcon';
import FilterIcon from './icons/FilterIcon';
import NewMessagePopup from './NewMessagePopup';
import DoubleCheckIcon from './icons/DoubleCheckIcon';
import ChatContextMenu from './ChatContextMenu';
import { Chat } from '@/types/chat';
import { Input } from './ui/input';

interface MessageSidebarProps {
    chats: Chat[];
    onSelectChat: (id: number) => void;
    onUpdateChat: (id: number, updates: Partial<Chat>) => void;
}

const MessageSidebar = ({ chats, onSelectChat, onUpdateChat }: MessageSidebarProps) => {
    const [contextMenu, setContextMenu] = useState<{
        x: number;
        y: number;
        visible: boolean;
        chatId: number | null;
    }>({
        x: 0,
        y: 0,
        visible: false,
        chatId: null,
    });

    const handleContextMenu = (e: React.MouseEvent, chatId: number) => {
        e.preventDefault();
        setContextMenu({
            x: e.clientX,
            y: e.clientY,
            visible: true,
            chatId,
        });
    };

    const handleMenuAction = (action: string) => {
        if (!contextMenu.chatId) return;

        const updates: Partial<Chat> = {};
        if (action === 'archive') {
            const chat = chats.find((c) => c.id === contextMenu.chatId);
            updates.isArchived = !chat?.isArchived;
            updates.unread = false; // reset unread if archiving
        } else if (action === 'unread') {
            const chat = chats.find((c) => c.id === contextMenu.chatId);
            updates.unread = !chat?.unread;
            updates.isArchived = false; // reset archive if marking unread
        } else if (action === 'delete') {
            // In a real app we'd delete, for now just hide or clear visual state
            updates.isArchived = false;
            updates.unread = false;
        }

        onUpdateChat(contextMenu.chatId, updates);
        setContextMenu((prev) => ({ ...prev, visible: false }));
    };

    return (
        <div className="w-100 h-screen bg-white flex flex-col rounded-[24px] p-6 space-y-6 relative">
            {contextMenu.visible && (
                <ChatContextMenu
                    x={contextMenu.x}
                    y={contextMenu.y}
                    onClose={() => setContextMenu({ ...contextMenu, visible: false })}
                    onAction={handleMenuAction}
                />
            )}
            <div className="flex items-center justify-between">
                <h1 className="text-xl leading-7.5 font-semibold text-[#111625]">All Message</h1>
                <div>
                    <NewMessagePopup onSelectChat={onSelectChat} chats={chats}>
                        <button className="bg-[#1E9A80] hover:bg-[#038E6A] text-white h-8  px-2 py-[6px] rounded-[8px] flex items-center gap-[6px] cursor-pointer">
                            <svg
                                width="14"
                                height="13"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.77502 2.02127L10.775 5.02127M9.65002 10.6463H12.65M11.15 9.14627V12.1463M3.65002 12.1463L11.525 4.27131C11.722 4.07433 11.8783 3.84048 11.9849 3.58311C12.0915 3.32574 12.1463 3.04989 12.1463 2.77131C12.1463 2.49274 12.0915 2.21689 11.9849 1.95952C11.8783 1.70215 11.722 1.4683 11.525 1.27131C11.328 1.07433 11.0942 0.918076 10.8368 0.81147C10.5794 0.704864 10.3036 0.649994 10.025 0.649994C9.74645 0.649994 9.4706 0.704864 9.21323 0.81147C8.95586 0.918076 8.72201 1.07433 8.52502 1.27131L0.650024 9.14631V12.1463H3.65002Z"
                                    stroke="white"
                                    strokeWidth="1.3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="text-sm font-medium leading-5"> New Message</span>
                        </button>
                    </NewMessagePopup>
                </div>
            </div>

            <div className="flex gap-3">
                <div className="relative flex-1">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 items-center">
                        <SearchIcon color="#262626" width={16} height={16} />
                    </div>
                    <Input
                        type="text"
                        placeholder="Search in message"
                        className="w-full bg-transparent placeholder:text-[#404040] placeholder:text-sm placeholder:leading-5 h-10 border border-[#E8E5DF] rounded-[10px] py-2.5 pl-10 pr-4 text-sm"
                    />
                </div>
                <button className="p-2.5 rounded-[10px] w-10 h-10 flex justify-center items-center border border-[#E8E5DF] transition-colors">
                    <FilterIcon />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2">
                {chats.map((chat) => (
                    <div
                        key={chat.id}
                        onContextMenu={(e) => handleContextMenu(e, chat.id)}
                        onClick={(e) => {
                            // Always select the chat on left click
                            onSelectChat(chat.id);
                        }}
                        className="relative overflow-hidden rounded-[12px] space-x-2 transition-all cursor-pointer group"
                    >
                        {/* Base Chat Item */}
                        <div
                            className={cn(
                                'p-3 flex items-start gap-3 w-full h-full relative z-10 transition-transform duration-300',
                                chat.active ? 'bg-[#F3F3EE]' : 'bg-white hover:bg-gray-50',
                                // If archived, slide to show right overlay. If unread, slide to show left overlay.
                                chat.isArchived ? '-translate-x-[70px]' : '',
                                chat.unread ? 'translate-x-[70px]' : ''
                            )}
                        >
                            <div className="">
                                <Image
                                    src={chat.avatar}
                                    alt={chat.name}
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                            </div>

                            <div className="flex-1 min-w-0 pr-2 space-y-1">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-semibold text-[#1C1C1C] truncate">
                                        {chat.name}
                                    </h3>
                                    <span className="text-xs leading-4 font-normal text-[#596881] whitespace-nowrap">
                                        {chat.time}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-xs leading-4 font-normal text-[#8B8B8B] truncate">
                                        {chat.message}
                                    </p>
                                    <DoubleCheckIcon />
                                </div>
                            </div>
                        </div>

                        {/* Archived Visual State (Right Side) */}
                        <div
                            className={cn(
                                'absolute inset-y-0 right-0 space-y-2 rounded-[12px] w-16 h-16  bg-[#00A77F] flex flex-col items-center justify-center text-white gap-1 z-0 transition-opacity duration-300',
                                chat.isArchived ? 'opacity-100' : 'opacity-0'
                            )}
                        >
                            <Archive className="w-5 h-5" />
                            <span className="text-xs leading-4 font-medium">Archive</span>
                        </div>

                        {/* Unread Visual State (Left Side) */}
                        <div
                            className={cn(
                                'absolute inset-y-0 space-y-2 left-0 w-16 h-16 bg-[#1E9A80] rounded-[12px] flex flex-col items-center justify-center text-white gap-1 z-0 transition-opacity duration-300',
                                chat.unread ? 'opacity-100' : 'opacity-0'
                            )}
                        >
                            <MessageSquare className="w-5 h-5" />
                            <span className="text-xs leading-4 font-medium">Unread</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MessageSidebar;
