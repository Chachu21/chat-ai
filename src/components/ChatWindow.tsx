import React from 'react';
import { Search, Phone, Video, MoreHorizontal, Mic, Smile, Paperclip, SendHorizontal, CheckCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const messages = [
  {
    id: 1,
    text: "Hey, Dan",
    time: "10:17 AM",
    sender: "other",
  },
  {
    id: 2,
    text: "Can you help with with the last task on basecamp, please?",
    time: "10:17 AM",
    sender: "other",
  },
  {
    id: 3,
    text: "I'm little bit confused with the task.. 😬",
    time: "10:17 AM",
    sender: "other",
    showTime: true
  },
  {
    id: 4,
    text: "it's done already, no worries!",
    time: "10:22 AM",
    sender: "self",
    status: "read",
    showTime: true
  },
  {
      id: 5,
      text: "what...",
      time: "10:32 AM",
      sender: "other"
  },
  {
      id: 6,
      text: "Really?! Thank you so much! 🤩",
      time: "10:32 AM",
      sender: "other",
      showTime: true
  },
  {
      id: 7,
      text: "anytime! my pleasure~",
      time: "11:01 AM",
      sender: "self",
      status: "read",
      showTime: true
  }
];

import { Chat } from '@/types/chat';
import DoubleCheckIcon from './icons/DoubleCheckIcon';
import SearchIcon from './icons/SearchIcon';

interface ChatWindowProps {
    chat?: Chat;
}

const ChatWindow = ({ chat }: ChatWindowProps) => {
    if (!chat) {
        return (
            <div className="flex-1 h-[calc(100vh-84px)] bg-[#F8FAF9] flex items-center justify-center rounded-3xl border border-[#F1F3F2]">
                <p className="text-gray-500">Select a chat to start messaging</p>
            </div>
        );
    }

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
                    <button className="p-2.5 hover:bg-gray-50 rounded-lg transition-colors border border-[#E8E5DF]">
                        <SearchIcon width={16} height={16} color='#262626'/>
                    </button>
                    <button className="p-2.5 text-[#6B7280] hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-[#F1F3F2]">
                        <Phone className="w-5 h-5" />
                    </button>
                    <button className="p-2.5 text-[#6B7280] hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-[#F1F3F2]">
                        <Video className="w-5 h-5" />
                    </button>
                    <button className="p-2.5 text-[#6B7280] hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-[#F1F3F2]">
                        <MoreHorizontal className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Chat Messages - Currently using static messages, but we could filter by chat ID if we had message history per chat */}
            <div className="flex-1 rounded-[16px] bg-[#F3F3EE] overflow-y-auto px-10 pt-8 pb-3">
                <div className="flex justify-center mb-8">
                    <div className="bg-white px-4 py-1.5 rounded-full border border-[#F1F3F2]">
                        <span className="text-[12px] font-semibold text-[#6B7280]">Today</span>
                    </div>
                </div>

                {messages.map((msg, index) => {
                    const isSameTime = index > 0 && messages[index - 1].time === msg.time;
                    
                    return (
                        <div
                            key={msg.id}
                            className={cn(
                                'flex flex-col space-y-1',
                                msg.sender === 'self' ? 'items-end' : 'items-start',
                                index === 0 ? '' : (isSameTime ? 'mt-1' : 'mt-3')
                            )}
                        >
                            <div
                                className={cn(
                                    'max-w-[480px] p-3 rounded-xl relative',
                                    msg.sender === 'self'
                                        ? 'bg-[#F0FDF4] text-[#1A1C1E] '
                                        : 'bg-white text-[#1A1C1E] '
                                )}
                            >
                                <p className="text-[14px] leading-relaxed">{msg.text}</p>
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

            {/* Message Input */}
            <div className="">
                <div className="bg-[#F8FAF9] rounded-2xl p-2 flex items-center gap-2 border border-[#E8E5DF] focus-within:border-[#1E9A80]/20 focus-within:bg-white transition-all">
                    <button className="p-2.5 text-[#6B7280] hover:bg-gray-100 rounded-xl transition-colors shrink-0">
                        <Mic className="w-5 h-5" />
                    </button>
                    <input
                        type="text"
                        placeholder="Type any message..."
                        className="flex-1 bg-transparent border-none py-2 text-sm focus:ring-0 placeholder:text-gray-400"
                    />
                    <div className="flex items-center gap-1 border-l border-gray-200 pl-2 shrink-0">
                        <button className="p-2.5 text-[#6B7280] hover:bg-gray-100 rounded-xl transition-colors">
                            <Smile className="w-5 h-5" />
                        </button>
                        <button className="p-2.5 text-[#6B7280] hover:bg-gray-100 rounded-xl transition-colors">
                            <Paperclip className="w-5 h-5" />
                        </button>
                        <button className="p-2.5 bg-[#04A77D] text-white rounded-xl hover:bg-[#038E6A] transition-all flex items-center justify-center ml-1">
                            <SendHorizontal className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatWindow;
