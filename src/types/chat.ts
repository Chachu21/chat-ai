export interface Message {
    id: number;
    text: string;
    time: string;
    sender: 'self' | 'other';
    status?: 'sent' | 'delivered' | 'read';
    showTime?: boolean;
}

export interface Chat {
    id: number;
    name: string;
    time: string;
    message: string;
    avatar: string;
    unread: boolean;
    active: boolean;
    status: 'sent' | 'delivered' | 'read';
    hasArchive?: boolean;
    isArchived?: boolean;
    messages: Message[];
}
