type ToggleButtonProps = {
  handleToggle: () => void,
  isDark: boolean,

}

const ToggleButton: React.FC<ToggleButtonProps> = ({handleToggle, isDark = false}) => {

  return (
    <button
      onClick={handleToggle}
      aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
      aria-pressed={isDark}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 
        ${isDark ? 'bg-indigo-500' : 'bg-gray-300'}
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300
          ${isDark ? 'translate-x-6' : 'translate-x-1'}`}
      />
    </button>
  );
};

export default ToggleButton;
