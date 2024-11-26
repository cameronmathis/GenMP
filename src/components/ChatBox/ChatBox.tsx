import { Box } from '@mui/material';
import { LoadingSpinner } from '@packages/loading-spinner';
import { Message } from '@packages/message';
import React from 'react';

import { useGMP } from '../../context/Context';
import { Message as MessageType } from '../../reducer/state';
import styles from './ChatBox.module.css';

export function ChatBox() {
    const { state } = useGMP();
    const messages: MessageType[] = state.messages;

    function sortMessages(localMessages: MessageType[]) {
        localMessages.sort((a, b) => a.date.getTime() - b.date.getTime());
        return localMessages;
    }

    return (
        <Box className={styles.chatBox}>
            {sortMessages(messages).map((message, i) => (
                <Message
                    key={i}
                    role={message.role}
                    content={message.content}
                />
            ))}
            <LoadingSpinner isLoading={state.isLoading} size={20} />
        </Box>
    );
}
