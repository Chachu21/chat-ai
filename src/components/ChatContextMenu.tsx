import React, { useEffect, useRef } from 'react';
import {
    MessageSquare,
    Archive,
    VolumeX,
    UserCircle,
    Share,
    X,
    Trash2,
    ChevronRight
} from 'lucide-react';

interface ChatContextMenuProps {
    x: number;
    y: number;
    onClose: () => void;
}

const ChatContextMenu = ({ x, y, onClose }: ChatContextMenuProps) => {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div
            ref={menuRef}
            style={{ top: y, left: x }}
            className="fixed z-50 flex flex-col p-2 bg-white border border-[#E8E5DF] shadow-[0px_0px_24px_rgba(0,0,0,0.06)] rounded-[16px] w-[200px]"
        >
            <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-[#F3F4F6] rounded-lg transition-colors text-left group">
                <MessageSquare className="w-4 h-4 text-[#1A1C1E]" />
                <span className="text-sm font-medium text-[#1A1C1E]">Mark as unread</span>
            </button>

            <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-[#F3F4F6] rounded-lg transition-colors text-left group">
                <Archive className="w-4 h-4 text-[#1A1C1E]" />
                <span className="text-sm font-medium text-[#1A1C1E]">Archive</span>
            </button>

            <button className="w-full flex items-center justify-between px-3 py-2.5 hover:bg-[#F3F4F6] rounded-lg transition-colors text-left group">
                <div className="flex items-center gap-3">
                    <VolumeX className="w-4 h-4 text-[#1A1C1E]" />
                    <span className="text-sm font-medium text-[#1A1C1E]">Mute</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#1A1C1E]" />
            </button>

            <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-[#F3F4F6] rounded-lg transition-colors text-left group">
                <UserCircle className="w-4 h-4 text-[#1A1C1E]" />
                <span className="text-sm font-medium text-[#1A1C1E]">Contact info</span>
            </button>

            <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-[#F3F4F6] rounded-lg transition-colors text-left group">
                <Share className="w-4 h-4 text-[#1A1C1E]" />
                <span className="text-sm font-medium text-[#1A1C1E]">Export chat</span>
            </button>

            <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-[#F3F4F6] rounded-lg transition-colors text-left group">
                <X className="w-4 h-4 text-[#1A1C1E]" />
                <span className="text-sm font-medium text-[#1A1C1E]">Clear chat</span>
            </button>

            <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-[#F3F4F6] rounded-lg transition-colors text-left group">
                <Trash2 className="w-4 h-4 text-[#FF4766]" />
                <span className="text-sm font-medium text-[#FF4766]">Delete chat</span>
            </button>
        </div>
    );
};

export default ChatContextMenu;
