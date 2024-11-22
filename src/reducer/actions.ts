export interface SendPrompt {
    type: 'SEND_PROMPT';
    data: {
        prompt: string;
    };
}

export interface StoreResult {
    type: 'STORE_RESULT';
    data: {
        result: string;
    };
}

export interface SetIsLoading {
    type: 'SET_IS_LOADING';
}

export interface SetIsNotLoading {
    type: 'SET_IS_NOT_LOADING';
}

export type Action = SendPrompt | StoreResult | SetIsLoading | SetIsNotLoading;
