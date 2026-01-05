'use client';

import React, { useEffect, useRef } from 'react';
import {
    MessageSquare,
    Archive,
    VolumeX,
    UserCircle,
    Share,
    X,
    Trash2,
    ChevronRight,
} from 'lucide-react';
import TaskIcon from './icons/TaskIcon';
import ArchievIcon from './icons/ArchievIcon';
import MuteIcon from './icons/MuteIcon';
import ContactIcon from './icons/ContactIcon';
import ExportIcon from './icons/ExportIcon';
import CloseIcon from './icons/CloseIcon';
import DeleteIcon from './icons/DeleteIcon';

interface ChatContextMenuProps {
    x: number;
    y: number;
    onClose: () => void;
    onAction: (action: string) => void;
}

const ChatContextMenu = ({ x, y, onClose, onAction }: ChatContextMenuProps) => {
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

    const handleAction = (action: string) => {
        onAction(action);
        onClose();
    };

    return (
        <div
            ref={menuRef}
            style={{ top: y, left: x }}
            className="fixed z-50 flex flex-col p-2 space-y-1 bg-white border border-[#E8E5DF] shadow-[0px_0px_24px_rgba(0,0,0,0.06)] rounded-[16px] w-[200px]"
        >
            <button
                onClick={() => handleAction('unread')}
                className="w-full flex items-center gap-2.5 px-2 py-1.5 hover:bg-[#F3F3EE] rounded-[8px] transition-colors text-left group"
            >
                <TaskIcon />
                <span className="text-sm font-medium text-[#111625] leading-5">Mark as unread</span>
            </button>

            <button
                onClick={() => handleAction('archive')}
                className="w-full flex items-center gap-2.5 px-2 py-1.5 hover:bg-[#F3F3EE] rounded-lg transition-colors text-left group"
            >
                <ArchievIcon />
                <span className="text-sm font-medium text-[#111625] leading-5">Archive</span>
            </button>

            <button
                onClick={() => handleAction('mute')}
                className="w-full flex items-center justify-between px-2 py-1.5 hover:bg-[#F3F3EE] rounded-lg transition-colors text-left group"
            >
                <div className="flex items-center gap-3">
                    <MuteIcon />
                    <span className="text-sm font-medium text-[#111625] leading-5">Mute</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#1A1C1E]" />
            </button>

            <button
                onClick={() => handleAction('contact-info')}
                className="w-full flex items-center gap-2.5 px-2 py-1.5 hover:bg-[#F3F3EE] rounded-lg transition-colors text-left group"
            >
                <ContactIcon />
                <span className="text-sm font-medium text-[#111625] leading-5">Contact info</span>
            </button>

            <button
                onClick={() => handleAction('export')}
                className="w-full flex items-center gap-2.5 px-2 py-1.5 hover:bg-[#F3F3EE] rounded-lg transition-colors text-left group"
            >
                <ExportIcon />
                <span className="text-sm font-medium text-[#111625] leading-5">Export chat</span>
            </button>

            <button
                onClick={() => handleAction('clear')}
                className="w-full flex items-center gap-2.5 px-2 py-1.5 hover:bg-[#F3F3EE] rounded-lg transition-colors text-left group"
            >
                <CloseIcon />
                <span className="text-sm font-medium text-[#111625] leading-5">Clear chat</span>
            </button>

            <button
                onClick={() => handleAction('delete')}
                className="w-full flex items-center gap-2.5 px-2 py-1.5 hover:bg-[#F3F3EE] rounded-lg transition-colors text-left group"
            >
                <DeleteIcon />
                <span className="text-sm leading-5 font-medium text-[#DF1C41]">Delete chat</span>
            </button>
        </div>
    );
};

export default ChatContextMenu;
