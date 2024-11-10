import { motion } from 'framer-motion'
import { FaSearch, FaAd, FaFacebookF, FaPencilAlt, FaEnvelope, FaHandshake, FaChartLine, FaStar } from 'react-icons/fa'

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "Improve your website's visibility in search engines like Google. Implementing proven SEO strategies to increase organic traffic and rankings.",
    icon: FaSearch,
    tools: "Google Analytics, SEMrush, Ahrefs, Moz, Screaming Frog, Google Search Console"
  },
  {
    title: "Pay-Per-Click (PPC) Advertising",
    description: "Strategic PPC campaign management across Google Ads and social platforms. Maximizing ROI through data-driven optimization.",
    icon: FaAd,
    tools: "Google Ads, Facebook Ads Manager, Bing Ads, Google Tag Manager, Google Analytics"
  },
  {
    title: "Social Media Marketing & Management",
    description: "Comprehensive social media strategy development and execution. Building engaged communities and driving meaningful interactions.",
    icon: FaFacebookF,
    tools: "Hootsuite, Buffer, Sprout Social, Canva, Adobe Photoshop, Facebook Insights"
  },
  {
    title: "Content Marketing",
    description: "Creating and distributing valuable, relevant content to attract and retain customers. Developing content strategies that resonate with target audiences.",
    icon: FaPencilAlt,
    tools: "WordPress, Google Docs, Buzzsumo, Canva, YouTube, HubSpot, Mailchimp"
  },
  {
    title: "Email Marketing",
    description: "Designing and implementing effective email campaigns. Segmentation, automation, and personalization to drive engagement and conversions.",
    icon: FaEnvelope,
    tools: "Mailchimp, Klaviyo, ConvertKit, HubSpot, ActiveCampaign, SendGrid"
  },
  {
    title: "Affiliate Marketing",
    description: "Building and managing successful affiliate programs. Partner recruitment, relationship management, and performance optimization.",
    icon: FaHandshake,
    tools: "Refersion, ShareASale, Rakuten Marketing, Post Affiliate Pro"
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    description: "Data-driven optimization of conversion funnels. A/B testing, user experience improvements, and conversion path analysis.",
    icon: FaChartLine,
    tools: "Hotjar, Optimizely, Google Optimize, Unbounce"
  },
  {
    title: "Online Reputation Management",
    description: "Proactive management of brand reputation online. Review monitoring, crisis management, and brand sentiment improvement.",
    icon: FaStar,
    tools: "Google Alerts, Hootsuite, Brand24, Mention, BuzzSumo"
  }
]

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-emerald-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12"
        >
          Digital Marketing Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-emerald-800 rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="text-3xl sm:text-4xl text-emerald-400 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-emerald-100 mb-3 sm:mb-4 text-sm sm:text-base">{service.description}</p>
              <div className="text-xs sm:text-sm text-emerald-300">
                <strong>Tools & Technologies:</strong> {service.tools}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}