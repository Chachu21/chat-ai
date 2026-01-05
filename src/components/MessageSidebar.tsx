import { useState, useRef, useMemo } from 'react';
import { Archive } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import SearchIcon from './icons/SearchIcon';
import FilterIcon from './icons/FilterIcon';
import NewMessagePopup from './NewMessagePopup';
import DoubleCheckIcon from './icons/DoubleCheckIcon';
import ChatContextMenu from './ChatContextMenu';
import { Chat } from '@/types/chat';
import { Input } from './ui/input';
import TaskIcon from './icons/TaskIcon';

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

    const containerRef = useRef<HTMLDivElement>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleContextMenu = (e: React.MouseEvent, chatId: number) => {
        e.preventDefault();
        e.stopPropagation();
        setContextMenu({
            x: e.clientX,
            y: e.clientY,
            visible: true,
            chatId,
        });
    };

    const toggleContextMenu = (e: React.MouseEvent, chatId: number) => {
        // If menu is already open for this chat, close it
        if (contextMenu.visible && contextMenu.chatId === chatId) {
            setContextMenu({ ...contextMenu, visible: false });
        } else {
            // Get the chat card's position
            const target = e.currentTarget as HTMLElement;
            const rect = target.getBoundingClientRect();
            
            // Position menu to the left of the chat card, accounting for menu width (200px)
            const menuWidth = 200;
            setContextMenu({
                x: rect.right - menuWidth + 70, // Position menu inside the sidebar, 10px from right edge
                y: rect.top + rect.height / 2, // Centered vertically
                visible: true,
                chatId,
            });
        }
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

    // Filter chats based on search query
    const filteredChats = useMemo(() => {
        if (!searchQuery.trim()) {
            return chats;
        }
        const query = searchQuery.toLowerCase();
        return chats.filter(chat => 
            chat.name.toLowerCase().includes(query) || 
            chat.message.toLowerCase().includes(query)
        );
    }, [chats, searchQuery]);

    return (
        <div ref={containerRef} className="w-100 h-screen bg-white flex flex-col rounded-[24px] p-6 space-y-6 relative">
            {contextMenu.visible && (
                <ChatContextMenu
                    x={contextMenu.x}
                    y={contextMenu.y}
                    onClose={() => setContextMenu({ ...contextMenu, visible: false })}
                    onAction={handleMenuAction}
                    containerRef={containerRef}
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
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full text-[#404040] bg-transparent placeholder:text-[#404040] placeholder:text-sm placeholder:leading-5 h-10 border border-[#E8E5DF] rounded-[10px] py-2.5 pl-10 pr-4 text-sm"
                    />
                </div>
                <button className="p-2.5 rounded-[10px] w-10 h-10 flex justify-center items-center border border-[#E8E5DF] transition-colors">
                    <FilterIcon />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2">
                {filteredChats.map((chat) => (
                        <div
                            key={chat.id}
                            onClick={() => {
                                // Single click: close menu if open, then select the chat
                                if (contextMenu.visible) {
                                    setContextMenu({ ...contextMenu, visible: false });
                                }
                                onSelectChat(chat.id);
                            }}
                            onDoubleClick={(e) => {
                                // Double click: toggle context menu
                                toggleContextMenu(e, chat.id);
                            }}
                            onContextMenu={(e) => {
                                // Right click: toggle context menu
                                e.preventDefault();
                                toggleContextMenu(e, chat.id);
                            }}
                            className="transition-all cursor-pointer group flex items-stretch hover:z-10"
                        >
                             {/* Unread Visual State (Left Side) */}
                             <div
                                className={cn(
                                    'bg-[#1E9A80] flex flex-col items-center justify-center text-white gap-1 transition-all duration-300 overflow-hidden rounded-[12px]',
                                )}
                                style={{
                                    width: chat.unread ? '60px' : '0px',
                                    opacity: chat.unread ? 1 : 0,
                                    marginRight: chat.unread ? '8px' : '0px'
                                }}
                            >
                                <TaskIcon color='#FFFFFF' />
                                <span className="text-xs leading-4 font-medium whitespace-nowrap">Unread</span>
                            </div>

                            {/* Base Chat Item */}
                            <div
                                className={cn(
                                    'p-3 flex items-start gap-3 flex-1 min-w-0 transition-all duration-300 rounded-[12px]',
                                    chat.active ? 'bg-[#F3F3EE]' : 'bg-white hover:bg-gray-50'
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
                                    'bg-[#00A77F] flex flex-col items-center justify-center text-white gap-1 transition-all duration-300 overflow-hidden rounded-[12px]',
                                )}
                                style={{
                                    width: chat.isArchived ? '60px' : '0px',
                                    opacity: chat.isArchived ? 1 : 0,
                                    marginLeft: chat.isArchived ? '8px' : '0px'
                                }}
                            >
                                <Archive className="w-4.5 h-4.5 shrink-0" />
                                <span className="text-xs leading-4 font-medium whitespace-nowrap">Archive</span>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    );
};

export default MessageSidebar;
