import React from 'react';

interface DropdownMenuProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="" onClick={onClose}>
            <ul className="">
                {children}
                HELLO!
            </ul>
        </div>
    );
};