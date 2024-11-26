export interface StoreInput {
    type: 'STORE_INPUT';
    data: {
        input: string;
    };
}

export interface StoreResponse {
    type: 'STORE_RESPONSE';
    data: {
        response: string;
    };
}

export interface SetIsLoading {
    type: 'SET_IS_LOADING';
}

export interface SetIsNotLoading {
    type: 'SET_IS_NOT_LOADING';
}

export type Action =
    | StoreInput
    | StoreResponse
    | SetIsLoading
    | SetIsNotLoading;
