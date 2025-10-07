'use client'

import { motion } from 'framer-motion'
import { getAllProjects } from '@/lib/content'
import { PageHeader, Section, Card } from '@/components/ui/containers'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  const projects = getAllProjects()

  return (
    <div className="flex flex-col gap-16">
      <Section>
        <PageHeader
          title="Projects"
          description="A showcase of my recent work, side projects, and experiments."
        />
      </Section>
      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full">
                {project.image && (
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-4 p-6">
                  <h3 className="heading-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-4">
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                      >
                        View Project
                      </Link>
                    )}
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                      >
                        View Code
                      </Link>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  )
}