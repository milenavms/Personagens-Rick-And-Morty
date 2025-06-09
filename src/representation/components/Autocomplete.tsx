import React, { useState, useRef, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

type AutocompleteProps = {
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelect?: (value: string) => void;
  placeholder?: string;
};

const Autocomplete: React.FC<AutocompleteProps> = ({
  options,
  value,
  onChange,
  onSelect,
  placeholder = "Buscar...",
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const listboxId = "autocomplete-options";

  //NOTE: Fecha dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    if (onSelect) onSelect(option);
    setShowOptions(false);
    setActiveIndex(-1);
  };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showOptions) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % options.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev <= 0 ? options.length - 1 : prev - 1
      );
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      handleSelect(options[activeIndex]);
    } else if (e.key === "Escape") {
      setShowOptions(false);
      setActiveIndex(-1);
    }
  };

  return (
    <div className="w-full max-w-md relative" ref={containerRef}>
      <MagnifyingGlassIcon className="w-5 h-5 text-indigo-500 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e);
          setShowOptions(true);
        }}
        onFocus={() => setShowOptions(true)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        aria-autocomplete="list"
        aria-controls={listboxId}
        aria-expanded={showOptions}
        role="combobox"
        aria-activedescendant={
          activeIndex >= 0 ? `option-${activeIndex}` : undefined
        }
        className="w-full pl-10 pr-4 py-3 rounded-md border  border-[var(--border-base)] shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 bg-[var(--bg-surface)] text-[var(--text-base)]"
      />

      {showOptions && (
        <ul 
          id={listboxId}
          role="listbox"
          className="absolute z-10 w-full max-h-60 overflow-auto bg-[var(--bg-surface)] text-[var(--text-base)] border border-[var(--border-base)] rounded-md mt-1 shadow-lg"
        >
          {options.length > 0 ? (
            options.map((option, idx) => (
              <li
                id={`option-${idx}`}
                role="option"
                aria-selected={idx === activeIndex}
                onClick={() => handleSelect(option)}
                className={`cursor-pointer px-4 py-2 ${
                  idx === activeIndex
                    ? "bg-indigo-100 text-indigo-900"
                    : "hover:bg-[var(--bg-surface-hover)]"
                }`}
              >
                {option}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500 select-none">Sem resultados</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
