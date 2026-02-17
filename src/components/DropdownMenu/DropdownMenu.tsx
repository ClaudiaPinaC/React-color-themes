import React from 'react';

interface DropdownMenuProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="dropdown-menu" onClick={onClose}>
            <ul className="dropdown-menu-list">
                {children}
            </ul>
        </div>
    );
};