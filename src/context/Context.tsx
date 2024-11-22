import React, {
    createContext,
    Dispatch,
    PropsWithChildren,
    useContext,
    useReducer,
} from 'react';
import * as geminiService from '../gemini';
import { Action } from '../reducer/actions';
import { Reducer } from '../reducer/reducer';
import { GMPState } from '../reducer/state';

export interface ProviderProps {}

export interface Context {
    state: GMPState;
    dispatch: Dispatch<Action>;

    sendPrompt(prompt: string): Promise<string>;
}

const initialState: GMPState = {
    isLoading: false,
    prompt: null,
    allPrompts: [],
    result: null,
    allResults: [],
    showResult: false,
};

export const GMPContext = createContext<Context | null>(null);

export function GMPProvider({ children }: PropsWithChildren<ProviderProps>) {
    const [state, dispatch] = useReducer(Reducer, initialState);

    async function sendPrompt(prompt: string): Promise<string> {
        try {
            dispatch({ type: 'SEND_PROMPT', data: { prompt } });

            return await geminiService.sendPrompt(prompt).then((result) => {
                dispatch({
                    type: 'STORE_RESULT',
                    data: {
                        result,
                    },
                });

                return result;
            });
        } finally {
            dispatch({ type: 'SET_IS_NOT_LOADING' });
        }
    }

    const value: Context = {
        state,
        dispatch,
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
