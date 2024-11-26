export type Message = {
    role: 'user' | 'assistant';
    content: string;
    date: Date;
};

export type GMPState = {
    isLoading: boolean;
    messages: Message[];
};
