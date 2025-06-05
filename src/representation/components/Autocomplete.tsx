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
  const containerRef = useRef<HTMLDivElement>(null);

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
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400"
      />

      {showOptions && (
        <ul className="absolute z-10 w-full max-h-60 overflow-auto bg-white border border-gray-300 rounded-md mt-1 shadow-lg">
          {options.length > 0 ? (
            options.map((option, idx) => (
              <li
                key={idx}
                onClick={() => handleSelect(option)}
                className="cursor-pointer px-4 py-2 hover:bg-indigo-100"
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
