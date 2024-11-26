import React, {
    createContext,
    PropsWithChildren,
    useContext,
    useReducer,
} from 'react';

import * as geminiService from '../gemini';
import { Reducer } from '../reducer/reducer';
import { GMPState } from '../reducer/state';

export interface ProviderProps {}

export interface Context {
    state: GMPState;
    sendPrompt(prompt: string): Promise<string | void>;
}

const initialState: GMPState = {
    isLoading: false,
    messages: [],
};

export const GMPContext = createContext<Context | null>(null);

export function GMPProvider({ children }: PropsWithChildren<ProviderProps>) {
    const [state, dispatch] = useReducer(Reducer, initialState);

    async function sendPrompt(input: string): Promise<string | void> {
        try {
            dispatch({ type: 'STORE_INPUT', data: { input } });

            const prompt = state.messages
                ? `Continue the conversation: ${state.messages
                      .map((message) => `${message.role}: ${message.content}`)
                      .join('\n')}\n\nHuman: ${input}`
                : input;

            return await geminiService
                .sendPrompt(prompt)
                .then((response) => {
                    dispatch({
                        type: 'STORE_RESPONSE',
                        data: {
                            response,
                        },
                    });

                    return response;
                })
                .catch((error) => {
                    console.error(error);
                });
        } finally {
            dispatch({ type: 'SET_IS_NOT_LOADING' });
        }
    }

    const value: Context = {
        state,
        sendPrompt,
    };

    return <GMPContext.Provider value={value}>{children}</GMPContext.Provider>;
}

export function useGMP() {
    const gmpContext = useContext(GMPContext);

    if (!gmpContext) {
        throw new Error('useGMP must be called from inside of Provider');
    }

    return gmpContext;
}
