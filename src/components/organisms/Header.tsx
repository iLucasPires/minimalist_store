import React from "react";
import { FiPackage, FiShoppingCart, FiUser } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { Logo } from "../atom/Logo";
import { MenuBackgroud } from "../molecules/MenuBackgroud";

export const Header = () => {
  const bodyRef = React.useRef(document.body);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
    bodyRef.current.classList.toggle("overflow-hidden");
  };

  return (
    <header className="fixed top-0 z-50 flex h-20 w-full items-center justify-around bg-black text-white">
      <IoMdMenu className="cursor-pointer text-3xl" onClick={handleMenu} />
      {isOpen && <MenuBackgroud handleMenu={handleMenu} />}
      <Logo />
      <div className="flex items-center gap-5">
        <Link to="/">
          <FiPackage className="cursor-pointer text-2xl" />
        </Link>
        <Link to="/">
          <FiShoppingCart className="cursor-pointer text-2xl" />
        </Link>
        <Link to="/">
          <FiUser className="cursor-pointer text-2xl" />
        </Link>
      </div>
    </header>
  );
};
