import { skillCategories } from '../data/skills';
import { motion } from 'framer-motion';

export default function SkillSection() {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
      {skillCategories.map((cat, i) => (
        <motion.div
          key={cat.name}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          <h3
            className="mb-3 font-mono text-xs uppercase tracking-wider"
            style={{ color: 'rgb(var(--color-text-faint))' }}
          >
            {cat.name}
          </h3>
          <div className="space-y-1.5">
            {cat.skills.map((skill) => (
              <p
                key={skill}
                className="text-sm"
                style={{ color: 'rgb(var(--color-text-muted))' }}
              >
                {skill}
              </p>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
