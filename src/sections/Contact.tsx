import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animation";

function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 transition-colors bg-white dark:bg-gray-900">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="max-w-4xl px-6 mx-auto text-center"
      >

        <motion.h2 variants={fadeUp} className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
          {t("contact.title")}
        </motion.h2>

        <motion.p variants={fadeUp} className="mb-10 text-gray-600 dark:text-gray-300">
          {t("contact.subtitle")}
        </motion.p>

        {/* Formulario */}
        <motion.form variants={fadeUp} className="flex flex-col gap-4 text-left">

          <input
            type="text"
            placeholder={t("contact.name")}
            className="p-3 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder={t("contact.email")}
            className="p-3 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder={t("contact.message")}
            rows={5}
            className="p-3 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="py-3 text-white transition bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            {t("contact.button")}
          </button>

        </motion.form>

        {/* Links */}
        <div className="flex justify-center gap-6 mt-10">
          <a href="#" className="text-blue-500 hover:underline dark:text-blue-400">
            GitHub
          </a>
          <a href="#" className="text-blue-500 hover:underline dark:text-blue-400">
            LinkedIn
          </a>
        </div>

      </motion.div>
    </section>
  );
}

export default Contact;