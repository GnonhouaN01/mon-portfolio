import { motion } from "framer-motion";
import { FiExternalLink, FiAward } from "react-icons/fi";

interface CertificateCardProps {
  certificate: {
    id: number;
    title: string;
    issuer: string;
    date: string;
    image: string;
    credentialId: string;
  };
  index: number;
}

export default function CertificateCard(props: Readonly<CertificateCardProps>) {
  const { certificate, index } = props;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-dark-secondary/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <FiAward className="text-primary text-2xl" />
        </div>
        <span className="text-sm text-primary/60">{certificate.date}</span>
      </div>
      
      <h3 className="text-lg font-semibold text-light mb-2 group-hover:text-primary transition-colors">
        {certificate.title}
      </h3>
      
      <p className="text-light/60 text-sm mb-4">{certificate.issuer}</p>
      
      <div className="flex items-center justify-between">
        <span className="text-xs text-light/40">ID: {certificate.credentialId}</span>
        <FiExternalLink className="text-light/40 group-hover:text-primary transition-colors cursor-pointer" />
      </div>
    </motion.div>
  );
}