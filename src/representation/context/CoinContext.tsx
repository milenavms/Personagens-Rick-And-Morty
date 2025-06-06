import React, { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark';

type ConinContextProps = {
  children: React.ReactNode;
};

interface CoinContextData {
    toggleTheme: () => void
    theme: Theme
}

const CoinContext = createContext<CoinContextData>({
    toggleTheme: () => {},
    theme: 'light',
})

export const CoinProvider: React.FC<ConinContextProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');

     const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <CoinContext.Provider value={{toggleTheme, theme}}>
        {children}
    </CoinContext.Provider>
  );
};

export const useCoinProvider = () => {
    const context = useContext(CoinContext);

    if(!context){
        throw new Error('useCoinContext deve ser usado dentro do CoinProvider');
    }
    return context
}