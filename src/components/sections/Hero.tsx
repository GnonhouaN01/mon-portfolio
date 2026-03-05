import { motion } from "framer-motion";
import Button from "../ui/Button";
import { FiArrowDown, FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-black" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-sm text-primary">
            👋 Bienvenue sur mon portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Développeur <span className="text-blue-300">Full-Stack Web & Mobile</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Je conçois et développe des applications <span className="text-primary">web</span> et <span className="text-primary">mobiles</span> performantes, modernes et évolutives, en mettant l’accent sur <span className="text-primary">l’expérience utilisateur</span>, la <span className="text-primary">qualité du code</span> et les <span className="text-primary">technologies modernes</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button size="lg" onClick={() => {
            const link = document.createElement('a');
            link.href = '/cv.pdf';
            link.download = 'CV-Ouattara-Gnonhoua.pdf';
            document.body.appendChild(link);
            link.click();
            link.remove();
          }} className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2">
            <FiDownload /> Télécharger mon CV
          </Button>
          <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Contactez-moi
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FiArrowDown size={24} className="text-gray-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}