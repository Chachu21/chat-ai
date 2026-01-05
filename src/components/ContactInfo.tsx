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
import { X } from 'lucide-react';
import Image from 'next/image';
import VideoIcon from './icons/VideoIcon';
import PhoneIcon from './icons/PhoneIcon';
import Link from 'next/link';

interface ContactInfoProps {
    children: React.ReactNode;
}

const LINK_DATA = [
    {
        month: "May",
        items: [
            {
                image: "https://github.com/basecamp.png",
                link: "https://basecamp.net/",
                description: "Discover thousands of premium UI kits, templates, and design resources tailored for designers, developers, and..."
            },
            {
                image: "https://github.com/Notion.png",
                link: "https://notion.com/",
                description: "A new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team."
            },
            {
                image: "https://github.com/asana.png",
                link: "https://asana.com/",
                description: "Work anytime, anywhere with Asana. Keep remote and distributed teams, and your entire organization, focused..."
            },
            {
                image: "https://github.com/trello.png",
                link: "https://trello.com/",
                description: "Make the impossible, possible with Trello. The ultimate teamwork project management tool. Start up board in se..."
            }
        ]
    }
];

const MEDIA_DATA = [
    {
        month: "May",
        images: [
             "https://picsum.photos/200?random=1",
             "https://picsum.photos/200?random=2",
             "https://picsum.photos/200?random=3",
             "https://picsum.photos/200?random=4",
             "https://picsum.photos/200?random=5",
             "https://picsum.photos/200?random=6",
        ]
    },
    {
        month: "April",
        images: [
             "https://picsum.photos/200?random=7",
             "https://picsum.photos/200?random=8",
             "https://picsum.photos/200?random=9",
             "https://picsum.photos/200?random=10",
             "https://picsum.photos/200?random=11",
        ]
    },
    {
        month: "March",
        images: [
             "https://picsum.photos/200?random=12",
             "https://picsum.photos/200?random=13",
             "https://picsum.photos/200?random=14",
             "https://picsum.photos/200?random=15",
             "https://picsum.photos/200?random=16",
             "https://picsum.photos/200?random=17",
             "https://picsum.photos/200?random=18",
             "https://picsum.photos/200?random=19",
        ]
    }
];

const DOCS_DATA = [
    {
        month: "May",
        items: [
            {
                icon: (
                    <svg
                        width="32"
                        height="36"
                        viewBox="0 0 32 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-9"
                    >
                        <g clipPath="url(#clip0_0_3357)">
                            <path
                                d="M8.09961 0.674805H19.9697L30.8252 11.5303V32.4004C30.825 34.0155 29.5155 35.325 27.9004 35.3252H8.09961C6.48449 35.325 5.17502 34.0155 5.1748 32.4004V3.59961C5.17502 1.98449 6.48449 0.675016 8.09961 0.674805Z"
                                fill="white"
                                stroke="#E8E5DF"
                                strokeWidth="1.35"
                            />
                            <path
                                d="M19.7998 0.900002V9C19.7998 10.4912 21.0086 11.7 22.4998 11.7H30.5998"
                                stroke="#E8E5DF"
                                strokeWidth="1.35"
                                strokeLinecap="round"
                            />
                        </g>
                        <rect y="16.9" width="22.5" height="14.6" rx="1.8" fill="#FF1607" />
                        <path
                            d="M3.17907 27.7V21.1545H5.76145C6.2579 21.1545 6.68084 21.2494 7.03028 21.439C7.37971 21.6265 7.64604 21.8875 7.82928 22.222C8.01465 22.5544 8.10734 22.9379 8.10734 23.3726C8.10734 23.8072 8.01359 24.1908 7.82609 24.5232C7.63859 24.8555 7.36692 25.1144 7.0111 25.2998C6.65741 25.4852 6.22914 25.5778 5.7263 25.5778H4.08035V24.4688H5.50258C5.76891 24.4688 5.98837 24.423 6.16096 24.3314C6.33567 24.2376 6.46565 24.1087 6.55087 23.9447C6.63823 23.7785 6.68191 23.5878 6.68191 23.3726C6.68191 23.1553 6.63823 22.9656 6.55087 22.8037C6.46565 22.6396 6.33567 22.5129 6.16096 22.4234C5.98624 22.3318 5.76465 22.2859 5.49618 22.2859H4.56295V27.7H3.17907ZM11.1465 27.7H8.82622V21.1545H11.1657C11.8241 21.1545 12.3908 21.2856 12.866 21.5477C13.3411 21.8076 13.7065 22.1815 13.9622 22.6695C14.22 23.1574 14.3489 23.7412 14.3489 24.4209C14.3489 25.1027 14.22 25.6886 13.9622 26.1787C13.7065 26.6688 13.339 27.0448 12.8596 27.3069C12.3823 27.569 11.8113 27.7 11.1465 27.7ZM10.2101 26.5143H11.089C11.4981 26.5143 11.8422 26.4418 12.1213 26.297C12.4026 26.1499 12.6135 25.923 12.7541 25.6162C12.8969 25.3072 12.9683 24.9088 12.9683 24.4209C12.9683 23.9372 12.8969 23.542 12.7541 23.2352C12.6135 22.9283 12.4036 22.7025 12.1245 22.5576C11.8454 22.4127 11.5013 22.3403 11.0922 22.3403H10.2101V26.5143ZM15.1941 27.7V21.1545H19.5279V22.2955H16.5779V23.8552H19.2402V24.9962H16.5779V27.7H15.1941Z"
                            fill="white"
                        />
                        <defs>
                            <clipPath id="clip0_0_3357">
                                <rect width="27" height="36" fill="white" transform="translate(4.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                ),
                name: "Document Requirement.pdf",
                pages: "10 pages",
                size: "16 MB",
                type: "pdf"
            },
            {
                icon: (
                     <div className="w-12 h-12 rounded-xl bg-[#F8F8F5] flex items-center justify-center shrink-0 border border-[#E8E5DF] relative">
                         <div className="w-6 h-8 bg-white border border-[#E8E5DF] rounded-[4px] relative flex flex-col items-center justify-center shadow-sm">
                             <div className="absolute -top-[1px] -right-[1px] w-2 h-2 bg-[#F8F8F5] border-b border-l border-[#E8E5DF] rounded-bl-[4px]" />
                             <div className="w-full text-[6px] font-bold text-center text-[#A259FF] mt-2">
                                 FIG
                             </div>
                         </div>
                     </div>
                ),
                name: "Existing App.fig",
                size: "213 MB",
                type: "fig"
            },
            {
                icon: (
                     <div className="w-12 h-12 rounded-xl bg-[#F8F8F5] flex items-center justify-center shrink-0 border border-[#E8E5DF] relative">
                         <div className="w-6 h-8 bg-white border border-[#E8E5DF] rounded-[4px] relative flex flex-col items-center justify-center shadow-sm">
                             <div className="absolute -top-[1px] -right-[1px] w-2 h-2 bg-[#F8F8F5] border-b border-l border-[#E8E5DF] rounded-bl-[4px]" />
                             <div className="w-full text-[6px] font-bold text-center text-[#FF7A00] mt-2">
                                 AI
                             </div>
                         </div>
                     </div>
                ),
                name: "Product Illustrations.ai",
                size: "72 MB",
                type: "ai"
            },
            {
                icon: (
                    <svg
                        width="32"
                        height="36"
                        viewBox="0 0 32 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-9"
                    >
                        <g clipPath="url(#clip0_0_3357)">
                            <path
                                d="M8.09961 0.674805H19.9697L30.8252 11.5303V32.4004C30.825 34.0155 29.5155 35.325 27.9004 35.3252H8.09961C6.48449 35.325 5.17502 34.0155 5.1748 32.4004V3.59961C5.17502 1.98449 6.48449 0.675016 8.09961 0.674805Z"
                                fill="white"
                                stroke="#E8E5DF"
                                strokeWidth="1.35"
                            />
                            <path
                                d="M19.7998 0.900002V9C19.7998 10.4912 21.0086 11.7 22.4998 11.7H30.5998"
                                stroke="#E8E5DF"
                                strokeWidth="1.35"
                                strokeLinecap="round"
                            />
                        </g>
                        <rect y="16.9" width="22.5" height="14.6" rx="1.8" fill="#FF1607" />
                        <path
                            d="M3.17907 27.7V21.1545H5.76145C6.2579 21.1545 6.68084 21.2494 7.03028 21.439C7.37971 21.6265 7.64604 21.8875 7.82928 22.222C8.01465 22.5544 8.10734 22.9379 8.10734 23.3726C8.10734 23.8072 8.01359 24.1908 7.82609 24.5232C7.63859 24.8555 7.36692 25.1144 7.0111 25.2998C6.65741 25.4852 6.22914 25.5778 5.7263 25.5778H4.08035V24.4688H5.50258C5.76891 24.4688 5.98837 24.423 6.16096 24.3314C6.33567 24.2376 6.46565 24.1087 6.55087 23.9447C6.63823 23.7785 6.68191 23.5878 6.68191 23.3726C6.68191 23.1553 6.63823 22.9656 6.55087 22.8037C6.46565 22.6396 6.33567 22.5129 6.16096 22.4234C5.98624 22.3318 5.76465 22.2859 5.49618 22.2859H4.56295V27.7H3.17907ZM11.1465 27.7H8.82622V21.1545H11.1657C11.8241 21.1545 12.3908 21.2856 12.866 21.5477C13.3411 21.8076 13.7065 22.1815 13.9622 22.6695C14.22 23.1574 14.3489 23.7412 14.3489 24.4209C14.3489 25.1027 14.22 25.6886 13.9622 26.1787C13.7065 26.6688 13.339 27.0448 12.8596 27.3069C12.3823 27.569 11.8113 27.7 11.1465 27.7ZM10.2101 26.5143H11.089C11.4981 26.5143 11.8422 26.4418 12.1213 26.297C12.4026 26.1499 12.6135 25.923 12.7541 25.6162C12.8969 25.3072 12.9683 24.9088 12.9683 24.4209C12.9683 23.9372 12.8969 23.542 12.7541 23.2352C12.6135 22.9283 12.4036 22.7025 12.1245 22.5576C11.8454 22.4127 11.5013 22.3403 11.0922 22.3403H10.2101V26.5143ZM15.1941 27.7V21.1545H19.5279V22.2955H16.5779V23.8552H19.2402V24.9962H16.5779V27.7H15.1941Z"
                            fill="white"
                        />
                        <defs>
                            <clipPath id="clip0_0_3357">
                                <rect width="27" height="36" fill="white" transform="translate(4.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                ),
                name: "Quotation-Hikariworks-May.pdf",
                pages: "2 pages",
                size: "329 KB",
                type: "pdf"
            }
        ]
    }
];

const ContactInfo = ({ children }: ContactInfoProps) => {
    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px] p-6 space-y-6 overflow-y-auto bg-white shadow-[0px_4px_32px_0px_#0000001F] !m-3 !h-[calc(100vh-24px)] rounded-[24px] border border-[#F1F3F2]">
                <SheetHeader className="p-0 space-y-6">
                    <div className="flex items-center justify-between">
                        <SheetTitle className="text-xl leading-7 font-semibold text-[#111625]">
                            Contact Info
                        </SheetTitle>
                        {/* Custom Close Button if needed, or rely on Sheet's default */}
                        <SheetClose asChild>
                            <button className="rounded-[8px] w-8 h-8 flex justify-center items-center bg-transparent p-2 text-[#6B7280] hover:bg-gray-50 transition-colors">
                                <X />
                            </button>
                        </SheetClose>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className="relative w-[72px] h-[72px]">
                            <Image
                                src="/images/profile-1.jpg"
                                alt="Daniel CH"
                                height={72}
                                width={72}
                                className="rounded-full object-cover"
                            />
                        </div>
                        <div className="text-center">
                            <h2 className="text-base leading-6 font-medium text-[#111625]">
                                Daniel CH
                            </h2>
                            <p className="text-xs leading-4 font-normal text-[#8B8B8B]">
                                Dnielch@shipz.com
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 w-full">
                        <button className="flex-1 cursor-pointer flex items-center justify-center gap-2 h-10 border border-[#E8E5DF] rounded-[8px]">
                            <PhoneIcon />
                            <span className="text-[#111625] text-sm leading-5 font-medium">
                                Audio
                            </span>
                        </button>
                        <button className="flex-1  cursor-pointer flex items-center justify-center gap-2 h-10 border border-[#E8E5DF] rounded-[8px]">
                            <VideoIcon />
                            <span className="text-[#111625] text-sm leading-5 font-medium">
                                Video
                            </span>
                        </button>
                    </div>
                </SheetHeader>

                <div className="">
                    <Tabs defaultValue="docs" className="w-full">
                        <TabsList className="w-fit h-auto p-0.5 bg-[#F3F3EE] rounded-[10px] mb-3 gap-1 inline-flex">
                            <TabsTrigger
                                value="media"
                                className="px-2.5 py-1.5 rounded-md text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-[#1A1C1E] data-[state=active]:shadow-sm text-[#6B7280]"
                            >
                                Media
                            </TabsTrigger>
                            <TabsTrigger
                                value="link"
                                className="px-2.5 py-1.5 rounded-md text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-[#1A1C1E] data-[state=active]:shadow-sm text-[#6B7280]"
                            >
                                Link
                            </TabsTrigger>
                            <TabsTrigger
                                value="docs"
                                className="px-2.5 py-1.5 rounded-md text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-[#1A1C1E] data-[state=active]:shadow-sm text-[#6B7280]"
                            >
                                Docs
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="link" className="space-y-1">
                            {LINK_DATA.map((group, index) => (
                                <div key={index} className="flex flex-col space-y-3">
                                    <h3 className="text-xs leading-4 font-mediumn rounded-[8px] text-[#596881] p-3 bg-[#F8F8F5]">
                                        {group.month}
                                    </h3>
                                    <div className="space-y-4">
                                        {group.items.map((item, i) => (
                                            <Link href="#" key={i} className="flex gap-3">
                                                <div className="w-15 h-15 rounded-[12px] flex items-center justify-center shrink-0 relative overflow-hidden">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.link}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0 space-y-1">
                                                    <h4 className="text-sm font-medium text-[#111625] truncate">
                                                        {item.link}
                                                    </h4>
                                                    <p className="text-xs text-[#8B8B8B] line-clamp-2">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </TabsContent>
                        <TabsContent value="media" className="space-y-2">
                            {MEDIA_DATA.map((group, index) => (
                                <div key={index} className="space-y-3">
                                    <h3 className="text-xs leading-4 font-mediumn rounded-[8px] text-[#596881] p-3 bg-[#F8F8F5]">
                                        {group.month}
                                    </h3>
                                    <div className="grid grid-cols-4 gap-1">
                                        {group.images.map((img, i) => (
                                            <div
                                                key={i}
                                                className="aspect-square  bg-gray-100 rounded-[12px] relative overflow-hidden"
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`Media ${i + 1}`}
                                                    width={97.5}
                                                    height={97.5}
                                                    className="object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </TabsContent>

                        <TabsContent value="docs" className="space-y-6">
                            {DOCS_DATA.map((group, index) => (
                                <div key={index} className="space-y-3">
                                    <h3 className="text-xs leading-4 font-mediumn rounded-[8px] text-[#596881] p-3 bg-[#F8F8F5]">
                                        {group.month}
                                    </h3>
                                    <div className="space-y-4">
                                        {group.items.map((item, i) => (
                                            <div key={i} className="flex gap-3 cursor-pointer group">
                                                <div className="w-15 h-15 flex items-center justify-center bg-[#F3F3EE] rounded-[12px] shrink-0">
                                                    {item.icon}
                                                </div>
                                                <div className="flex-1 min-w-0 flex flex-col justify-center space-y-1">
                                                    <h4 className="text-sm font-medium leadin-5 text-[#1C1C1C] truncate">
                                                        {item.name}
                                                    </h4>
                                                    <div className="flex items-center gap-2 text-xs leading-4 text-[#8B8B8B]">
                                                        {item.pages && (
                                                            <>
                                                                <span>{item.pages}</span>
                                                                <span className="w-1 h-1 rounded-full bg-[#8B8B8B]" />
                                                            </>
                                                        )}
                                                        <span>{item.size}</span>
                                                        <span className="w-1 h-1 rounded-full bg-[#8B8B8B]" />
                                                        <span className="">{item.type}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </TabsContent>
                    </Tabs>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default ContactInfo;
