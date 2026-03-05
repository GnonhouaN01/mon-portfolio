import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
  index: number;
}

export default function SkillBadge(props: Readonly<SkillBadgeProps>) {
  const { skill, index } = props;
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.02 }}
      whileHover={{ scale: 1.1, backgroundColor: "#2563eb", color: "#fff" }}
      className="px-4 py-2 bg-dark-secondary text-light/80 rounded-xl text-sm font-medium border border-white/10 hover:border-primary/50 transition-all cursor-default"
    >
      {skill}
    </motion.span>
  );
}