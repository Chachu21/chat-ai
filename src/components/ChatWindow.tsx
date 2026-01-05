import { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import {
    InputGroup,
    InputGroupInput,
  } from "@/components/ui/input-group"
  

import { Chat } from '@/types/chat';
import DoubleCheckIcon from './icons/DoubleCheckIcon';
import SearchIcon from './icons/SearchIcon';
import PhoneIcon from './icons/PhoneIcon';
import VideoIcon from './icons/VideoIcon';
import MicIcon from './icons/MicIcon';
import MoodIcon from './icons/MoodIcon';
import AttachementIcon from './icons/AttachementIcon';
import SendIcon from './icons/SendIcon';

interface ChatWindowProps {
    chat?: Chat;
    onSendMessage?: (chatId: number, text: string) => void;
}

const ChatWindow = ({ chat, onSendMessage }: ChatWindowProps) => {
    const [messageInput, setMessageInput] = useState('');
    if (!chat) {
        return (
            <div className="flex-1 h-[calc(100vh-84px)] bg-[#F8FAF9] flex items-center justify-center rounded-3xl border border-[#F1F3F2]">
                <p className="text-gray-500">Select a chat to start messaging</p>
            </div>
        );
    }

    const handleSend = () => {
        if (messageInput.trim() && onSendMessage) {
            onSendMessage(chat.id, messageInput.trim());
            setMessageInput('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="flex-1 h-[calc(100vh-84px)] bg-white flex flex-col rounded-[24px] p-3 overflow-hidden border border-[#F1F3F2]">
            {/* Chat Header */}
            <div className="bg-white px-1 pt-1 pb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Image
                            src={chat.avatar}
                            alt={chat.name}
                            width={48}
                            height={48}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                    </div>
                    <div className="space-y-1">
                        <h2 className="text-sm leading-5 font-medium text-[#111625]">
                            {chat.name}
                        </h2>
                        <p className="text-[12px] leading-4 text-[#38C793] font-medium">Online</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button className="w-8 h-8 flex justify-center items-center rounded-[8px] border border-[#E8E5DF]">
                        <SearchIcon width={16} height={16} color="#262626" />
                    </button>
                    <button className="w-8 h-8 flex justify-center items-center rounded-[8px] border border-[#E8E5DF]">
                        <PhoneIcon />
                    </button>
                    <button className="w-8 h-8 flex justify-center items-center rounded-[8px] border border-[#E8E5DF]">
                        <VideoIcon />
                    </button>
                    <button className="w-8 h-8 flex justify-center items-center rounded-[8px] border border-[#E8E5DF]">
                        <MoreHorizontal className="w-4 h-4 text-[#262626]" />
                    </button>
                </div>
            </div>

            {/* Chat Messages - Currently using static messages, but we could filter by chat ID if we had message history per chat */}
            <div className="flex-1 rounded-[16px] bg-[#F3F3EE] overflow-y-auto p-3">
                <div className="min-h-full flex flex-col justify-end">
                    <div className="flex justify-center mb-8">
                        <div className="bg-white px-3 py-1 rounded-full">
                            <span className="text-[14px] font-medium text-[#596881]">Today</span>
                        </div>
                    </div>

                    {chat.messages.map((msg, index) => {
                        const isSameTime = index > 0 && chat.messages[index - 1].time === msg.time;

                        return (
                            <div
                                key={msg.id}
                                className={cn(
                                    'flex flex-col space-y-1',
                                    msg.sender === 'self' ? 'items-end' : 'items-start',
                                    index === 0 ? '' : isSameTime ? 'mt-1' : 'mt-3'
                                )}
                            >
                                <div
                                    className={cn(
                                        'max-w-[480px] p-3 rounded-xl relative',
                                        msg.sender === 'self'
                                            ? 'bg-[#F0FDF4] text-[#111625] '
                                            : 'bg-white text-[#1C1C1C]'
                                    )}
                                >
                                    <p className="text-xs leading-4 font-normal">{msg.text}</p>
                                </div>
                                {msg.showTime && (
                                    <div className="flex items-center gap-1.5 py-1">
                                        {msg.sender === 'self' && msg.status === 'read' && (
                                            <DoubleCheckIcon color="#1E9A80" />
                                        )}
                                        <span className="text-xs leading-4 font-normal text-[#8B8B8B]">
                                            {msg.time}
                                        </span>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Message Input */}
            <div className="mt-3 bg-white ">
                <InputGroup className="bg-[#F8FAF9] rounded-2xl p-2 flex items-center gap-2 border border-[#E8E5DF] focus-within:border-[#1E9A80]/20 focus-within:bg-white transition-all h-10 shadow-none">
                    <InputGroupInput
                        placeholder="Type any message..."
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="flex-1 bg-transparent border-none py-2 text-sm focus:ring-0 placeholder:text-[#8796AF] h-auto focus-visible:ring-0 shadow-none text-[#1A1C1E]"
                    />
                    <div className="flex items-center gap-1 py-1">
                        <button className="p-[5px] text-[#6B7280] hover:bg-gray-100 rounded-xl transition-colors shrink-0 cursor-pointer">
                            <MicIcon />
                        </button>
                        <button className="p-[5px] text-[#6B7280] hover:bg-gray-100 rounded-xl transition-colors cursor-pointer">
                            <MoodIcon />
                        </button>
                        <button className="p-[5px] text-[#6B7280] hover:bg-gray-100 rounded-xl transition-colors cursor-pointer">
                            <AttachementIcon />
                        </button>
                        <button 
                            onClick={handleSend}
                            className="p-[5px] h-8 w-8 bg-[#04A77D] text-white rounded-xl hover:bg-[#038E6A] transition-all flex items-center justify-center ml-1 cursor-pointer"
                        >
                            <SendIcon />
                        </button>
                    </div>
                </InputGroup>
            </div>
        </div>
    );
};

export default ChatWindow;
