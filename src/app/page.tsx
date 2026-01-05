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
        messages: [
            { id: 1, text: 'Hey, Dan', time: '10:17 AM', sender: 'other' },
            { id: 2, text: 'Can you help with the last task on basecamp, please?', time: '10:17 AM', sender: 'other' },
            { id: 3, text: "I'm little bit confused with the task.. 😬", time: '10:17 AM', sender: 'other', showTime: true },
            { id: 4, text: "it's done already, no worries!", time: '10:22 AM', sender: 'self', status: 'read', showTime: true },
            { id: 5, text: 'what...', time: '10:32 AM', sender: 'other' },
            { id: 6, text: 'Really?! Thank you so much! 🤩', time: '10:32 AM', sender: 'other', showTime: true },
            { id: 7, text: 'Thanks for the explanation!', time: '11:01 AM', sender: 'self', status: 'read', showTime: true },
        ],
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
        messages: [
            { id: 1, text: 'Hey Yomi!', time: '9:00 AM', sender: 'self', status: 'read', showTime: true },
            { id: 2, text: "Let's do a quick call after lunch, I'll explain everything.", time: '9:15 AM', sender: 'other', showTime: true },
        ],
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
        messages: [
            { id: 1, text: 'Thanks for your help!', time: '8:30 AM', sender: 'other', showTime: true },
            { id: 2, text: 'anytime! my pleasure~', time: '8:45 AM', sender: 'self', status: 'read', showTime: true },
        ],
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
        messages: [
            { id: 1, text: 'Okay cool, that make sense 👍', time: '7:00 AM', sender: 'other', showTime: true },
        ],
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
        messages: [
            { id: 1, text: 'Thanks, Jonas! That helps 😁', time: 'Yesterday', sender: 'other', showTime: true },
        ],
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
        messages: [
            { id: 1, text: 'Have you watched the new season of Demon Slayer?', time: 'Yesterday', sender: 'other', showTime: true },
        ],
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

    const handleSendMessage = (chatId: number, text: string) => {
        setChats(prev => prev.map(chat => {
            if (chat.id === chatId) {
                const newMessage = {
                    id: chat.messages.length + 1,
                    text,
                    time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
                    sender: 'self' as const,
                    status: 'sent' as const,
                    showTime: true,
                };
                return {
                    ...chat,
                    messages: [...chat.messages, newMessage],
                    message: text,
                    time: 'Just now',
                };
            }
            return chat;
        }));
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
                    <ChatWindow chat={selectedChat} onSendMessage={handleSendMessage} />
                </div>
            </div>
        </main>
    );
}
