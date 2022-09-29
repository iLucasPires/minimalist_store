import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

interface MenuProps {
  handleMenu: () => void;
}

export const Menu = ({ handleMenu }: MenuProps) => {
  const menu = ["home", "products", "about", "contact"];
  return (
    <nav className="relative h-full w-full bg-black transition-all">
      <ul className="flex h-full flex-col items-center justify-center gap-5">
        {menu.map((item) => (
          <li key={item}>
            <NavLink
              to={`/${item}`}
              onClick={handleMenu}
              className="flex items-center gap-5 text-2xl font-bold capitalize"
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
      <IoMdClose
        onClick={handleMenu}
        className="absolute top-5 right-5 cursor-pointer text-3xl"
      />
    </nav>
  );
};
