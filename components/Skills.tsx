import { motion } from 'framer-motion'
import { MdOutlineAutoGraph, MdManageSearch, MdCampaign, MdAnalytics, MdGroups, MdTrendingUp, MdAttachMoney, MdSpeed } from 'react-icons/md'

const skills = [
  { name: 'Digital Marketing Strategy', color: '#10B981', Icon: MdOutlineAutoGraph },
  { name: 'Paid Advertising (PPC)', color: '#059669', Icon: MdCampaign },
  { name: 'SEM (Search Engine Marketing)', color: '#047857', Icon: MdManageSearch },
  { name: 'Analytics & Reporting', color: '#065F46', Icon: MdAnalytics },
  { name: 'Social Media Management', color: '#064E3B', Icon: MdGroups },
  { name: 'Campaign Optimization', color: '#047857', Icon: MdTrendingUp },
  { name: 'Budget Management', color: '#059669', Icon: MdAttachMoney },
  { name: 'Performance Marketing', color: '#10B981', Icon: MdSpeed },
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map(({ name, color, Icon }, index) => (
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
              <h3 className="text-sm font-semibold">{name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}