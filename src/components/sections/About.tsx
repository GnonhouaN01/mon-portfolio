import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import { FiAward, FiBookOpen } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";


export default function About() {
  return (
    <section id="about" className="py-20 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="À Propos" 
          subtitle="Qui suis-je ?"
          align="center"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-96"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-90 h-90 mx-auto rounded-2xl overflow-hidden border-4 border-primary/30 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow object-center"
            >
              <img 
                src="src/assets/images/profile.jpeg" 
                alt="Ouattara Gnonhoua"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-30" />
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary rounded-tl-2xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary rounded-br-2xl" />
            
            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-0 left-0 z-20 bg-dark-light p-4 rounded-xl border border-gray-800 shadow-xl hover:shadow-lg hover:border-primary/50 transition-all"
            >
              <p className="text-2xl font-bold text-primary">2+</p>
              <p className="text-sm text-gray-400">Années d'expérience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-0 right-0 z-20 bg-dark-light p-4 rounded-xl border border-gray-800 shadow-xl hover:shadow-lg hover:border-primary/50 transition-all"
            >
              <p className="text-2xl font-bold text-primary">10+</p>
              <p className="text-sm text-gray-400">Projets réalisés</p>
            </motion.div>
          </motion.div>

          {/* Bio and Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              Passionné par le code, l'UX et les architectures modernes.
            </h3>
            
            <p className="text-gray-300 leading-relaxed">
              Je m'appelle Ouattara Gnonhoua, et je suis un développeur full-stack avec plus de <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-400 ">2 ans</span> d'expérience dans la création 
              d'applications web et mobile performantes et évolutives.Diplome de <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-400 " title="Ecole Superieur africaine des Technologies de l'information et de la Telecommunication">ESATIC</span> avec la mention bien Spécialisé dans les 
              technologies JavaScript modernes, j'accorde une importance particulière 
              à l'expérience utilisateur et à la qualité du code.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Titulaire d'une Licence en <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-400 " title="Technologies du web et Image Numerique">TWIN</span> optenu avec la mention bien et de plusieurs certifications 
              professionnelles, je continue constamment à me former aux nouvelles 
              technologies pour offrir les meilleures solutions à mes clients.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                variant="outline" 
                onClick={() => document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2"
              >
                <FiAward /> Voir Mes Certifications
              </Button>
              <Button 
                variant="ghost"
                className="flex items-center gap-2"
              >
                <FiBookOpen /> Voir Mon Diplôme
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/0718959592?text=Bonjour%20Ouattara%20Gnonhoua%2C%20je%20suis%20intéressé%20par%20vos%20services%20de%20développement.%20Pouvez-vous%20me%20fournir%20plus%20d'informations%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 z-50 flex items-center justify-center"
        aria-label="Contact WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </section>
  );
}