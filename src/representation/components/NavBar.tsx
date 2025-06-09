import React from 'react';
import { Link } from 'react-router-dom';

type LinkItem = {
  label: string;
  to: string;
};

type NavbarProps = {
  links: LinkItem[];
  searchButton?: React.ReactNode;
  toogleButton: React.ReactNode;
};

const Navbar: React.FC<NavbarProps> = ({ links, searchButton, toogleButton }) => {

  return (
    <nav className="shadow-md" aria-label="Navegação principal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center ">
        <Link to={"/"}>
          <h1 className="text-xl font-bold decoration-indigo-500 underline uppercase">
            Personagens -  Rick and Morty 
          </h1>
        </Link>
        <ul className="hidden md:flex justify-center items-center space-x-6 text-sm font-medium">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.to} className="hover:text-indigo-500">
                {link.label}
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

        <button 
          className="md:hidden text-indigo-600"
          aria-label="Abrir menu de navegação"
          aria-expanded="false" //TODO: isso deve ser controlado com estado
          aria-controls="menu-mobile"
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
