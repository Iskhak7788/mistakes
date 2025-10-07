'use client''use client'



import { motion } from 'framer-motion'import { motion } from 'framer-motion'

import Link from 'next/link'import Link from 'next/link'

import { Section } from '@/components/ui/containers'import { Section } from '@/components/ui/containers'

import { siteConfig } from '@/config/site'import { siteConfig } from '@/config/site'



export default function Home() {export default function Home() {

  return (  return (

    <>    <>

      <Section className="flex min-h-[calc(100vh-4rem)] items-center">      <Section className="flex min-h-[calc(100vh-4rem)] items-center">

        <div className="flex flex-col gap-8">        <div className="flex flex-col gap-8">

          <motion.div          <motion.div

            initial={{ opacity: 0, y: 20 }}            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.5 }}            transition={{ duration: 0.5 }}

            className="flex max-w-[750px] flex-col gap-4"            className="flex max-w-[750px] flex-col gap-4"

          >          >

            <h1 className="heading-1">            <h1 className="heading-1">

              Hi, I'm {siteConfig.name}              Hi, I'm {siteConfig.name}

              <span className="text-primary-600 dark:text-primary-400">.</span>              <span className="text-primary-600 dark:text-primary-400">.</span>

            </h1>            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400">            <p className="text-xl text-gray-600 dark:text-gray-400">

              I craft elegant solutions through code. Passionate about creating              I craft elegant solutions through code. Passionate about creating

              intuitive and impactful digital experiences that make a difference.              intuitive and impactful digital experiences that make a difference.

            </p>            </p>

          </motion.div>          </motion.div>

            .

          <motion.div          </li>

            initial={{ opacity: 0 }}          <li className="tracking-[-.01em]">

            animate={{ opacity: 1 }}            Save and see your changes instantly.

            transition={{ delay: 0.3, duration: 0.5 }}          </li>

            className="flex flex-wrap gap-4"        </ol>

          >

            <Link href="/projects" className="button-primary">        <div className="flex gap-4 items-center flex-col sm:flex-row">

              View My Work          <a

            </Link>            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"

            <Link href="/contact" className="button-secondary">            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"

              Get in Touch            target="_blank"

            </Link>            rel="noopener noreferrer"

          </motion.div>          >

            <Image

          <motion.div              className="dark:invert"

            initial={{ opacity: 0 }}              src="/vercel.svg"

            animate={{ opacity: 1 }}              alt="Vercel logomark"

            transition={{ delay: 0.6, duration: 0.5 }}              width={20}

            className="flex gap-4"              height={20}

          >            />

            {Object.entries(siteConfig.links).map(([platform, url]) => (            Deploy now

              <a          </a>

                key={platform}          <a

                href={url}            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"

                target="_blank"            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"

                rel="noopener noreferrer"            target="_blank"

                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"            rel="noopener noreferrer"

              >          >

                <span className="sr-only">{platform}</span>            Read our docs

                <SocialIcon platform={platform} className="h-6 w-6" />          </a>

              </a>        </div>

            ))}      </main>

          </motion.div>      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

        </div>        <a

      </Section>          className="flex items-center gap-2 hover:underline hover:underline-offset-4"

    </>          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"

  )          target="_blank"

}          rel="noopener noreferrer"

        >

function SocialIcon({ platform, className }: { platform: string; className?: string }) {          <Image

  // Using the same social icons as defined in the footer component            aria-hidden

  const iconMap: Record<string, JSX.Element> = {            src="/file.svg"

    github: (            alt="File icon"

      <svg className={className} fill="currentColor" viewBox="0 0 24 24">            width={16}

        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>            height={16}

      </svg>          />

    ),          Learn

    linkedin: (        </a>

      <svg className={className} fill="currentColor" viewBox="0 0 24 24">        <a

        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>          className="flex items-center gap-2 hover:underline hover:underline-offset-4"

      </svg>          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"

    ),          target="_blank"

    telegram: (          rel="noopener noreferrer"

      <svg className={className} fill="currentColor" viewBox="0 0 24 24">        >

        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.357.347-.737.347l.263-3.726 6.8-6.137c.295-.263-.07-.41-.455-.147l-8.417 5.29-3.63-1.13c-.79-.23-.802-.79.17-1.168l14.085-5.43c.663-.263 1.239.15.421 2.019z"/>          <Image

      </svg>            aria-hidden

    ),            src="/window.svg"

    instagram: (            alt="Window icon"

      <svg className={className} fill="currentColor" viewBox="0 0 24 24">            width={16}

        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>            height={16}

      </svg>          />

    ),          Examples

    email: (        </a>

      <svg className={className} fill="currentColor" viewBox="0 0 24 24">        <a

        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>          className="flex items-center gap-2 hover:underline hover:underline-offset-4"

      </svg>          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"

    ),          target="_blank"

  }          rel="noopener noreferrer"

        >

  return iconMap[platform.toLowerCase()] || null          <Image

}            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
