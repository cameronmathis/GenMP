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
                style={{ whiteSpace: 'pre-line' }}
                className={
                    source === 'user' ? styles.userMessage : styles.aiMessage
                }>
                {parseTextWithFormatting(text)}
            </Typography>
        </Box>
    );
}

function parseTextWithFormatting(text: string): (JSX.Element | string)[] {
    // Match text surrounded by single or double asterisks
    const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/);

    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            // Bold text (remove double asterisks)
            return (
                <span key={index} style={{ fontWeight: 'bold' }}>
                    {part.slice(2, -2)}
                </span>
            );
        } else if (part.startsWith('*') && part.endsWith('*')) {
            // Italic text (remove single asterisks)
            return (
                <span key={index} style={{ fontStyle: 'italic' }}>
                    {part.slice(1, -1)}
                </span>
            );
        }
        // Regular text remains as is
        return part;
    });
}
