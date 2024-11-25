import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

import styles from './LoadingSpinner.module.css';

export type LoadingSpinnerProps = {
    isLoading: boolean;
    size: number;
};

export function LoadingSpinner({ isLoading, size }: LoadingSpinnerProps) {
    return (
        <>
            {isLoading && (
                <Box className={styles.spinnerContainer}>
                    <CircularProgress className={styles.spinner} size={size} />
                </Box>
            )}
        </>
    );
}
