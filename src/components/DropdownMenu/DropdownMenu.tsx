import React from "react";

interface DropdownMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="absolute right-22 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      onClick={onClose}
    >
      <ul>
        <li>
          <button>Theme 1</button>
        </li>
        <li>
          <button>Theme 2</button>
        </li>
        <li>
          <button>Theme 3</button>
        </li>
      </ul>
    </div>
  );
};
