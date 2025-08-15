'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, CodeIcon, ExternalLink, StarIcon } from 'lucide-react';

// Import Orbitron font
const orbitronFont = {
  fontFamily: 'Orbitron, monospace'
};

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity
      }
    }
  };

  return (
    <main className="flex flex-1 flex-col justify-left text-left px-4 sm:px-6 py-8 sm:py-16 relative overflow-hidden">
      {/* Google Fonts import for Orbitron */}
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-blue-100/30 dark:from-blue-950/50 dark:via-transparent dark:to-blue-950/20 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        {/* Announcement Banner */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8 max-w-5xl mx-auto w-fit">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-2 sm:space-x-3 rounded-2xl bg-blue-50 dark:bg-blue-950/20 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/30 p-2 sm:p-3 shadow-lg"
          >
            {/* ⭐ Left-aligned star icon */}
            <StarIcon className='w-4 h-4 text-blue-200 dark:text-blue-400 flex-shrink-0'/>
             
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-300">
                <span className="font-medium">New docs is out!</span> 
                <span className="hidden sm:inline"> Explore our updated documentation with improved guides and examples.</span>
                <span className="sm:hidden"> Check out our updated docs.</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-6 sm:mt-8 max-w-5xl mx-auto">
          <div className="text-center">
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white"
              style={orbitronFont}
            >
              Dezer<motion.span
                className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                X
              </motion.span> Documentation
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-4 sm:mt-6 text-base sm:text-lg leading-6 sm:leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2"
            >
              Comprehensive documentation and API reference for DezerX framework. Get started with our guides,
              explore API endpoints, and learn how to build powerful applications with DezerX.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 px-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/docs/framework/getting-started"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-blue-300 dark:bg-blue-950/50 px-6 py-3 rounded-2xl border border-blue-300/10 dark:border-blue-600/40 text-sm sm:text-base"
                >
                  <span>Getting Started</span>
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="w-full sm:w-auto"
              >
                <Link
                  href="/docs/API/services/activate_service"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-2xl text-sm sm:text-base"
                >
                  <span>API Documentation</span>
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            variants={itemVariants}
            className="mt-16 sm:mt-24"
          >
            <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3">
              {[
                {
                  icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0118 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
                  title: "Getting Started",
                  description: "Quick setup guides and tutorials to get you up and running with DezerX in minutes."
                },
                {
                  icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
                  title: "API Reference",
                  description: "Complete API documentation with examples, parameters, and response formats."
                },
                {
                  icon: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
                  title: "Best Practices",
                  description: "Security guidelines, performance tips, and recommended patterns for production applications."
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={floatVariants}
                  animate="animate"
                  transition={{ delay: index * 0.2 }}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative rounded-2xl p-4 sm:p-6 bg-blue-50/70 dark:bg-blue-950/20 backdrop-blur-lg shadow-xl hover:shadow-2xl border border-blue-200/30 dark:border-blue-800/30 transition-all duration-300 overflow-hidden cursor-pointer"
                >
                 
                  <div className="relative z-10">
                    <div className="flex items-start sm:items-center">
                      <motion.div
                        className="flex-shrink-0"
                        whileHover={{ rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-400/10 dark:border-blue-800/20 text-black dark:text-blue-400 shadow-lg">
                          <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                          </svg>
                        </div>
                      </motion.div>
                      <div className="ml-3 sm:ml-4 flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-2 sm:mt-3 text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Support Section */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="mt-12 sm:mt-16 rounded-2xl bg-blue-50/70 dark:bg-blue-950/20 backdrop-blur-lg border border-blue-200/30 dark:border-blue-800/30 p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col items-center text-center space-y-6 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center sm:text-left">
              <div className="max-w-xl">
                <motion.h2
                  className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  Need Help?
                </motion.h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Join our community on Discord for support, updates, and discussions with other developers using DezerX.
                </p>
              </div>

              <motion.img
                src="/joinus.png"
                alt="Join us on Discord"
                className="max-w-[200px] sm:max-w-xs w-full h-12 sm:h-16 object-contain flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
