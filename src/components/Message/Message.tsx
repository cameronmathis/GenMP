import { Box, Typography } from '@mui/material';
import React from 'react';

import styles from './Message.module.css';

export type MessageProps = {
    text: string;
    source?: 'user' | 'ai';
};

export function Message({ text, source }: MessageProps) {
    return (
        <Box className={styles.messageContainer}>
            <Typography
                className={
                    source === 'user' ? styles.userMessage : styles.aiMessage
                }>
                {text}
            </Typography>
        </Box>
    );
}
