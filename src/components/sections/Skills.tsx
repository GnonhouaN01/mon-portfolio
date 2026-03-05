import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { FiCode, FiCpu, FiTool } from "react-icons/fi";

export default function Skills() {
  const technologies = [
    { name: "React", category: "Frontend", icon: "⚛️" },
    { name: "Next.js", category: "Frontend", icon: "▲" },
    { name: "TypeScript", category: "Frontend", icon: "TS" },
    { name: "Vue.js", category: "Frontend", icon: "◆" },
    { name: "TailwindCSS", category: "Frontend", icon: "🎨" },
    { name: "Redux", category: "Frontend", icon: "🔄" },
    { name: "Node.js", category: "Backend", icon: "⬢" },
    { name: "Express", category: "Backend", icon: "✙" },
    { name: "PostgreSQL", category: "Backend", icon: "🐘" },
    { name: "MongoDB", category: "Backend", icon: "🍃" },
    { name: "Django", category: "Backend", icon: "🐍" },
    { name: "Laravel", category: "Backend", icon: "🔴" },
    { name: "Git", category: "DevTools", icon: "🌳" },
    { name: "Docker", category: "DevTools", icon: "🐳" },
    { name: "AWS", category: "DevTools", icon: "☁️" },
    { name: "Jest", category: "DevTools", icon: "✓" }
  ];

  const categories = [
    { name: "Frontend", icon: <FiCode size={20} />, count: 6 },
    { name: "Backend", icon: <FiCpu size={20} />, count: 6 },
    { name: "DevTools", icon: <FiTool size={20} />, count: 4 }
  ];

  return (
    <section id="skills" className="py-20 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Compétences" 
          subtitle="Mon expertise technique"
        />

        {/* Category Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-dark-light/50 to-dark/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-primary group-hover:text-blue-300 transition-colors">
                  {category.icon}
                </span>
                <span className="text-3xl font-bold text-primary">{category.count}</span>
              </div>
              <h4 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                {category.name}
              </h4>
              <p className="text-sm text-gray-400">technologies</p>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Technologies maîtrisées
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-dark-light to-dark rounded-2xl p-6 border border-gray-800 hover:border-primary transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-default">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                  
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <h4 className="text-white font-semibold text-sm text-center group-hover:text-primary transition-colors duration-300">
                      {tech.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-2 group-hover:text-gray-400 transition-colors">
                      {tech.category}
                    </p>
                  </div>

                  {/* Animated border on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-blue-500 to-primary bg-[length:200%_200%] animate-gradient opacity-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-20 pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl opacity-20 pointer-events-none" />
      </div>
    </section>
  );
}