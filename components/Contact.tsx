import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

interface ContactProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  formStatus: { success?: boolean; message?: string } | null;
}

export default function Contact({ onSubmit, formStatus }: ContactProps) {
  return (
    <section id="contact" className="py-20 bg-emerald-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl mb-12 max-w-2xl mx-auto text-center"
        >
          Based in Chiang Mai, Thailand. Open to new opportunities and collaborations.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-emerald-400 text-2xl mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-emerald-200">Chiang Mai, Thailand</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaPhone className="text-emerald-400 text-2xl mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-emerald-200">+66 (0) 941-567-809</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="text-emerald-400 text-2xl mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-emerald-200">info@yehtet.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-emerald-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 text-emerald-900 bg-emerald-100 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-emerald-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 text-emerald-900 bg-emerald-100 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-emerald-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 py-2 text-emerald-900 bg-emerald-100 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white font-bold py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
            {formStatus && (
              <div className={`mt-4 text-center ${formStatus.success ? 'text-green-400' : 'text-red-400'}`}>
                {formStatus.message}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}