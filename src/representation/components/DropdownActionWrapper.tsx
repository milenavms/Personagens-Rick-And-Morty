import React, { useState } from 'react';

type DropdownActionWrapperProps<T> = {
  item: T;
  children: (item: T) => React.ReactNode;
  icon?: React.ReactNode;
};

function DropdownActionWrapper<T extends { id: string | number }>({
  item,
  children,
  icon,
}: DropdownActionWrapperProps<T>) {
  const [openId, setOpenId] = useState<number | string | null>(null);

  const toggleDropdown = () => {
    setOpenId(openId === item.id ? null : item.id);
  };

  return (
    <div className="relative inline-block">
      <button
        className="p-1 rounded hover:bg-[var(--bg-surface-hover-secundary)]"
        onClick={toggleDropdown}
      >
        {icon || (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 2a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
          </svg>
        )}
      </button>

      {openId === item.id && children(item)}
    </div>
  );
}

export default DropdownActionWrapper;
