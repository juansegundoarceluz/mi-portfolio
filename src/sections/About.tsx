import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-white dark:bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl px-6 mx-auto"
      >
        {/* Título */}
        <h2 className="mb-10 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
          {t("about.title")}
        </h2>

        <div className="grid items-center gap-10 md:grid-cols-2">

          {/* Texto */}
          <div>
            <p className="mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
              {t("about.text1")}
            </p>

            <p className="mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
              {t("about.text2")}
            </p>

            <p className="mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
              {t("about.text3")}
            </p>
          </div>

          {/* Tecnologías */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              {t("about.tech")}
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "TypeScript",
                "Node.js",
                "Express",
                "PostgreSQL",
                "Tailwind CSS",
                "Git",
                "REST APIs",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-medium transition bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default About;