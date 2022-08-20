import fes from 'fs-extra'
import path from 'path'

const cache = {
  root: path.join(path.resolve('script'), 'cache.json'),
  get: async (key: string) => {
    const rawData = await fes.readFile(cache.root)

    const data = JSON.parse(rawData)
    return data[key]
  },
  set: async (key: string, value: unknown) => {
    let rawData = await fes.readFile(cache.root)

    const data = JSON.parse(rawData)
    data[key] = value
    rawData = JSON.stringify(data)
    await fes.writeFile(cache.root, rawData)
  },
  has: async (key: string) => {
    const rawData = await fes.readFile(cache.root)
    const data = JSON.parse(rawData)
    return Boolean(data[key])
  },
}

export default cache
