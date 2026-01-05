'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import MessageSidebar from '@/components/MessageSidebar';
import Navbar from '@/components/Navbar';
import ChatWindow from '@/components/ChatWindow';
import { Chat } from '@/types/chat';

const initialChats: Chat[] = [
    {
        id: 1,
        name: 'Adrian Kurt',
        time: '3 mins ago',
        message: 'Thanks for the explanation!',
        avatar: '/images/profile-1.jpg',
        unread: false,
        active: true,
        status: 'sent',
        hasArchive: true,
    },
    {
        id: 2,
        name: 'Yomi Immanuel',
        time: '12 mins ago',
        message: "Let's do a quick call after lunch, I'll explai...",
        avatar: '/images/profile-1.jpg',
        unread: false,
        active: false,
        status: 'delivered',
    },
    {
        id: 3,
        name: 'Bianca Nubia',
        time: '32 mins ago',
        message: 'anytime! my pleasure~',
        avatar: '/images/profile-1.jpg',
        unread: false,
        active: false,
        status: 'read',
    },
    {
        id: 4,
        name: 'Zender Lowre',
        time: '1 hour ago',
        message: 'Okay cool, that make sense 👍',
        avatar: '/images/profile-1.jpg',
        unread: false,
        active: false,
        status: 'read',
    },
    {
        id: 5,
        name: 'Palmer Dian',
        time: '5 hour ago',
        message: 'Thanks, Jonas! That helps 😁',
        avatar: '/images/profile-1.jpg',
        unread: false,
        active: false,
        status: 'read',
    },
    {
        id: 6,
        name: 'Yuki Tanaka',
        time: '12 hour ago',
        message: 'Have you watch the new season of Danm...',
        avatar: '/images/profile-1.jpg',
        unread: false,
        active: false,
        status: 'read',
    },
];

export default function Home() {
    const [chats, setChats] = useState<Chat[]>(initialChats);
    const [selectedChatId, setSelectedChatId] = useState<number>(1);

    const handleSelectChat = (id: number) => {
        setSelectedChatId(id);
        setChats(prev => prev.map(chat => ({
            ...chat,
            active: chat.id === id
        })));
    };

    const handleUpdateChat = (id: number, updates: Partial<Chat>) => {
        setChats(prev => prev.map(chat => 
            chat.id === id ? { ...chat, ...updates } : chat
        ));
    };

    const selectedChat = chats.find(c => c.id === selectedChatId);

    return (
        <main className="flex h-screen bg-[#F3F3EE] overflow-hidden font-sans rounded-[24px]">
            <Sidebar />
            <div className="flex flex-col flex-1 min-w-0 p-3 gap-3">
                <Navbar />
                <div className="flex flex-1 min-w-0 space-x-3">
                    <MessageSidebar 
                        chats={chats}
                        onSelectChat={handleSelectChat}
                        onUpdateChat={handleUpdateChat}
                    />
                    <ChatWindow chat={selectedChat} />
                </div>
            </div>
        </main>
    );
}
