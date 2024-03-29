type Post = {
  slug: string
  title: string
  ctime: string
  mtime: string
  date: string
  tags: Array<{ name: string }>
  excerpt: string
  content: string
  readingTime: string
  brief?: string
  category: string
  readingTime: string
  prevArticle?: Post
  nextArticle?: Post
}
