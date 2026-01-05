import { Check, CheckCheck, Folder } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import SearchIcon from './icons/SearchIcon';
import FilterIcon from './icons/FilterIcon';
import NewMessagePopup from './NewMessagePopup';
import DoubleCheckIcon from './icons/DoubleCheckIcon';

const messages = [
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

const MessageSidebar = () => {
    return (
        <div className="w-100 h-screen bg-white flex flex-col rounded-[24px] p-6 space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-xl leading-7.5 font-semibold text-[#111625]">All Message</h1>
                <div>
                    <NewMessagePopup>
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
                    <input
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
                {messages.map((chat) => (
                    <div
                        key={chat.id}
                        className={cn(
                            'group rounded-[12px] p-3 flex items-start gap-3 cursor-pointer transition-all relative',
                            chat.active ? 'bg-[#F8FAF9]' : 'hover:bg-gray-50'
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
                                <h3 className="text-smxx` font-semibold text-[#1C1C1C] truncate">
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

                        {chat.hasArchive && (
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-[#04A77D] text-white p-2 rounded-lg flex flex-col items-center gap-1 transition-opacity">
                                <Folder className="w-4 h-4" />
                                <span className="text-[10px]">Archive</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MessageSidebar;
