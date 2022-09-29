import React from "react";
import { motion } from "framer-motion";
import { Menu } from "./Menu";

interface MenuProps {
  handleMenu: () => void;
}

export const MenuBackgroud = ({ handleMenu }: MenuProps) => {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-10 flex bg-black bg-opacity-50">
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-1/3 bg-black"
      >
        <Menu handleMenu={handleMenu} />
      </motion.div>
    </div>
  );
};
