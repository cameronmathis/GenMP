import { Send as SendIcon } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useGMP } from '../../context/Context';

import styles from './Input.module.css';

export function Input() {
    const { sendPrompt } = useGMP();
    const { t } = useTranslation('translation');
    const [query, setQuery] = useState<string>('');

    function handleClick() {
        sendPrompt(query);
        setQuery('');
    }

    return (
        <>
            <TextField
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleClick();
                    }
                }}
                placeholder={t('main.input.placeholder')}
                variant='standard'
                fullWidth
                className={styles.inputField}
                InputProps={{
                    disableUnderline: true,
                    endAdornment: query && (
                        <InputAdornment position='end'>
                            <IconButton
                                onClick={handleClick}
                                sx={{ color: '#444746' }} // Customize color of send icon
                            >
                                <SendIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </>
    );
}
