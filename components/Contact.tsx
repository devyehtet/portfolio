import { motion } from 'framer-motion'

interface ContactProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  formStatus: { success?: boolean; message?: string } | null;
}

export default function Contact({ onSubmit, formStatus }: ContactProps) {
  return (
    <section id="contact" className="py-20 bg-emerald-900">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl mb-12 max-w-2xl mx-auto"
        >
          Based in Chiang Mai, Thailand. Open to new opportunities and collaborations.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={onSubmit}
          className="max-w-md mx-auto"
        >
          <div className="mb-4">
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
          <div className="mb-4">
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
          <div className="mb-4">
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
        </motion.form>
        {formStatus && (
          <div className={`mt-4 ${formStatus.success ? 'text-green-400' : 'text-red-400'}`}>
            {formStatus.message}
          </div>
        )}
      </div>
    </section>
  )
}