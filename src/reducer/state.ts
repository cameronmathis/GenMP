type Message = {
    text: string;
    date: Date;
};

export type GMPState = {
    isLoading: boolean;
    prompt: Message | null;
    allPrompts: Message[];
    result: Message | null;
    allResults: Message[];
    showResult: boolean;
};
