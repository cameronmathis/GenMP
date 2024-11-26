import { Box, Typography } from '@mui/material';
import React from 'react';

import styles from './Message.module.css';

export type MessageProps = {
    role: 'user' | 'assistant';
    content: string;
};

export function Message({ role, content }: MessageProps) {
    function removePrefixes(text: string): string {
        // Regular expression to match "Assistant:" or "Ai:" at the start of the string, case-insensitively
        const prefixRegex = /^(Assistant:|Ai:)\s*/i;

        // Remove all occurrences of the prefixes at the start of the string
        while (prefixRegex.test(text)) {
            text = text.replace(prefixRegex, '');
        }

        return text;
    }

    function parseTextWithFormatting(text: string): (JSX.Element | string)[] {
        // Match patterns for **bold**, *italic*, <u>underline</u>, and ~~strikethrough~~
        const parts = text.split(
            /(\*\*[^*]+\*\*|\*[^*]+\*|<u>[^<]+<\/u>|~~[^~]+~~)/
        );
        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                // Bold text (remove **)
                return (
                    <span key={index} style={{ fontWeight: 'bold' }}>
                        {part.slice(2, -2)}
                    </span>
                );
            } else if (part.startsWith('*') && part.endsWith('*')) {
                // Italic text (remove *)
                return (
                    <span key={index} style={{ fontStyle: 'italic' }}>
                        {part.slice(1, -1)}
                    </span>
                );
            } else if (part.startsWith('<u>') && part.endsWith('</u>')) {
                // Underline text (remove <u> and </u>)
                return (
                    <span key={index} style={{ textDecoration: 'underline' }}>
                        {part.slice(3, -4)}
                    </span>
                );
            } else if (part.startsWith('~~') && part.endsWith('~~')) {
                // Strikethrough text (remove ~~)
                return (
                    <span
                        key={index}
                        style={{ textDecoration: 'line-through' }}>
                        {part.slice(2, -2)}
                    </span>
                );
            }
            // Return regular text
            return part;
        });
    }

    return (
        <Box className={styles.messageContainer}>
            <Typography
                style={{ whiteSpace: 'pre-line' }}
                className={
                    role === 'user'
                        ? styles.userMessage
                        : styles.assistantMessage
                }>
                {parseTextWithFormatting(removePrefixes(content))}
            </Typography>
        </Box>
    );
}
