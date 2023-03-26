import React from "react";
import Link from "next/link";
import "./Header.modules.css";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Posts",
    route: "/posts",
  },
];

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul className="navigation">
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
