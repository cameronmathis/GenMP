import React, { useState } from 'react';

import { MenuButton } from './Buttons/MenuButton/MenuButton';
import { SettingsButton } from './Buttons/SettingsButton/SettingsButton';

import styles from './Sidebar.module.css';

export function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    function toggleSidebar() {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div
            className={`${styles.sidebar} ${
                isCollapsed ? styles.collapsed : ''
            }`}>
            <MenuButton onClick={toggleSidebar} />
            <SettingsButton isCollapsed={isCollapsed} />
        </div>
    );
}
