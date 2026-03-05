import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { certificates } from "../../data/certificates";
import { FiExternalLink, FiAward, FiBook, FiCheckCircle } from "react-icons/fi";

export default function Certificates() {
  const getTypeInfo = (type: string) => {
    const info: Record<string, { label: string; icon: React.ReactNode }> = {
      diploma: { 
        label: "Diplôme", 
        icon: <FiBook size={16} />
      },
      certification: { 
        label: "Certification", 
        icon: <FiAward size={16} />
      },
      training: { 
        label: "Formation", 
        icon: <FiCheckCircle size={16} />
      }
    };
    return info[type] || info.certification;
  };

  const handleDownload = (downloadUrl?: string, title?: string) => {
    if (!downloadUrl) return;
    
    const link = document.createElement('a');
    link.href = downloadUrl;
    // use replaceAll for better performance according to SonarQube
    const safeTitle = title
      ? title.replaceAll(/[^a-zA-Z0-9]/g, '_')
      : 'document';
    link.download = `${safeTitle}.pdf`;
    document.body.appendChild(link);
    link.click();
    // remove element via DOM method recommended by SonarQube
    link.remove();
  };

  return (
    <section id="certificates" className="py-20 bg-dark-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Diplômes & Certifications" 
          subtitle="Ma formation"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => {
            const typeInfo = getTypeInfo(cert.type);
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center p-6 relative overflow-hidden h-full flex flex-col">
                  {/* Type Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${cert.badgeColor}`}>
                      {typeInfo.icon}
                      <span>{typeInfo.label}</span>
                    </div>
                  </div>

                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full flex items-center justify-center">
                    <FiAward size={32} className="text-primary" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {cert.title}
                  </h3>
                  
                  <p className="text-primary font-medium mb-1">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-gray-400 text-sm mb-4">
                    {cert.date}
                  </p>

                  {cert.credential && (
                    <a
                      href={cert.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors mb-4"
                    >
                      <FiExternalLink /> Voir le certificat
                    </a>
                  )}

                  <div className="mt-auto pt-4 border-t border-gray-800">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => handleDownload(cert.downloadUrl, cert.title)}
                      disabled={!cert.downloadUrl}
                    >
                      Télécharger
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-4">
            Formations complémentaires
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Principes SOLID ",
              "Node.js Microservices",
              "TypeScript ",
              "GraphQL with Apollo",
              "Structure de Données et Algorithmes",
              "Docker & Kubernetes",
              "Gestion de Projet Agile",
              "UI/UX Design",
              "Gestion de conflits",
              "Git & GitHub",
              "Communication efficace",
            ].map((training) => (
              <Badge
                key={training}
                variant="outline"
                size="md"
                className="transition-colors hover:bg-primary hover:text-dark cursor-pointer"
              >
                {training}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}