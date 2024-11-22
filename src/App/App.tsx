import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import React from 'react';

import { Main } from '../components/Main/Main';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { GMPProvider } from '../context/Context';

import styles from './App.module.css';

export function App() {
    return (
        <StyledEngineProvider injectFirst>
            <GMPProvider>
                <div className={styles.app}>
                    <Sidebar />
                    <Main />
                </div>
            </GMPProvider>
        </StyledEngineProvider>
    );
}
