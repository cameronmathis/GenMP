import { Action } from './actions';
import { GMPState } from './state';

export function Reducer(state: GMPState, action: Action): GMPState {
    switch (action.type) {
        case 'STORE_INPUT':
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        role: 'user',
                        content: action.data.input,
                        date: new Date(),
                    },
                ],
                isLoading: true,
            };
        case 'STORE_RESPONSE':
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        role: 'assistant',
                        content: action.data.response,
                        date: new Date(),
                    },
                ],
                isLoading: false,
            };
        case 'SET_IS_LOADING':
            return {
                ...state,
                isLoading: true,
            };
        case 'SET_IS_NOT_LOADING':
            return {
                ...state,
                isLoading: false,
            };
        default:
            return { ...state };
    }
}
