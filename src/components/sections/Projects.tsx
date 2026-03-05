import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { projects } from "../../data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  // Extraire les catégories uniques
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(projects.map(p => p.category)));
    return ["Tous", ...uniqueCategories];
  }, []);

  // Filtrer les projets basé sur la catégorie sélectionnée
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "Tous") {
      return projects;
    }
    return projects.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Projets" 
          subtitle="Mes réalisations"
        />

        {/* Filtres par catégorie */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-dark shadow-lg shadow-primary/50"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grille de projets filtrés */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.mainImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
                  
                  {/* Badge de catégorie */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="primary" size="sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech.name} variant="secondary" size="sm">
                        {tech.name}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" size="sm">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    {/* bouton code source */}
                    <a
                      href={project.githubUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${
                        project.githubUrl
                          ? "bg-gray-800 hover:bg-primary"
                          : "bg-gray-700 cursor-not-allowed opacity-50"
                      }`}
                      onClick={(e) => {
                        if (!project.githubUrl) e.preventDefault();
                      }}
                    >
                      <FiGithub size={16} />
                      Code source
                    </a>

                    {/* bouton demo */}
                    <a
                      href={project.demoUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${
                        project.demoUrl
                          ? "bg-gray-800 hover:bg-primary"
                          : "bg-gray-700 cursor-not-allowed opacity-50"
                      }`}
                      onClick={(e) => {
                        if (!project.demoUrl) e.preventDefault();
                      }}
                    >
                      <FiExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}