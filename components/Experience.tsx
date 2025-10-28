import { motion } from 'framer-motion'
import { MdWork } from 'react-icons/md'

const experiences = [
  {
    period: "Feb 2025 - Present",
    company: "MCIX Thailand Agency",
    position: "Regional Digital Manager",
    description: "Overseeing digital strategy, campaign execution, and performance optimization across multiple markets. Leading cross-functional teams to drive innovation and achieve business objectives.",
    achievements: [
      "Developed and executed high-impact digital marketing strategies",
      "Managed multi-million-dollar budgets across various digital platforms",
      "Implemented advanced analytics to improve campaign tracking and ROI measurement",
      "Led a team of digital marketing professionals to deliver exceptional results"
    ]
  },

  {
    period: "Nov 2019 - Mar 2022",
    company: "Humology",
    position: "Senior Operation Manager",
    description: "Managed team deliverables, established optimization approaches, and ensured high standards of campaign performance. Oversaw daily operations and team coordination.",
    achievements: [
      "Streamlined operational processes reducing turnaround time by 30%",
      "Developed and implemented new campaign strategies",
      "Improved client satisfaction scores by 40%",
      "Successfully managed 20+ concurrent projects"
    ]
  },
  {
    period: "Jul 2017 - Apr 2019",
    company: "Passion Point Media Ltd",
    position: "Senior Digital Media Buyer / Planner",
    description: "Developed media strategies, managed client relationships, and executed multi-platform advertising campaigns. Focused on performance optimization and ROI improvement.",
    achievements: [
      "Achieved 150% ROI improvement for key clients",
      "Managed digital media budgets of $300,000+",
      "Introduced new targeting strategies",
      "Developed automated reporting systems"
    ]
  },
  {
    period: "Feb 2016 - May 2017",
    company: "City Mart Holding.ltd",
    position: "Digital Marketing Specialist",
    description: "Managed digital marketing strategies to enhance brand visibility, optimize campaigns, and grow audience engagement across multiple online platforms.",
    achievements: [
      "Increased social media engagement by 200%",
      "Implemented successful email marketing campaigns",
      "Improved website traffic by 75%",
      "Established digital marketing best practices"
    ]
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
              <div className="flex items-center mb-4">
                <MdWork className="text-3xl text-emerald-400 mr-4" />
                <div>
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                  <p className="text-emerald-400">{exp.company}</p>
                  <p className="text-sm text-emerald-300">{exp.period}</p>
                </div>
              </div>
              <p className="text-emerald-100 mb-4">{exp.description}</p>
              <div className="space-y-2">
                <h4 className="font-semibold text-emerald-400">Key Achievements:</h4>
                <ul className="list-disc list-inside text-emerald-200 text-sm space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
