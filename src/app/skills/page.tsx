'use client'

import { motion } from 'framer-motion'
import { PageHeader, Section, Card } from '@/components/ui/containers'

const skills = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 'Expert' },
      { name: 'TypeScript', level: 'Expert' },
      { name: 'Next.js', level: 'Advanced' },
      { name: 'TailwindCSS', level: 'Advanced' },
      { name: 'HTML/CSS', level: 'Expert' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Python', level: 'Intermediate' },
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'MongoDB', level: 'Intermediate' },
    ],
  },
  {
    category: 'DevOps',
    skills: [
      { name: 'Git', level: 'Advanced' },
      { name: 'Docker', level: 'Intermediate' },
      { name: 'AWS', level: 'Intermediate' },
      { name: 'CI/CD', level: 'Intermediate' },
    ],
  },
]

function SkillLevel({ level }: { level: string }) {
  const levels = {
    Beginner: 1,
    Intermediate: 2,
    Advanced: 3,
    Expert: 4,
  }
  
  const dots = Array.from({ length: 4 }, (_, i) => i < levels[level as keyof typeof levels])

  return (
    <div className="flex gap-1">
      {dots.map((filled, i) => (
        <div
          key={i}
          className={`h-2 w-2 rounded-full ${
            filled
              ? 'bg-primary-600 dark:bg-primary-400'
              : 'bg-gray-200 dark:bg-gray-700'
          }`}
        />
      ))}
    </div>
  )
}

export default function Skills() {
  return (
    <div className="flex flex-col gap-16">
      <Section>
        <PageHeader
          title="Skills & Experience"
          description="A comprehensive overview of my technical skills and expertise."
        />
      </Section>
      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, i) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card>
                <h3 className="heading-3 mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between gap-4"
                    >
                      <span className="text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                      <SkillLevel level={skill.level} />
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  )
}