import Sidebar from '@/components/Sidebar';
import MessageSidebar from '@/components/MessageSidebar';
import Navbar from '@/components/Navbar';
import ChatWindow from '@/components/ChatWindow';

export default function Home() {
    return (
        <main className="flex h-screen bg-[#F3F3EE] overflow-hidden font-sans rounded-[24px]">
            <Sidebar />
            <div className="flex flex-col flex-1 min-w-0 p-3 gap-3">
                <Navbar />
                <div className="flex flex-1 min-w-0">
                    <MessageSidebar />
                    <ChatWindow />
                </div>
            </div>
        </main>
    );
}
