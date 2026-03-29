import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

function Navbar() {
    const { t } = useTranslation();

    return (

        <nav className="z-50 transition-colors border-b border-gray-200 shadow-sm bg-white/90 dark:bg-gray-900/80 backdrop-blur-md dark:border-gray-800">
            {/* contenido */}

            <div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">

                {/* Logo */}
                <h1 className="text-xl font-bold tracking-tight dark:text-white ">
                    Juan Segundo Arceluz
                </h1>

                {/* Derecha */}
                <div className="flex items-center gap-6">

                    {/* Links */}
                    <ul className="flex gap-6 font-medium text-gray-700 dark:text-gray-300">
                        <li>
                            <a href="#about" className="transition hover:text-blue-500 dark:hover:text-blue-400">
                                {t("navbar.about")}
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="transition hover:text-blue-500 dark:hover:text-blue-400">
                                {t("navbar.projects")}
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="transition hover:text-blue-500">
                                {t("navbar.contact")}
                            </a>
                        </li>
                    </ul>

                    {/* Idioma + tema */}
                    <div className="flex items-center gap-4">
                        <LanguageSelector />

                    </div>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;