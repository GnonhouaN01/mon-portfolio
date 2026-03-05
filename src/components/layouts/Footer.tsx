import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-dark-light border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray- mb-2">
              OG2NX
            </h3>
            <p className="text-gray-400">
              Développeur Full-Stack passionné par les technologies modernes
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-primary transition-colors"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-primary transition-colors"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-primary transition-colors"
            >
              <FiTwitter size={20} />
            </a>
            <a
              href="mailto:contact@ouattara.dev"
              className="p-3 bg-gray-800 rounded-full hover:bg-primary transition-colors"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Ouattara Gnonhoua. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}