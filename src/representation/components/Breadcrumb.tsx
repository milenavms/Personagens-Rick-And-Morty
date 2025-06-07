import React from "react";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';

type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: Crumb[];
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="text-sm" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRightIcon className="h-4 w-4 mx-1" />
            )}
            {index === 0 ? (
              <Link
                to={item.href || "/"}
                className="flex items-center text-indigo-500 hover:underline hover:text-indigo-800"
              >
                <HomeIcon className="h-5 w-5 mr-1" />
                {item.label}
              </Link>
            ) : item.href ? (
              <a
                href={item.href}
                className="text-indigo-500 hover:underline hover:text-indigo-700"
              >
                {item.label}
              </a>
            ) : (
              <span className="font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
