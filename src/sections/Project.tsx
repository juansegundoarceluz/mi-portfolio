import { projects } from "../data/Projects";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects" className="py-24 transition-colors bg-gray-50 dark:bg-gray-900">
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
        className="max-w-6xl px-6 mx-auto"
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 },
          }}
          className="mb-12 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white"
        >
          Proyectos
        </motion.h2>

      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

    </motion.div>
    </section >
  );
}

export default Projects;