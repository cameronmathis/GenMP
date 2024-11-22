import { Box } from '@mui/material';
import React from 'react';

import { useGMP } from '../../context/Context';
import { Message } from '../Message/Message';

import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import styles from './ChatBox.module.css';

export function ChatBox() {
    const { state } = useGMP();

    type Message = { text: string; date: Date; source?: 'user' | 'ai' };
    const prompts: Message[] = state.allPrompts;
    const results: Message[] = state.allResults;

    function getMessages() {
        prompts.forEach((prompt) => {
            prompt.source = 'user';
        });
        results.forEach((result) => {
            result.source = 'ai';
        });
        const allMessages = [...prompts, ...results];
        allMessages.sort((a, b) => a.date.getTime() - b.date.getTime());
        return allMessages;
    }

    return (
        <Box className={styles.chatBox}>
            {getMessages().map((message, i) => (
                <Message key={i} text={message.text} source={message.source} />
            ))}
            <LoadingSpinner isLoading={state.isLoading} />
        </Box>
    );
}
