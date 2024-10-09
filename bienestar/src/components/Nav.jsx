import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Obtiene la ubicación actual

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-50 border-b border-green-300 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/assets/images/logo/logo.png"
            className="h-8"
            alt="DietasBalance Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            DietasBalance
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-green-500 rounded-lg md:hidden hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-300"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 rounded md:bg-transparent md:hover:text-green-600 md:p-0 ${location.pathname === '/' ? 'text-green-100 md:text-green-600 bg-green-700' : 'text-gray-800'}`}
                aria-current={location.pathname === '/' ? 'page' : undefined}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/dietas"
                className={`block py-2 px-3 rounded md:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 ${location.pathname === '/dietas' ? 'text-green-100 md:text-green-600 bg-green-700' : 'text-gray-800'}`}
              >
                Dietas
              </Link>
            </li>
            <li>
              <Link
                to="/consejos"
                className={`block py-2 px-3 rounded md:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 ${location.pathname === '/consejos' ? 'text-green-100 md:text-green-600 bg-green-700' : 'text-gray-800'}`}
              >
                Consejos
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                className={`block py-2 px-3 rounded md:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 ${location.pathname === '/contacto' ? 'text-green-100 md:text-green-600 bg-green-700' : 'text-gray-800'}`}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
