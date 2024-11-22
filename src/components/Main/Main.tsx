import { Box } from '@mui/material';
import React from 'react';

import { ChatBox } from '../ChatBox/ChatBox';
import { Input } from '../Input/Input';

import styles from './Main.module.css';

export function Main() {
    return (
        <Box className={styles.main}>
            <ChatBox />
            <Input />
        </Box>
    );
}
