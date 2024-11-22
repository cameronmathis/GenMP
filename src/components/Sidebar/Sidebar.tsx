import { Menu as MenuIcon } from '@mui/icons-material';
import React, { useState } from 'react';

import styles from './Sidebar.module.css';

export function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div
            className={`${styles.sidebar} ${
                isCollapsed ? styles.collapsed : ''
            }`}>
            <button className={styles.collapseButton} onClick={toggleSidebar}>
                <MenuIcon />
            </button>
        </div>
    );
}

export default Sidebar;
