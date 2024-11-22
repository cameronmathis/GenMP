import { Box } from '@mui/material';
import React from 'react';

import { useGMP } from '../../context/Context';
import { ChatBox } from '../ChatBox/ChatBox';
import { Input } from '../Input/Input';

import styles from './Main.module.css';

export function Main() {
    const { state } = useGMP();

    return (
        <Box className={styles.main}>
            <ChatBox />
            <Input />
        </Box>
    );
}
