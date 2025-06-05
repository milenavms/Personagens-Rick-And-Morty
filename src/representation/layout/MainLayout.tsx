import React from 'react';
import Navbar from '../components/NavBar';

type MainLayoutProps = {
  children: React.ReactNode;
  searchButton?: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children, searchButton }) => {
  return (
    <div className="font-poppins bg-gray-100 text-gray-900 overflow-x-hidden min-h-screen">
      <Navbar links={[]} searchButton={searchButton} />
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-6">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
