import React from 'react';
import Navbar from '../components/NavBar';
import ToggleButton from '../components/ToogleButton';
import { useTheme } from '../context/ThemeContext';

type MainLayoutProps = {
  children: React.ReactNode;
  searchButton?: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children, searchButton }) => {

  const {theme, toggleTheme} = useTheme();

  return (
    <div className="bg-gray-100 dark:bg-gray-800 font-poppins overflow-x-hidden min-h-screen">
      <Navbar 
      links={[]} 
      toogleButton={
        <ToggleButton handleToggle={toggleTheme} isDark={theme==="dark"}/>
      } 
      searchButton={searchButton} />
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-6">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
