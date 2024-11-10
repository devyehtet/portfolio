import { motion } from 'framer-motion'

const experiences = [
  {
    period: "May 2022 - Nov 2024",
    company: "Starcom Digital (Myanmar)",
    position: "Digital Marketing Manager",
    description: "Leading strategic digital marketing initiatives, managing multi-channel campaigns, and optimizing performance across platforms."
  },
  {
    period: "Nov 2019 - Mar 2022",
    company: "Senior Operation Manager",
    position: "Senior Operation Manager",
    description: "Managed team deliverables, established optimization approaches, and ensured high standards of campaign performance."
  },
  {
    period: "Jul 2017 - Apr 2019",
    company: "Passion Point Media Ltd",
    position: "Senior Digital Media Buyer / Planner",
    description: "Developed media strategies, managed client relationships, and executed multi-platform advertising campaigns."
  },
  {
    period: "Feb 2016 - May 2017",
    company: "City Mart Holding.ltd",
    position: "Digital Marketing Specialist",
    description: "Drive impactful digital marketing strategies to enhance brand visibility, optimize campaigns, and grow audience engagement across multiple online platforms."
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-emerald-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Work Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.period}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-8 bg-emerald-800 rounded-lg p-6 hover:shadow-lg hover:shadow-emerald-500/20 transition-shadow"
            >
              <div className="text-emerald-400 mb-2">{exp.period}</div>
              <h3 className="text-xl font-bold mb-2">{exp.position}</h3>
              <div className="text-emerald-200 mb-2">{exp.company}</div>
              <p className="text-emerald-100">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}