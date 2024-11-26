import React from 'react';

import { DarkModeSwitch } from './Settings/DarkModeSwitch';

import styles from './SettingsMenu.module.css';

export function SettingsMenu() {
    return (
        <div className={styles.settingsMenu}>
            <DarkModeSwitch />
        </div>
    );
}
