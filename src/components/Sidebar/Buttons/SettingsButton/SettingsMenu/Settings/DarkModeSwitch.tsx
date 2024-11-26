import { Switch } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './DarkModeSwitch.module.css';

export function DarkModeSwitch() {
    const { t } = useTranslation('translation');
    const [isDarkMode, setIsDarkMode] = useState(false); // State to toggle dark mode

    // Handle the dark mode toggle
    function onToggle() {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <div className={styles.darkModeToggle}>
            <label htmlFor='darkModeToggle' className={styles.darkModeLabel}>
                {t('sidebar.menuItems.settings.settingsItems.darkModeSwitch')}
            </label>
            <Switch
                id='darkModeToggle'
                checked={isDarkMode}
                onChange={onToggle}
                color='primary'
                inputProps={{ 'aria-label': 'Dark Mode Toggle' }}
                className={styles.switch} // Add custom class for styling
            />
        </div>
    );
}
