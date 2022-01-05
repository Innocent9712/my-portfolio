import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectDirectory = path.join(process.cwd(), 'projects')

export function getPostArr() {
    const fileNames = fs.readdirSync(postsDirectory)
    const allProjectData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, "")

        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf-8")

        const matterResult = matter(fileContents)

        return {
            id,
            ...matterResult.data
        }
    })
    return allProjectData;

}