import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Project } from '@/types'

const projectsDirectory = path.join(process.cwd(), 'content', 'projects')
const aboutFile = path.join(process.cwd(), 'content', 'about.md')

export function getAboutContent() {
  const fileContents = fs.readFileSync(aboutFile, 'utf8')
  const { content } = matter(fileContents)
  return content
}

export function getAllProjects() {
  const fileNames = fs.readdirSync(projectsDirectory)
  const allProjectsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(projectsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      id,
      content,
      ...(data as Omit<Project, 'id'>),
    }
  })

  return allProjectsData.sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return 0
  })
}

export function getProjectById(id: string) {
  const fullPath = path.join(projectsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    id,
    content,
    ...(data as Omit<Project, 'id'>),
  }
}