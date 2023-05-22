import { keystoneContext as context } from '../src/api/context'
import fs from 'node:fs/promises'
import path from 'node:path'
import { createPosts } from '../admin/api'

async function walk(dir: string) {
  let filesInfo = await fs.readdir(dir)
  const files = await Promise.all(
    filesInfo.map(async (name) => {
      const filePath = path.join(dir, name)
      const stats = await fs.stat(filePath)
      if (stats.isDirectory()) {
        return walk(filePath)
      } else if (stats.isFile()) {
        if (path.extname(filePath) !== '.md') {
          return false
        }
        const rawContent = await fs.readFile(filePath, { encoding: 'utf8' })
        const destination = path.resolve(__dirname, '../_posts_archive', name)
        filePaths.push([filePath, destination])
        return rawContent
      }
    })
  )

  return files.flat()
}

let filePaths: Array<[string, string]> = []

/**
 * @deprecated
 */
async function main() {
  filePaths = []
  let files = await walk(path.resolve(__dirname, '../_posts'))
  files = files.filter(Boolean)
  console.log(`${files.length} files are precessing...`)
  await createPosts(files, context)
  await Promise.all(
    filePaths.map(([origin, destination]) => {
      return fs.rename(origin, destination)
    })
  )
  console.log(`All Done!`)
}

main()
