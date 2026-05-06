import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    items: ["C", "C++", "Python", "Java (basic)"],
  },
  {
    title: "Web",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Tools",
    items: ["React", "VS Code"],
  },
  {
    title: "Concepts",
    items: ["OOP", "Data Structures (basic)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-950 text-slate-950 py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-sky-600">
            
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold mb-4 sm:mb-6 leading-tight text-[#D2C1B6]">
            My Skills
          </h2>
        </motion.div>

        <motion.div
          className="space-y-6 sm:space-y-8 text-lg sm:text-xl text-white"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {skillGroups.map((group) => (
            <div key={group.title}>
              <p className="font-semibold uppercase tracking-[0.2em] text-[#D2C1B6] mb-2">
                {group.title}:
              </p>
              <p className="space-y-2 leading-8">
                {group.items.join(", ")}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
