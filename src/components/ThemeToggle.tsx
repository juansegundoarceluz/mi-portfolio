import type { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

// Definimos las props que recibe ThemeToggle
type ThemeToggleProps = {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
};

function ThemeToggle({ dark, setDark }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={() => setDark(!dark)}
      whileTap={{ scale: 0.9 }}
      className="px-2 py-1 text-xl transition rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {dark ?  "☀️" :  "🌙"}
    </motion.button>
  );
}

export default ThemeToggle;