import React from 'react';

type NavbarProps = {
  links: string[];
  searchButton?: React.ReactNode;
};

const Navbar: React.FC<NavbarProps> = ({ links, searchButton }) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center ">
        <h1 className="text-xl font-bold decoration-indigo-500 underline uppercase">Criptomoedas</h1>

        <ul className="hidden md:flex justify-center items-center space-x-6 text-sm font-medium">
          {links.map((link, index) => (
            <li key={index}>
              <a href="#" className="hover:text-indigo-500">
                {link}
              </a>
            </li>
          ))}
          <li>
              {searchButton ? searchButton : null}
          </li>
        </ul>

        <button className="md:hidden text-gray-600">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
