import { Menu as MenuIcon } from '@mui/icons-material';
import React from 'react';

import styles from './MenuButton.module.css';

export type MenuButtonProps = {
    onClick: () => void;
};

export function MenuButton({ onClick }: MenuButtonProps) {
    return (
        <button className={styles.collapseButton} onClick={onClick}>
            <MenuIcon />
        </button>
    );
}
