import { Navbar } from './navbar'
import { Footer } from './footer'
import { motion } from 'framer-motion'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex-grow pt-16"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  )
}