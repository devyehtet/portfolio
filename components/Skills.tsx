import { motion } from 'framer-motion'
import { MdOutlineAutoGraph, MdManageSearch, MdCampaign, MdAnalytics, MdGroups, MdTrendingUp, MdAttachMoney, MdSpeed } from 'react-icons/md'

const skills = [
  {
    name: 'Digital Marketing Strategy',
    description: 'Developing comprehensive digital marketing strategies aligned with business objectives',
    level: 95,
    color: '#10B981',
    Icon: MdOutlineAutoGraph
  },
  {
    name: 'Paid Advertising (PPC)',
    description: 'Managing and optimizing paid campaigns across multiple platforms',
    level: 90,
    color: '#059669',
    Icon: MdCampaign
  },
  {
    name: 'SEM (Search Engine Marketing)',
    description: 'Implementing effective search marketing campaigns',
    level: 85,
    color: '#047857',
    Icon: MdManageSearch
  },
  {
    name: 'Analytics & Reporting',
    description: 'Data analysis and creating actionable insights',
    level: 90,
    color: '#065F46',
    Icon: MdAnalytics
  },
  {
    name: 'Social Media Management',
    description: 'Strategic social media planning and community management',
    level: 88,
    color: '#064E3B',
    Icon: MdGroups
  },
  {
    name: 'Campaign Optimization',
    description: 'Continuous improvement of campaign performance',
    level: 92,
    color: '#047857',
    Icon: MdTrendingUp
  },
  {
    name: 'Budget Management',
    description: 'Efficient allocation and management of marketing budgets',
    level: 95,
    color: '#059669',
    Icon: MdAttachMoney
  },
  {
    name: 'Performance Marketing',
    description: 'Results-driven marketing focused on key metrics',
    level: 93,
    color: '#10B981',
    Icon: MdSpeed
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-emerald-950">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ name, description, level, color, Icon }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-emerald-900 rounded-lg p-6 text-center hover:shadow-lg hover:shadow-emerald-500/20 transition-all hover:-translate-y-1"
            >
              <motion.div 
                className="text-4xl mb-4"
                style={{ color }}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">{name}</h3>
              <p className="text-sm text-emerald-300 mb-4">{description}</p>
              <div className="w-full bg-emerald-800 rounded-full h-2.5">
                <div 
                  className="bg-emerald-500 h-2.5 rounded-full transition-all duration-1000"
                  style={{ width: `${level}%` }}
                />
              </div>
              <span className="text-sm text-emerald-400 mt-2 inline-block">{level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}