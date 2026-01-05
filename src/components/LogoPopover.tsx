'use client';

import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Progress } from '@/components/ui/progress';
import PencileIcon from './icons/PencileIcon';
import GiftIcon from './icons/GiftIcon';
import SunIcon from './icons/SunIcon';
import LogoutIcon from './icons/LogoutIcon';

interface LogoPopoverProps {
    children: React.ReactNode;
}

const LogoPopover = ({ children }: LogoPopoverProps) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <button className="focus:outline-none cursor-pointer">{children}</button>
            </PopoverTrigger>
            <PopoverContent
                align="start"
                side="bottom"
                sideOffset={5}
                className="w-76.75 p-1 rounded-3xl shadow-xl border-[#F1F3F2]"
            >
                <div className="flex flex-col gap-1">
                    {/* Top Actions */}
                    <div className="space-y-1">
                        <button className="w-full flex items-center gap-2 p-[6px] transition-colors text-left group cursor-pointer">
                            <div className="w-7 h-7 flex items-center justify-center bg-[#F3F3EE] rounded-[6px]">
                                <ChevronLeft className="w-4 h-4 text-[#09090B]" />
                            </div>
                            <span className="text-sm leading-5 font-semibold text-[#09090B]">
                                Go back to dashboard
                            </span>
                        </button>
                        <div className="pl-1 pr-2">
                            <button className="w-full flex items-center gap-2 p-[6px] bg-[#F8F8F5] rounded-[8px] text-left group transition-colors">
                                <div className="w-7 h-7 flex items-center justify-center bg-white rounded-[6px]">
                                    <PencileIcon />
                                </div>
                                <span className="text-sm leading-5 font-semibold text-[#09090B]">
                                    Rename file
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="h-[0px] mx-2.5 border border-[#E8E5DF]" />

                    {/* Profile Section */}
                    <div className="p-2 space-y-0.5">
                        <h3 className="text-sm leading-5 font-semibold text-[#1C1C1C]">testing2</h3>
                        <p className="text-xs leading-[150%] font-normal text-[#8B8B8B]">
                            testing2@gmail.com
                        </p>
                    </div>

                    {/* Credits Card */}
                    <div className="bg-[#F8F8F5] rounded-[8px] mx-2.5 border border-[#F1F3F2]">
                        <div className="p-2 space-y-2">
                            <div className="space-y-0.5">
                                <div className="flex justify-between items-baseline">
                                    <span className="text-[12px] text-[#8B8B8B] leading-4.5">
                                        Credits
                                    </span>
                                    <span className="text-[12px] text-[#8B8B8B] leading-4.5">
                                        Renews in
                                    </span>
                                </div>
                                <div className="flex justify-between items-baseline">
                                    <span className="text-sm leading-5 font-medium text-[#09090B]">
                                        20 left
                                    </span>
                                    <span className="text-sm leading-5 font-medium text-[#09090B]">
                                        6h 24m
                                    </span>
                                </div>
                            </div>

                            <Progress value={50} className="h-2 rounded-[4px] bg-[#E8E5DF]" />

                            <div className="flex justify-between items-center text-[12px]">
                                <span className="text-[#5F5F5D] text-xs leading-5 font-normal">
                                    5 of 25 used today
                                </span>
                                <span className="text-[#1E9A80] font-normal text-xs leading-4.5">
                                    +25 tomorrow
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="h-[0px] mx-2.5 border border-[#E8E5DF]" />

                    {/* Bottom Actions */}
                    <div className="space-y-1 px-1">
                        <button className="w-full flex items-center gap-2 p-[6px] transition-colors text-left group cursor-pointer">
                            <div className="w-7 h-7 flex items-center justify-center bg-[#F3F3EE] rounded-[6px]">
                                <GiftIcon />
                            </div>
                            <span className="text-sm leading-5 font-medium text-[#1C1C1C]">
                                Win free credits
                            </span>
                        </button>
                        <button className="w-full flex items-center gap-2 p-[6px] transition-colors text-left group cursor-pointer">
                            <div className="w-7 h-7 flex items-center justify-center bg-[#F3F3EE] rounded-[6px]">
                                <SunIcon />
                            </div>
                            <span className="text-sm leading-5 font-medium text-[#1C1C1C]">
                                Theme Style
                            </span>
                        </button>
                    </div>

                    <div className="h-[0px] mx-2.5 border border-[#E8E5DF]" />

                    <button className="w-full flex items-center gap-3 p-2 hover:bg-gray-50 rounded-xl transition-colors text-left group">
                        <div className="w-7 h-7 flex items-center justify-center bg-[#F3F3EE] rounded-[6px]">
                            <LogoutIcon />
                        </div>
                        <span className="text-sm leading-5 font-medium text-[#1C1C1C]">
                            Log out
                        </span>
                    </button>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default LogoPopover;
