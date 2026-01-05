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

const ChatWindow = () => {
  return (
    <div className="flex-1 h-[calc(100vh-84px)] bg-[#F8FAF9] flex flex-col m-6 rounded-3xl overflow-hidden border border-[#F1F3F2]">
      {/* Chat Header */}
      <div className="h-[84px] bg-white border-b border-[#F1F3F2] flex items-center justify-between px-8">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Image 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel" 
              alt="Daniel CH" 
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="absolute -right-0.5 -bottom-0.5 w-3.5 h-3.5 bg-[#04A77D] border-2 border-white rounded-full" />
          </div>
          <div>
            <h2 className="text-[16px] font-bold text-[#1A1C1E]">Daniel CH</h2>
            <p className="text-[12px] text-[#04A77D] font-medium">Online</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2.5 text-[#6B7280] hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-[#F1F3F2]">
            <Search className="w-5 h-5" />
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

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-10 py-8 space-y-6">
        <div className="flex justify-center mb-8">
          <div className="bg-white px-4 py-1.5 rounded-full border border-[#F1F3F2]">
            <span className="text-[12px] font-semibold text-[#6B7280]">Today</span>
          </div>
        </div>

        {messages.map((msg) => (
          <div key={msg.id} className={cn("flex flex-col", msg.sender === 'self' ? "items-end" : "items-start")}>
            <div className={cn(
              "max-w-[480px] px-4 py-3 rounded-2xl relative",
              msg.sender === 'self' 
                ? "bg-[#E6F7F3] text-[#1A1C1E] rounded-tr-none" 
                : "bg-white text-[#1A1C1E] rounded-tl-none border border-[#F1F3F2]"
            )}>
              <p className="text-[14px] leading-relaxed">{msg.text}</p>
            </div>
            {msg.showTime && (
                <div className="flex items-center gap-1.5 mt-2">
                    <span className="text-[11px] text-[#6B7280]">{msg.time}</span>
                    {msg.sender === 'self' && msg.status === 'read' && (
                        <CheckCheck className="w-3 h-3 text-[#1E9A80]" />
                    )}
                </div>
            )}
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-6 bg-white border-t border-[#F1F3F2]">
        <div className="bg-[#F8FAF9] rounded-2xl p-2 flex items-center gap-2 border border-transparent focus-within:border-[#1E9A80]/20 focus-within:bg-white transition-all">
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
