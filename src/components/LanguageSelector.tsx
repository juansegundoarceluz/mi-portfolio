import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "es", label: "🇪🇸 Español" },
  { code: "en", label: "en English" },
]

function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div className="relative">
      
      {/* Botón principal */}
      <button
        onClick={() => setOpen(!open)}
        className="px-2 py-1 text-xl transition rounded hover:bg-gray-100"
      >
        🌐
      </button>

      {/* Dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute right-0 w-40 p-2 mt-2 bg-white rounded-lg shadow-lg dark:bg-gray-800"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="block w-full px-3 py-2 text-left rounded hover:bg-gray-100"
            >
              {lang.label}
            </button>
          ))}
        </motion.div>
      )}

    </div>
  );
}

export default LanguageSelector;