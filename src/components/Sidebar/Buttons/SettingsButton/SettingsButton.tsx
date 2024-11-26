import { Settings as SettingsIconMui } from '@mui/icons-material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SettingsMenu } from './SettingsMenu/SettingsMenu';

import styles from './SettingsButton.module.css';

export type SettingsButtonProps = {
    isCollapsed: boolean;
};

export function SettingsButton({ isCollapsed }: SettingsButtonProps) {
    const { t } = useTranslation('translation');
    const [isSettingsOpen, setIsSettingsOpen] = useState(false); // State to toggle submenu

    // Handle the submenu toggle
    function toggleSettings() {
        setIsSettingsOpen(!isSettingsOpen);
    }

    return (
        <div className={styles.settingsContainer}>
            {/* Settings button */}
            <button
                className={styles.settingsButton}
                onClick={toggleSettings}
                style={{
                    bottom: !isCollapsed && isSettingsOpen ? '65px' : '20px',
                }} // Move button up when menu is open
            >
                <SettingsIconMui />
                {!isCollapsed && (
                    <span className={styles.settingsText}>
                        {t('sidebar.menuItems.settings.text')}
                    </span>
                )}
            </button>
            {/* Submenu appears when settings button is clicked */}
            {!isCollapsed && isSettingsOpen && <SettingsMenu />}
        </div>
    );
}
