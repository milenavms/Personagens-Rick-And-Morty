import { Link } from 'react-router-dom';

type DropdownItem<T> = {
  label: string;
  onClick?: (item: T) => void;
  to?: string; // Para navegação com Link
};

type DropdownMenuProps<T> = {
  item: T;
  visible: boolean;
  items: DropdownItem<T>[];
  position?: 'left' | 'right';
};

function DropdownMenu<T extends { id: string | number }>({
  item,
  visible,
  items,
  position = 'right',
}: DropdownMenuProps<T>) {
  if (!visible) return null;

  return (
    <ul
      className="absolute z-10 w-48 max-h-60 overflow-auto bg-[var(--bg-surface)] text-[var(--text-base)] border border-[var(--border-base)] rounded-md mt-1 shadow-lg"
      style={{ [position]: '10%' }}
    >
      {items.map((dropdownItem, index) => (
        <li
          key={index}
          onClick={() => dropdownItem.onClick?.(item)}
          className="px-4 py-2 hover:bg-[var(--bg-surface-hover-secundary)] cursor-pointer"
        >
          {dropdownItem.to ? (
            <Link to={dropdownItem.to}>{dropdownItem.label}</Link>
          ) : (
            dropdownItem.label
          )}
        </li>
      ))}
    </ul>
  );
}

export default DropdownMenu;
