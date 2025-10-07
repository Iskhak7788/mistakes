import { getAboutContent } from '@/lib/content'
import { PageHeader, Section } from '@/components/ui/containers'
import { marked } from 'marked'

export default function About() {
  const content = getAboutContent()
  const htmlContent = marked(content)

  return (
    <div className="flex flex-col gap-16">
      <Section>
        <PageHeader
          title="About Me"
          description="Learn about my journey, skills, and what drives me as a developer."
        />
      </Section>
      <Section className="prose prose-gray dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </Section>
    </div>
  )
}