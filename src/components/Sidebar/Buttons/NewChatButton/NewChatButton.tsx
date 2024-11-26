import { Add as AddIcon } from '@mui/icons-material';
import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './NewChatButton.module.css';

export type NewChatButtonProps = {
    isCollapsed: boolean;
};

export function NewChatButton({ isCollapsed }: NewChatButtonProps) {
    const { t } = useTranslation('translation');

    function onClick() {}

    return (
        <button
            className={`${styles.newChatButton} ${
                isCollapsed ? styles.collapsed : ''
            }`}
            onClick={onClick}>
            <AddIcon />
            <span
                className={`${styles.newChatText} ${
                    isCollapsed ? '' : styles.newChatTextVisible
                }`}>
                {t('sidebar.menuItems.newChat')}
            </span>
        </button>
    );
}
