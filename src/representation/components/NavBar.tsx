import React from 'react';
import { Link } from 'react-router-dom';

type NavbarProps = {
  links: string[];
  searchButton?: React.ReactNode;
  toogleButton: React.ReactNode;
};

const Navbar: React.FC<NavbarProps> = ({ links, searchButton, toogleButton }) => {

  return (
    <nav className="shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center ">
        <Link to={"/"}>
          <h1 className="text-xl font-bold decoration-indigo-500 underline uppercase">
            Detalhes
          </h1>
        </Link>
        <ul className="hidden md:flex justify-center items-center space-x-6 text-sm font-medium">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link} className="hover:text-indigo-500">
                {link}
              </Link>
            </li>
          ))}
          <li>
            {toogleButton}
          </li>
          <li>
            {searchButton ? searchButton : null}
          </li>
        </ul>

        <button className="md:hidden text-indigo-600">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
