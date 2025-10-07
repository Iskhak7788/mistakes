import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export function getMarkdownContent(filename: string) {
  const filePath = path.join(contentDirectory, filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    frontMatter: data,
    content
  };
}

export function getAllContentFiles() {
  const files = fs.readdirSync(contentDirectory);
  return files.filter(file => file.endsWith('.md'));
}