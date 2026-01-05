import React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Video, X } from 'lucide-react';
import Image from 'next/image';

interface ContactInfoProps {
    children: React.ReactNode;
}

const ContactInfo = ({ children }: ContactInfoProps) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                {children}
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px] p-0 overflow-y-auto bg-white shadow-[0px_4px_32px_0px_#0000001F] !m-3 !h-[calc(100vh-24px)] rounded-[24px] border border-[#F1F3F2]">
                <SheetHeader className="p-6 pb-2 space-y-4">
                     <div className="flex items-center justify-between">
                        <SheetTitle className="text-xl font-bold text-[#1A1C1E]">Contact Info</SheetTitle>
                        {/* Custom Close Button if needed, or rely on Sheet's default */}
                        <SheetClose asChild>
                            <button className="rounded-[8px] w-8 h-8 flex justify-center items-center bg-transparent p-2 text-[#6B7280] hover:bg-gray-50 transition-colors">
                                <X />
                            </button>
                        </SheetClose>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                         <div className="relative w-24 h-24">
                            <Image
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel"
                                alt="Daniel CH"
                                fill
                                className="rounded-full object-cover"
                            />
                        </div>
                        <div className="text-center">
                            <h2 className="text-lg font-bold text-[#1A1C1E]">Daniel CH</h2>
                            <p className="text-sm text-[#6B7280]">Dnielch@shipz.com</p>
                        </div>
                    </div>

                    <div className="flex gap-4 w-full">
                        <button className="flex-1 flex items-center justify-center gap-2 h-10 border border-[#E5E7EB] rounded-lg text-[#1A1C1E] font-medium hover:bg-gray-50 transition-colors">
                            <Phone className="w-4 h-4" />
                            Audio
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 h-10 border border-[#E5E7EB] rounded-lg text-[#1A1C1E] font-medium hover:bg-gray-50 transition-colors">
                            <Video className="w-4 h-4" />
                            Video
                        </button>
                    </div>
                </SheetHeader>

                <div className="px-6">
                    <Tabs defaultValue="docs" className="w-full">
                        <TabsList className="w-auto h-auto p-1 bg-[#F3F4F6] rounded-lg mb-6 gap-1 inline-flex">
                             <TabsTrigger 
                                value="media"
                                className="px-4 py-1.5 rounded-md text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-[#1A1C1E] data-[state=active]:shadow-sm text-[#6B7280]"
                            >
                                Media
                            </TabsTrigger>
                            <TabsTrigger 
                                value="link"
                                className="px-4 py-1.5 rounded-md text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-[#1A1C1E] data-[state=active]:shadow-sm text-[#6B7280]"
                            >
                                Link
                            </TabsTrigger>
                             <TabsTrigger 
                                value="docs"
                                className="px-4 py-1.5 rounded-md text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-[#1A1C1E] data-[state=active]:shadow-sm text-[#6B7280]"
                            >
                                Docs
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="link" className="space-y-6">
                            <div>
                                <h3 className="text-xs font-medium text-[#9CA3AF] uppercase mb-3">May</h3>
                                <div className="space-y-4">
                                     <a href="#" className="flex gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-[#1A1C1E] flex items-center justify-center shrink-0">
                                            <div className="w-5 h-5 rounded-full bg-white/20" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-medium text-[#1A1C1E] mb-0.5 truncate group-hover:text-[#1E9A80] transition-colors">https://basecamp.net/</h4>
                                            <p className="text-xs text-[#6B7280] line-clamp-2">Discover thousands of premium UI kits, templates, and design resources tailored for designers, developers, and...</p>
                                        </div>
                                    </a>

                                    <a href="#" className="flex gap-4 group">
                                         <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0">
                                            <span className="font-bold text-lg text-[#1A1C1E]">N</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-medium text-[#1A1C1E] mb-0.5 truncate group-hover:text-[#1E9A80] transition-colors">https://notion.com/</h4>
                                            <p className="text-xs text-[#6B7280] line-clamp-2">A new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.</p>
                                        </div>
                                    </a>

                                     <a href="#" className="flex gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-[#FF4766] flex items-center justify-center shrink-0">
                                            <div className="flex gap-0.5">
                                                 <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                                 <div className="w-1.5 h-1.5 bg-white rounded-full mt-2" />
                                                 <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-medium text-[#1A1C1E] mb-0.5 truncate group-hover:text-[#1E9A80] transition-colors">https://asana.com/</h4>
                                            <p className="text-xs text-[#6B7280] line-clamp-2">Work anytime, anywhere with Asana. Keep remote and distributed teams, and your entire organization, focused...</p>
                                        </div>
                                    </a>

                                    <a href="#" className="flex gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-[#0079BF] flex items-center justify-center shrink-0">
                                            <div className="flex gap-1">
                                                <div className="w-2 h-4 bg-white/40 rounded-sm" />
                                                <div className="w-2 h-3 bg-white/40 rounded-sm" />
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-medium text-[#1A1C1E] mb-0.5 truncate group-hover:text-[#1E9A80] transition-colors">https://trello.com/</h4>
                                            <p className="text-xs text-[#6B7280] line-clamp-2">Make the impossible, possible with Trello. The ultimate teamwork project management tool. Start up board in se...</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="media">
                             <div className="grid grid-cols-3 gap-2">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div key={i} className="aspect-square bg-gray-100 rounded-lg relative overflow-hidden">
                                        <Image
                                            src={`https://picsum.photos/200?random=${i}`}
                                            alt="Media"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                             </div>
                        </TabsContent>

                         <TabsContent value="docs" className="space-y-6">
                            <div>
                                <h3 className="text-xs font-medium text-[#9CA3AF] uppercase mb-3">May</h3>
                                <div className="space-y-4">
                                     {/* PDF Item */}
                                     <div className="flex gap-4 group cursor-pointer">
                                        <div className="w-12 h-12 rounded-xl bg-[#F8F8F5] flex items-center justify-center shrink-0 border border-[#E8E5DF] relative">
                                             <div className="w-6 h-8 bg-white border border-[#E8E5DF] rounded-[4px] relative flex flex-col items-center justify-center shadow-sm">
                                                 <div className="absolute -top-[1px] -right-[1px] w-2 h-2 bg-[#F8F8F5] border-b border-l border-[#E8E5DF] rounded-bl-[4px]" />
                                                 <div className="w-full text-[6px] font-bold text-center text-[#FF4766] mt-2">PDF</div>
                                             </div>
                                        </div>
                                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                                            <h4 className="text-sm font-medium text-[#1A1C1E] mb-0.5 truncate group-hover:text-[#1E9A80] transition-colors">Document Requirement.pdf</h4>
                                            <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                                                <span>10 pages</span>
                                                <span className="w-1 h-1 rounded-full bg-[#D1D5DB]" />
                                                <span>16 MB</span>
                                                <span className="w-1 h-1 rounded-full bg-[#D1D5DB]" />
                                                <span className="uppercase">pdf</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* PDF Item 2 */}
                                     <div className="flex gap-4 group cursor-pointer">
                                        <div className="w-12 h-12 rounded-xl bg-[#F8F8F5] flex items-center justify-center shrink-0 border border-[#E8E5DF] relative">
                                             <div className="w-6 h-8 bg-white border border-[#E8E5DF] rounded-[4px] relative flex flex-col items-center justify-center shadow-sm">
                                                 <div className="absolute -top-[1px] -right-[1px] w-2 h-2 bg-[#F8F8F5] border-b border-l border-[#E8E5DF] rounded-bl-[4px]" />
                                                 <div className="w-full text-[6px] font-bold text-center text-[#FF4766] mt-2">PDF</div>
                                             </div>
                                        </div>
                                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                                            <h4 className="text-sm font-medium text-[#1A1C1E] mb-0.5 truncate group-hover:text-[#1E9A80] transition-colors">User Flow.pdf</h4>
                                            <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                                                <span>7 pages</span>
                                                <span className="w-1 h-1 rounded-full bg-[#D1D5DB]" />
                                                <span>32 MB</span>
                                                <span className="w-1 h-1 rounded-full bg-[#D1D5DB]" />
                                                <span className="uppercase">pdf</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Figma Item */}
                                     <div className="flex gap-4 group cursor-pointer">
                                        <div className="w-12 h-12 rounded-xl bg-[#F8F8F5] flex items-center justify-center shrink-0 border border-[#E8E5DF] relative">
                                             <div className="w-6 h-8 bg-white border border-[#E8E5DF] rounded-[4px] relative flex flex-col items-center justify-center shadow-sm">
                                                 <div className="absolute -top-[1px] -right-[1px] w-2 h-2 bg-[#F8F8F5] border-b border-l border-[#E8E5DF] rounded-bl-[4px]" />
                                                 <div className="w-full text-[6px] font-bold text-center text-[#A259FF] mt-2">FIG</div>
                                             </div>
                                        </div>
                                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                                            <h4 className="text-sm font-medium text-[#1A1C1E] mb-0.5 truncate group-hover:text-[#1E9A80] transition-colors">Existing App.fig</h4>
                                            <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                                                <span>213 MB</span>
                                                <span className="w-1 h-1 rounded-full bg-[#D1D5DB]" />
                                                <span className="uppercase">fig</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* AI Item */}
                                     <div className="flex gap-4 group cursor-pointer">
                                        <div className="w-12 h-12 rounded-xl bg-[#F8F8F5] flex items-center justify-center shrink-0 border border-[#E8E5DF] relative">
                                             <div className="w-6 h-8 bg-white border border-[#E8E5DF] rounded-[4px] relative flex flex-col items-center justify-center shadow-sm">
                                                 <div className="absolute -top-[1px] -right-[1px] w-2 h-2 bg-[#F8F8F5] border-b border-l border-[#E8E5DF] rounded-bl-[4px]" />
                                                 <div className="w-full text-[6px] font-bold text-center text-[#FF7A00] mt-2">AI</div>
                                             </div>
                                        </div>
                                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                                            <h4 className="text-sm font-medium text-[#1A1C1E] mb-0.5 truncate group-hover:text-[#1E9A80] transition-colors">Product Illustrations.ai</h4>
                                            <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                                                <span>72 MB</span>
                                                <span className="w-1 h-1 rounded-full bg-[#D1D5DB]" />
                                                <span className="uppercase">ai</span>
                                            </div>
                                        </div>
                                    </div>

                                     {/* PDF Item 3 */}
                                     <div className="flex gap-4 group cursor-pointer">
                                        <div className="w-12 h-12 rounded-xl bg-[#F8F8F5] flex items-center justify-center shrink-0 border border-[#E8E5DF] relative">
                                             <div className="w-6 h-8 bg-white border border-[#E8E5DF] rounded-[4px] relative flex flex-col items-center justify-center shadow-sm">
                                                 <div className="absolute -top-[1px] -right-[1px] w-2 h-2 bg-[#F8F8F5] border-b border-l border-[#E8E5DF] rounded-bl-[4px]" />
                                                 <div className="w-full text-[6px] font-bold text-center text-[#FF4766] mt-2">PDF</div>
                                             </div>
                                        </div>
                                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                                            <h4 className="text-sm font-medium text-[#1A1C1E] mb-0.5 truncate group-hover:text-[#1E9A80] transition-colors">Quotation-Hikariworks-May.pdf</h4>
                                            <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                                                <span>2 pages</span>
                                                <span className="w-1 h-1 rounded-full bg-[#D1D5DB]" />
                                                <span>329 KB</span>
                                                <span className="w-1 h-1 rounded-full bg-[#D1D5DB]" />
                                                <span className="uppercase">pdf</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default ContactInfo;
