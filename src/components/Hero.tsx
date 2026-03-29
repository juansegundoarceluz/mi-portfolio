import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animation";


function Hero() {
  const { t } = useTranslation();

  return (
    <section className="flex items-center justify-center h-screen bg-linear-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-900">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.25,
            },
          },
        }}
        className="max-w-3xl px-6 text-center">



        <motion.h2 variants={fadeUp} className="mb-6 text-5xl font-bold leading-tight text-gray-900 md:text-6xl dark:text-gray-100" >
          {t("hero.title")}{" "}
          <span className="text-blue-500">Juan Segundo Arceluz</span>
        </motion.h2>

        <motion.p variants={fadeUp} className="mb-8 text-lg text-gray-600 md:text-xl dark:text-gray-300">
          {t("hero.subtitle")}
        </motion.p>

        <motion.div variants={fadeUp} className="flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 text-white transition transform bg-blue-500 rounded-lg hover:bg-blue-600 hover:scale-105"
          >
            {t("hero.projectsBtn")}
          </a>

          <a
            href="#contact"
            className="px-6 py-3 text-gray-900 transition transform border border-gray-300 rounded-lg dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 dark:text-gray-100"
          >
            {t("hero.contactBtn")}
          </a>
        </motion.div>

      </motion.div>
    </section >
  );
}

export default Hero;