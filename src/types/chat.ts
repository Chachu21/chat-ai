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
    isArchived?: boolean; // New property for visual state
}
