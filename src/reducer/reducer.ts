import { Action } from './actions';
import { GMPState } from './state';

export function Reducer(state: GMPState, action: Action): GMPState {
    switch (action.type) {
        case 'SEND_PROMPT':
            return {
                ...state,
                prompt: { text: action.data.prompt, date: new Date() },
                allPrompts: [
                    ...state.allPrompts,
                    { text: action.data.prompt, date: new Date() },
                ],
                isLoading: true,
            };
        case 'STORE_RESULT':
            return {
                ...state,
                result: { text: action.data.result, date: new Date() },
                allResults: [
                    ...state.allResults,
                    { text: action.data.result, date: new Date() },
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
