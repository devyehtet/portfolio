'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa'
import { sendEmail } from './actions'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Contact from '@/components/Contact'

export default function Home() {
  const [formStatus, setFormStatus] = useState<{ success?: boolean; message?: string } | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const result = await sendEmail(formData)
    setFormStatus(result)
  }

  return (
    <div className="min-h-screen flex flex-col bg-emerald-950 text-white">
      <header className="bg-emerald-900 p-4 sticky top-0 z-50">
        <nav className="container mx-auto">
          <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4 md:space-x-6 text-sm sm:text-base md:text-lg">
            {['About', 'Services', 'Skills', 'Experience', 'Education', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-emerald-300 transition-colors px-2 py-1">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        <section id="about" className="text-center py-12 sm:py-16 md:py-20 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8"
          >
            <Image
              src="/YHA.jpeg"
              alt="Ye Htet Aung"
              width={200}
              height={200}
              className="rounded-full mx-auto border-4 border-emerald-500"
              priority
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 font-funnel-display"
          >
            Ye Htet Aung
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl sm:text-2xl text-emerald-400 mb-3 sm:mb-4 font-funnel-display"
          >
            Digital Marketing Manager
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base"
          >
            A Digital Marketing Expert with extensive experience in crafting and executing 
            data-driven strategies. Specialized in campaign optimization, performance marketing, and 
            delivering measurable results across multiple platforms.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center space-x-4 sm:space-x-6"
          >
            {[
              { Icon: FaGithub, href: 'https://github.com/devyehtet', label: 'GitHub' },
              { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/y3htetaung/', label: 'LinkedIn' },
              { Icon: FaFacebook, href: 'https://www.facebook.com/profile.php?id=61559225011515', label: 'Facebook' },
              { Icon: FaEnvelope, href: 'mailto:info@yehtet.com', label: 'Email' }
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-3xl hover:text-emerald-400 transition-colors"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </motion.div>
        </section>

        <Services />
        <Skills />
        <Experience />
        <Education />
        <Contact onSubmit={handleSubmit} formStatus={formStatus} />
      </main>

      <footer className="bg-emerald-900 py-4 text-center text-sm sm:text-base">
        <p>&copy; {new Date().getFullYear()} Ye Htet Aung. All rights reserved.</p>
      </footer>
    </div>
  )
}