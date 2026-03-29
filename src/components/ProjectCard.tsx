import type { Project } from "../types/projects";
import { useTranslation } from "react-i18next";
import { fadeUp } from "../utils/animation";
import { motion } from "framer-motion";


interface Props {
  project: Project;
}

function ProjectCard({ project }: Props) {
  const { t } = useTranslation();


  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.4 }}
      className="p-6 bg-white shadow-md dark:bg-gray-800 rounded-2xl group hover:shadow-2xl hover:border hover:border-blue-500/30"
    >

      <h3 className="mb-2 text-xl font-semibold text-gray-900 transition dark:text-white group-hover:text-blue-500">
        {t(`projectsData.${project.id}.name`)}
      </h3>

      <p className="mb-4 text-gray-600 dark:text-gray-300">
        {t(`projectsData.${project.id}.description`)}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a href={project.github} className="text-blue-500 hover:underline">
          GitHub
        </a>
        <a href={project.demo} className="text-blue-500 hover:underline">
          Demo
        </a>
      </div>

    </motion.div>
  );
}

export default ProjectCard;