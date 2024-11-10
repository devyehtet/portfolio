import { motion } from 'framer-motion'
import { FaSearch, FaAd, FaFacebookF, FaPencilAlt, FaEnvelope, FaHandshake, FaChartLine, FaStar } from 'react-icons/fa'

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "Improve your website's visibility in search engines like Google.",
    icon: FaSearch,
    tools: "Google Analytics, SEMrush, Ahrefs, Moz, Screaming Frog, Google Search Console"
  },
  {
    title: "Pay-Per-Click (PPC) Advertising",
    description: "Drive targeted traffic to your website and increase conversions quickly.",
    icon: FaAd,
    tools: "Google Ads, Facebook Ads Manager, Bing Ads, Google Tag Manager, Google Analytics"
  },
  {
    title: "Social Media Marketing & Management",
    description: "Build brand awareness, engage with customers, and drive traffic through social media.",
    icon: FaFacebookF,
    tools: "Hootsuite, Buffer, Sprout Social, Canva, Adobe Photoshop, Facebook Insights"
  },
  {
    title: "Content Marketing",
    description: "Build trust, engage your audience, and drive traffic through valuable content.",
    icon: FaPencilAlt,
    tools: "WordPress, Google Docs, Buzzsumo, Canva, YouTube, HubSpot, Mailchimp"
  },
  {
    title: "Email Marketing",
    description: "Nurture leads and increase conversions through effective email campaigns.",
    icon: FaEnvelope,
    tools: "Mailchimp, Klaviyo, ConvertKit, HubSpot, ActiveCampaign, SendGrid"
  },
  {
    title: "Affiliate Marketing",
    description: "Generate sales through partnerships with affiliates who promote your products or services.",
    icon: FaHandshake,
    tools: "Refersion, ShareASale, Rakuten Marketing, Post Affiliate Pro"
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    description: "Improve website performance and increase the percentage of visitors who convert into customers.",
    icon: FaChartLine,
    tools: "Hotjar, Optimizely, Google Optimize, Unbounce"
  },
  {
    title: "Online Reputation Management",
    description: "Monitor and improve your online presence, handle customer reviews, and manage public perception.",
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
          className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 funnel-display-heading"
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
              <h3 className="text-lg sm:text-xl font-semibold mb-2 funnel-display-subheading">{service.title}</h3>
              <p className="text-emerald-100 mb-3 sm:mb-4 text-sm sm:text-base funnel-display-body">{service.description}</p>
              <div className="text-xs sm:text-sm text-emerald-300 funnel-display-body">
                <strong>Tools & Technologies:</strong> {service.tools}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}