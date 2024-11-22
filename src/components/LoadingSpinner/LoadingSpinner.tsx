import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

import styles from './LoadingSpinner.module.css'; // Import CSS Module for custom styling

export type LoadingSpinnerProps = {
    isLoading: boolean;
};

export function LoadingSpinner({ isLoading }: LoadingSpinnerProps) {
    return (
        <>
            {isLoading && (
                <Box className={styles.spinnerContainer}>
                    <CircularProgress className={styles.spinner} size={20} />
                </Box>
            )}
        </>
    );
}
