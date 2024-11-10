import { motion } from 'framer-motion'
import { MdSchool, MdWorkOutline } from 'react-icons/md'

const education = {
  degree: "Bachelor's Degree",
  graduationYear: 2012,
  school: "Dagon University",
  faculty: "Physics",
  major: "Physics",
  degreeType: "B.Sc",
  gpa: 8,
  achievements: [
    "Graduated with honors",
    "Member of Physics Society",
    "Participated in research projects",
    "Academic excellence award recipient"
  ]
}

const certificates = [
  { 
    name: "Google Ads - Measurement Certification",
    issuer: "Google",
    period: "2024",
    description: "Advanced measurement and analytics in Google Ads"
  },
  { 
    name: "Google Ads Apps Certification",
    issuer: "Google",
    period: "2024",
    description: "Mobile app advertising and promotion strategies"
  },
  { 
    name: "Display & Video 360 Certification",
    issuer: "Google",
    period: "2024",
    description: "Programmatic advertising and campaign management"
  },
  { 
    name: "Campaign Manager 360 Certification",
    issuer: "Google",
    period: "2024",
    description: "Advanced campaign management and optimization"
  },
  { 
    name: "AI-Powered Performance Ads",
    issuer: "Meta",
    period: "2024",
    description: "AI and machine learning in advertising optimization"
  }
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-emerald-950">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Education & Certifications
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 bg-emerald-900 rounded-lg p-6 hover:shadow-lg hover:shadow-emerald-500/20 transition-shadow"
          >
            <div className="flex items-center mb-6">
              <MdSchool className="text-4xl text-emerald-400 mr-4" />
              <div>
                <h3 className="text-2xl font-bold">{education.degree}</h3>
                <p className="text-emerald-400">{education.school}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-emerald-100 mb-6">
              <p><strong>Faculty:</strong> {education.faculty}</p>
              <p><strong>Major:</strong> {education.major}</p>
              <p><strong>Degree:</strong> {education.degreeType}</p>
              <p><strong>GPA:</strong> {education.gpa}</p>
              <p><strong>Graduation Year:</strong> {education.graduationYear}</p>
            </div>
            <div>
              <h4 className="font-semibold text-emerald-400 mb-2">Achievements:</h4>
              <ul className="list-disc list-inside text-emerald-200 space-y-1">
                {education.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          <h3 className="text-2xl font-bold mb-6">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-emerald-900 rounded-lg p-6 hover:shadow-lg hover:shadow-emerald-500/20 transition-shadow"
              >
                <div className="flex items-start">
                  <MdWorkOutline className="text-2xl text-emerald-400 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">{cert.name}</h4>
                    <p className="text-sm text-emerald-300 mb-2">Issuer: {cert.issuer}</p>
                    <p className="text-sm text-emerald-200">{cert.description}</p>
                    <p className="text-sm text-emerald-400 mt-2">{cert.period}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}